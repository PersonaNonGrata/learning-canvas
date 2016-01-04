(ns canvas.core
  (:require [goog.events :as events]
            [goog.events.EventType :as event-type]
            [cljs.core.async :refer [chan close!]]
            )
  (:require-macros
   [cljs.core.async.macros :as m :refer [go]]))

(def history (atom []))

(def state (atom 
            [
             ;;{:type :rectangle :x 300 :y 300 :h 400 :w 400 :dx 5 :dy 2 :color "#ccc"}
             ;;{:type :rectangle :x 400 :y 400 :h 200 :w 200 :dx 5 :dy 2 :color "#aaa"}
              ;; {:type :rectangle :x 450 :y 450 :h 100 :w 100 :dx 5 :dy 2 :color "#cac"}
              ;; {:type :rectangle :x 300 :y 300 :h 100 :w 100 :dx 5 :dy 2 :color "#aba"}
              ;; {:type :rectangle :x 600 :y 600 :h 100 :w 100 :dx 5 :dy 2 :color "#b3b"}
             ;; {:type :rectangle :x 600 :y 300 :h 100 :w 100 :dx 5 :dy 2 :color "#efe"}
              ;; {:type :rectangle :x 300 :y 600 :h 100 :w 100 :dx 5 :dy 2 :color "#f5f"}
             ;;{:type :circle :x 100 :y 100 :radius 30 :dx 5 :dy 2 :color "#aaa"}
              {:type :line :start {:x 200 :y 0} :end {:x 200 :y 5000} :dx 0 :dy 0 :color "#fff"}
              {:type :line :start {:x 500 :y 0} :end {:x 500 :y 5000} :dx 0 :dy 0 :color "#fff"}
              {:type :line :start {:x 600 :y 0} :end {:x 600 :y 5000} :dx 0 :dy 0 :color "#fff"}
              {:type :line :start {:x 800 :y 0} :end {:x 800 :y 5000} :dx 0 :dy 0 :color "#fff"}
;;              {:type :line :start {:x 0 :y 500} :end {:x 5000 :y 500} :dx 0 :dy 0 :color "#fff"}
              ;; {:type :line :start {:x 100 :y 500} :end {:x 100 :y 500} :dx 0.2 :dy 0 :color "#fff"}
              ;; {:type :line :start {:x 100 :y 500} :end {:x 100 :y 500} :dx -0.2 :dy 0 :color "#fff"}             
             ]
            ))

(def pi-times-2 (* Math/PI 2))

(def canvas-dom (.getElementById js/document "c1"))

;;(def upper-x (+ (:x (first @state)) (:w (first @state))))

;;(def upper-y (+ (:y (first @state)) (:h (first @state))))

(def context (.getContext canvas-dom "2d"))

(def inner-width (.-innerWidth js/window))

(def inner-height (.-innerHeight js/window))

(set! (.-width canvas-dom) inner-width)

(set! (.-height canvas-dom) inner-height)

(defn draw-circle [x y radius start-angle end-angle]
  (.beginPath context)
  (.arc context x y radius start-angle end-angle)
  (.stroke context))

 ;; (defn fill-circle-1 [{:keys [x y radius] :or {start-angle 0 end-angle pi-times-2}}]
 ;;  (.beginPath context)
 ;;  (.arc context x y radius start-angle end-angle)
 ;;  (.fill context))

(defn fill-circle [x y radius start-angle end-angle]
  (.beginPath context)
  (.arc context x y radius start-angle end-angle)
  (.fill context))

(defn draw-line [start end]
  (.beginPath context)
  (.moveTo context (:x start) (:y start))
  (.lineTo context (:x end) (:y end))
  (.stroke context))

(defn draw! [the-state]
  (do
    (set! (. context -fillStyle) (:color (first the-state)))
    (doseq [shape the-state]
      (set! (. context -fillStyle) (:color shape))      
      (condp = (:type shape)
        :rectangle (.fillRect context (:x shape) (:y shape) (:w shape) (:h shape))
        :circle (fill-circle (:x shape) (:y shape) (:radius shape) 0 pi-times-2)
        :line (draw-line (:start shape) (:end shape)))
      )
    ))

(defn updater [state]
  (->> state       
       (map (fn [shape] (update shape :x #(+ % (:dx shape)))))
       (map (fn [shape] (update shape :y #(+ % (:dy shape)))))
       )
  )

(defn update-shape-position [shape]
  (condp = (:type shape)
    :line (-> shape
              (update-in [:end :x] + (:dx shape))
              (update-in [:end :y] + (:dy shape)))
    (-> shape
        (update :x + (:dx shape))
        (update :y + (:dy shape)))
    ))

;;{:type :line :start {:x 500 :y 500} :end {:x 700 :y 500} :dx 0 :dy 2 :color "#fff"}
(defn out-of-bounds? [shape direction]
  (condp = (:type shape)
    :line (or 
           (or (>= (:x (:end shape)) (.-innerWidth js/window)) (<= (:x (:end shape)) 0))
           (or (>= (:y (:end shape)) (.-innerHeight js/window)) (<= (:y (:end shape)) 0)))
    (condp = direction
      :horizontal (or (>= (+ (:x shape) (:w shape)) (.-innerWidth js/window)) (<= (:x shape) 0))
      :vertical   (or (>= (+ (:y shape) (:h shape)) (.-innerHeight js/window)) (<= (:y shape) 0))
      )
    )
  )

(defn test-delta [shape]
  (if (out-of-bounds? shape :horizontal)
    (assoc (assoc shape :dy 0) :dx 0)
    shape
    ))

;;ugh clean this ugly shit
(defn update-shape-delta [shape]
  (condp = (:type shape)
    :line (if (out-of-bounds? shape :horizontal)
      (assoc (assoc shape :dy 0) :dx 0)
      shape)
    (if (out-of-bounds? shape :horizontal) 
      (update shape :dx #(- %))
      (if (out-of-bounds? shape :vertical)
        (update shape :dy #(- %))
        shape))))

(defn update-deltas [state]
  (mapv update-shape-delta state))

(defn update-positions [state]
  (mapv update-shape-position state))

(defn clear! []
  (.clearRect context 0 0 (.-innerWidth js/window) (.-innerHeight js/window)))

(defn line-distance [start end]
  (let [xs (- (:x end) (:x start))
        ys (- (:y end) (:y start))]
    (Math/sqrt (+ (* xs xs) (* ys ys)))))

(defn update-line-delta! [line state]
  (if (or (>= (:y (:end line)) (.-innerHeight js/window)) (<= (:end line 0)))
    (swap! state (merge (update line :dy #(- %))))))

(defn reset-render! [old-state]
  (let [new-state (-> old-state
                      (update-deltas)
                      (update-positions))]
    (clear!)
    (reset! state new-state)
    (draw! @state))
   (.requestAnimationFrame js/window #(reset-render! @state))
)

(defn stop! []
  (do 
    (reset! state [])
    (clear!)))

(defn timeout [ms]
  (let [c (chan)]
    (js/setTimeout (fn [] (close! c)) ms)
    c))

(defn hoppla [men]
  (if (= (count men) 1)
    nil    
    (do
      (go
        (<! (timeout 1000))
        (draw! (first men))
        (<! (timeout 1000))
        (clear!)            
        )
      (recur (rest men)))
    ))

(defn foreach [f xs] 
  (doseq [x xs] (f x)))

(defn replay! [] 
  (let [my @history]
    (hoppla my)))

(defn sr! []
  (do
    (stop!)
    (replay!)))

 ;;> (:radius circle) (- (:x (:start line)) (:x circle))

(defn circles-colliding? [c1 c2]
  (let [dx (- (:x c1) (:x c2))
        dy (- (:y c1) (:y c2))
        dist (Math/sqrt (+ (* dx dx) (* dy dy)))]
    (< dist (+ (:radius c1) (:radius c2)))))

(defn update-circle-delta [state]
  (for [shape state]
    (if (< 1 (count (filter (partial circles-colliding? shape) state)))
      (-> shape 
          (update :dx #(- %))
          (update :dy #(- %))
          )
      shape
      )
    ))

(defn abs [n] (max n (- n)))

;; (defn circle-collide-with-line? [circle direction line]
;;   (condp = direction
;;     :horizontal (<= (abs (- (:x circle) (:radius circle))) (:x (:start line)))
;;     :vertical (<= (abs (- (:y circle) (:radius circle))) (:y ("start"" line)))))

;; (defn circle-collide-with-line? [circle line]
;;   (let [rad (- (:x circle) (:radius circle))
;;         line-start (:x (:start line))]
;;     (.log js/console (str "rad : " rad))
;;     (.log js/console (str "ls : " line-start))
;;     (<= rad (:x (:start line)))))

(defn line-direction [line]
  (if (= (:x (:start line)) (:x (:end line)))
    :horizontal
    :vertical))

(defn circle-collide-with-line? [circle line]
  (let [dist (abs (- (:x circle) (:x (:start line))))]
    (if (= (:type line) :circle)
      false
      (< dist (:radius circle)))))

;; (defn update-circle-if-collide-with-line [state]
;;   (for [shape state]
;;     ))

(defn update-circle-if-collide-with-line [state]
  (for [shape state]
    (do
;;      (.log js/console (count (filter (partial circle-collide-with-line? shape) state)))
      (condp = (:type shape)
        :circle (if (< 0 (count (filter (partial circle-collide-with-line? shape) state)))                
                  (-> shape 
                      (update :dx #(- %))
                      ;;(update :dy #(- %))
                      )
                  shape)
        :line shape
        ))))

(defn render! [the-state]
  (if (not (empty? the-state))
    (do
      ;;(swap! history conj {(keyword (str (.getTime (js/Date.)))) (into [] @state)})
      (swap! history conj (into [] @state))
      (swap! state update-deltas)
      (swap! state update-positions)
      (swap! state update-circle-delta)
      (swap! state update-circle-if-collide-with-line)
      (clear!)
      (draw! @state)))
  (.requestAnimationFrame js/window #(render! @state)))

;;(.requestAnimationFrame js/window #(render! @state))
(render! @state)

(defn add-lines! [old-state x y]
  (let [new-state (-> old-state
                     ;; (conj {:type :line :start {:x (+ x 50) :y y} :end {:x (+ x 50) :y y} :dx 0 :dy 1 :color  "#fff"})
                     ;; (conj {:type :line :start {:x (+ x 50) :y y} :end {:x (+ x 50) :y y} :dx 0 :dy -1 :color "#fff"})
                    ;;  (conj {:type :line :start {:x x :y y} :end {:x x :y y} :dx -1 :dy 0 :color "#fff"})
                    ;;  (conj {:type :line :start {:x x :y y} :end {:x x :y y} :dx 1 :dy 0 :color "#fff"})
                      ;; (conj {:type :circle :x x :y y :radius 30 :dx 5 :dy 5 :color "#aaa"})
                      ;; (conj {:type :circle :x x :y y :radius 30 :dx -5 :dy -5 :color "#aaa"})
                      ;; (conj {:type :circle :x x :y y :radius 30 :dx 5 :dy -5 :color "#aaa"})
                      (conj {:type :circle :x x :y y :radius 20 :dx -5 :dy 5 :color "#aaa"})
                      )]
    (reset! state new-state)
    ))

(defn on-clek [e]
  (do
    ;; (.log js/console (str e))
    ;; (.log js/console (str "screenX" e.screenX))
    ;; (.log js/console (str "screenY" e.screenY))
    ;; (.log js/console (str "offsetX" e.offsetX))
    ;; (.log js/console (str "offsetY" e.offsetY))
    ;; (.log js/console (str "event X" event.x))
    (add-lines! @state event.x event.y)    
    (.log js/console (str "event Y" event.y))
    ;;(render! @state)
    ;;(set! (. context -fillStyle) "#fff")          
    ;;(set! (. context -fillStyle) "#fff")
    ;;(.fillRect context (- event.x 15) (- event.y 15) 10 10)
    ))

(events/listen js/window event-type/CLICK on-clek)

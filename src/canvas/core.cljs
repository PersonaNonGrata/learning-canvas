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
               {:type :circle :x 150 :y 150 :radius 10 :dx 5 :dy 2 :color "#aaa"}
               {:type :circle :x 250 :y 100 :radius 10 :dx 5 :dy 2 :color "#aaa"}             
              ;; {:type :circle :x 450 :y 550 :radius 10 :dx 5 :dy 2 :color "#aaa"}
              {:type :circle :x 450 :y 650 :radius 10 :dx 5 :dy 2 :color "#aaa"}
              ;; {:type :circle :x 750 :y 350 :radius 10 :dx 5 :dy 2 :color "#aaa"}
              ;; {:type :line :start {:x 200 :y 0} :end {:x 200 :y 5000} :dx 0 :dy 0 :color "#fff"}
              ;; {:type :line :start {:x 500 :y 0} :end {:x 500 :y 5000} :dx 0 :dy 0 :color "#fff"}
              ;; {:type :line :start {:x 450 :y 0} :end {:x 450 :y 5000} :dx 0 :dy 0 :color "#fff"}
             ;; {:type :line :start {:x 550 :y 400} :end {:x 550 :y 900} :dx 0 :dy 0 :color "#fff"}
             ;; {:type :line :start {:x 300 :y 650} :end {:x 800 :y 650} :dx 0 :dy 0 :color "#fff"}
             ;; {:type :line :start {:x 800 :y 0} :end {:x 800 :y 5000} :dx 0 :dy 0 :color "#fff"}
             ;; {:type :line :start {:x 0 :y 300} :end {:x 5000 :y 300} :dx 0 :dy 0 :color "#fff"}
              {:type :circle :x 350 :y 450 :radius 10 :dx 5 :dy 2 :color "#aaa"}
              ;; {:type :line :start {:x 0 :y 400} :end {:x 5000 :y 400} :dx 0 :dy 0 :color "#fff"}
              ;;{:type :line :start {:x 0 :y 500} :end {:x 5000 :y 500} :dx 0 :dy 0 :color "#fff"}
              ;; {:type :line :start {:x 0 :y 600} :end {:x 5000 :y 600} :dx 0 :dy 0 :color "#fff"}
              ;; {:type :line :start {:x 0 :y 700} :end {:x 5000 :y 700} :dx 0 :dy 0 :color "#fff"}
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

(defn stop! []
  (do 
    (reset! state [])
    (clear!)))

(defn timeout [ms]
  (let [c (chan)]
    (js/setTimeout (fn [] (close! c)) ms)
    c))

(defn replay! [] 
  (doseq [entry @history ]
    (go
      (<! (timeout 1000))
      (draw! entry)
      (<! (timeout 1000))
      )))

(defn sr! []
  (do
    (stop!)
    (replay!)))

(defn circles-colliding? [c1 c2]
  (let [dx (- (:x c1) (:x c2))
        dy (- (:y c1) (:y c2))
        dist (Math/sqrt (+ (* dx dx) (* dy dy)))]
    (< dist (+ (:radius c1) (:radius c2)))))

(defn abs [n] (max n (- n)))

(defn line-direction [line]
  (if (= (:x (:start line)) (:x (:end line)))
    :horizontal
    :vertical))

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

;;ugh clean this ugly shit
(defn update-shape-delta-if-out-of-bounds [shape]
  (condp = (:type shape)
    :line (if (out-of-bounds? shape :horizontal)
      (assoc (assoc shape :dy 0) :dx 0)
      shape)
    (if (out-of-bounds? shape :horizontal) 
      (update shape :dx #(- %))
      (if (out-of-bounds? shape :vertical)
        (update shape :dy #(- %))
        shape))))

(defn highest-x [line]
  (if (< (:x (:start line)) (:x (:end line)))
      (:x (:end line))
      (:x (:start line))))

(defn lowest-x [line]
  (if (> (:x (:start line)) (:x (:end line)))
      (:x (:end line))
      (:x (:start line))))

(defn lowest-y [line]
  (if (> (:y (:start line)) (:y (:end line)))
      (:y (:end line))
      (:y (:start line))))

(defn highest-y [line]
  (if (< (:y (:start line)) (:y (:end line)))
      (:y (:end line))
      (:y (:start line))))

(defn circle-collide-with-line? [circle direction line]
  (let [dist-start-x (abs (- (:x circle) (:x (:start line))))
        dist-start-y (abs (- (:y circle) (:y (:start line))))
        dist-end-y (abs (- (:y circle) (:y (:end line))))
        dist-end-x (abs (- (:x circle) (:x (:end line))))]
    (condp = (:type line)      
      :line (condp = direction 
              :horizontal (and (< dist-start-x (:radius circle)) (< (:y circle) (highest-y line)) (> (:y circle) (lowest-y line)))
              :vertical (and (< dist-start-y (:radius circle)) (< (:x circle) (highest-x line)) (> (:x circle) (lowest-x line)))
              )
      :circle false)))

(defn update-circle-if-collide-with-line [state]
  (for [shape state]
    (condp = (:type shape)
      :circle (if (< 0 (count (filter (partial circle-collide-with-line? shape :horizontal) state)))
                (-> shape 
                    (update :dx #(- %)))
                (if (< 0 (count (filter (partial circle-collide-with-line? shape :vertical) state)))
                  (-> shape 
                      (update :dy #(- %)))
                  shape))
      :line shape
      )))

(defn update-deltas [state]
  (->> state
      (mapv update-shape-delta-if-out-of-bounds)
      (update-circle-delta)
      (update-circle-if-collide-with-line)))

(defn render! [the-state]
  (if (not (empty? the-state))
    (do
      ;;(swap! history conj (into [] @state))
      (swap! state update-deltas)
      (swap! state update-positions)
      (clear!)
      (draw! @state)))
  (.requestAnimationFrame js/window #(render! @state)))

;;(.requestAnimationFrame js/window #(render! @state))
(render! @state)

(defn my-rand []
  (condp = (rand-int 2)
    0 -
    1 +))

(defn add-lines! [old-state x y]
  (let [new-state (-> old-state
                       (conj {:type :line :start {:x x :y y} :end {:x x :y y} :dx 0 :dy 5 :color  "#fff"})
                       (conj {:type :line :start {:x x :y y} :end {:x x :y y} :dx 0 :dy -5 :color "#fff"})
                       (conj {:type :line :start {:x x :y y} :end {:x x :y y} :dx -5 :dy 0 :color "#fff"})
                       (conj {:type :line :start {:x x :y y} :end {:x x :y y} :dx 5 :dy 0 :color "#fff"})
                      ;; (conj {:type :circle :x x :y y :radius 30 :dx 5 :dy 5 :color "#aaa"})
                      ;; (conj {:type :circle :x x :y y :radius 30 :dx -5 :dy -5 :color "#aaa"})
                      ;; (conj {:type :circle :x x :y y :radius 30 :dx 5 :dy -5 :color "#aaa"})
         ;; (conj {:type :circle :x x :y y :radius 10 :dx ((my-rand) (rand-int 5) (rand-int 5)) :dy ((my-rand) (rand-int 5) (rand-int 5)) :color "#aaa"})
         ;; (conj {:type :circle :x x :y y :radius 10 :dx ((my-rand) (rand-int 5) (rand-int 5)) :dy ((my-rand) (rand-int 5) (rand-int 5)) :color "#aaa"})
          ;;(conj {:type :circle :x x :y y :radius 10 :dx 5 :dy 5 :color "#aaa"})
         ;;(conj {:type :circle :x x :y y :radius 10 :dx ((my-rand) (rand-int 5) (rand-int 5)) :dy ((my-rand) (rand-int 5) (rand-int 5)) :color "#aaa"})
                      )]
    (reset! state new-state)
    ))

(defn on-click [e]
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

(events/listen js/window event-type/CLICK on-click)

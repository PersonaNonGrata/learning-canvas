(ns canvas.core
  (:require [goog.events :as events]
            [goog.events.EventType :as event-type]))

(def state (atom 
            [
             ;;{:type :rectangle :x 300 :y 300 :h 400 :w 400 :dx 5 :dy 2 :color "#ccc"}
             ;;{:type :rectangle :x 400 :y 400 :h 200 :w 200 :dx 5 :dy 2 :color "#aaa"}
             ;;{:type :rectangle :x 450 :y 450 :h 100 :w 100 :dx 5 :dy 2 :color "#333"}
             ;;{:type :rectangle :x 300 :y 300 :h 100 :w 100 :dx 5 :dy 2 :color "#aaa"}
             ;;{:type :rectangle :x 600 :y 600 :h 100 :w 100 :dx 5 :dy 2 :color "#aaa"}
             ;;{:type :rectangle :x 600 :y 300 :h 100 :w 100 :dx 5 :dy 2 :color "#aaa"}
             ;;{:type :rectangle :x 300 :y 600 :h 100 :w 100 :dx 5 :dy 2 :color "#aaa"}
             ;;{:type :circle :x 100 :y 100 :radius 30 :dx 1 :dy 1 :color "#aaa"}
             {:type :line :start {:x 500 :y 500} :end {:x 700 :y 500} :dx 0 :dy 2 :color "#fff"}
             ]
            ))

(def pi-times-2 (* Math/PI 2))

(def canvas-dom (.getElementById js/document "c1"))

(def upper-x (+ (:x (first @state)) (:w (first @state))))

(def upper-y (+ (:y (first @state)) (:h (first @state))))

(def context (.getContext canvas-dom "2d"))

(def inner-width (.-innerWidth js/window))

(def inner-height (.-innerHeight js/window))

(set! (.-width canvas-dom) inner-width)

(set! (.-height canvas-dom) inner-height)

(defn update-lines [state]
  state)

(defn draw-circle [x y radius start-angle end-angle]
  (.beginPath context)
  (.arc context x y radius start-angle end-angle)
  (.stroke context))

(defn fill-circle [x y radius start-angle end-angle]
  (.beginPath context)
  (.arc context x y radius start-angle end-angle)
  (.fill context))

(defn draw! [state]
  (do
    (set! (. context -fillStyle) (:color (first state)))
    (doseq [shape state]
      (set! (. context -fillStyle) (:color shape))      
      (condp = (:type shape)
        :rectangle (.fillRect context (:x shape) (:y shape) (:w shape) (:h shape))
        :circle  (fill-circle (:x shape) (:y shape) (:radius shape) 0 pi-times-2))
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
        (update :y + (:dy shape))        
        )    
    ))

(defn out-of-bounds? [shape direction]
  (condp = direction
    :horizontal (or (>= (+ (:x shape) (:w shape)) (.-innerWidth js/window)) (<= (:x shape) 0))
    :vertical   (or (>= (+ (:y shape) (:h shape)) (.-innerHeight js/window)) (<= (:y shape) 0))
    )
  )

(defn update-shape-delta [shape]
  (if (out-of-bounds? shape :horizontal)
    (update shape :dx #(- %))
    (if (out-of-bounds? shape :vertical)
      (update shape :dy #(- %))
      shape)))

(defn update-deltas [state]
  (mapv update-shape-delta state))

(defn update-positions [state]
  (mapv update-shape-position state))

(defn clear! []
  (.clearRect context 0 0 (.-innerWidth js/window) (.-innerHeight js/window)))

(defn direction-change-x [state]
  (map (fn [shape] (update shape :dx #(- %))) state))

(defn direction-change-y [state]
  (map (fn [shape] (update shape :dy #(- %))) state))

(defn line-distance [start end]
  (let [xs (- (:x end) (:x start))
        ys (- (:y end) (:y start))]
    (Math/sqrt (+ (* xs xs) (* ys ys)))))

(defn update-line-delta! [line state]
  (if (or (>= (:y (:end line)) (.-innerHeight js/window)) (<= (:end line 0)))
    (swap! state (merge (update line :dy #(- %))))))

(defn update-rectangle-delta! [rect state]
    (if (or (>= (+ (:x rect) (:w rect)) (.-innerWidth js/window)) (<= (:x rect) 0))
      (swap! state direction-change-x))
    (if (or (>= (+ (:y rect) (:h rect)) (.-innerHeight js/window)) (<= (:y rect) 0))
      (swap! state direction-change-y)))

(defn update-deltas! [state]
  (doseq [shape state]
    (condp = (:type shape)
      :rectangle (update-rectangle-delta! shape state)
      :line (update-line-delta! shape state))))

;; (defn old-render! [state]  
;;   (do
;;     (clear!)     
;;     (if (or (>= (+ (:x (first @state)) (:w (first @state))) (.-innerWidth js/window)) (<= (:x (first @state)) 0))
;;       (swap! state direction-change-x))
;;     (if (or (>= (+ (:y (first @state)) (:h (first @state))) (.-innerHeight js/window)) (<= (:y (first @state)) 0))
;;       (swap! state direction-change-y))
;;     (swap! state updater)
;;     (draw! @state))
;;   (.requestAnimationFrame js/window #(render! state))        
;;     ;;(js/setInterval #(render! state) 5)
;; )


(defn render! [old-state]
  (let [new-state (-> old-state
                      (update-deltas)
                      (update-positions))]
    (clear!)
    (reset! state new-state)
    (draw! @state))    
)

(.requestAnimationFrame js/window #(render! @state))

;;(render! state)

(defn on-clek [e]
  (do
    ;; (.log js/console (str e))
    ;; (.log js/console (str "screenX" e.screenX))
    ;; (.log js/console (str "screenY" e.screenY))
    ;; (.log js/console (str "offsetX" e.offsetX))
    ;; (.log js/console (str "offsetY" e.offsetY))
    ;; (.log js/console (str "event X" event.x))
    (.log js/console (str "event Y" event.y))
    (render! @state)
    ;;(set! (. context -fillStyle) "#fff")          
    ;;(set! (. context -fillStyle) "#fff")
    ;;(.fillRect context (- event.x 15) (- event.y 15) 10 10)
    ))

(events/listen js/window event-type/CLICK on-clek)

 ;{:type :line :start {:x 500 :y 500} :end {:x 700 :y 500} :dx 0 :dy 2 :color "#fff"}

;;(def m {:1 {:value 0, :active false}, :2 {:value 0, :active false}})

;;(update-in m [:1] assoc :value 1 :active true)
;;=>{:1 {:value 1, :active true}, :2 {:value 0, :active false}}


;; (defn grow-lines [state]
;;   (map grow-line state))

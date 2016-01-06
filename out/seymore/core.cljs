(ns seymore.core
  (:require [goog.events :as events]
            [goog.events.EventType :as event-type]))

(def state (atom 
            [
             ;; {:type :rectangle :x 300 :y 300 :h 400 :w 400 :dx 5 :dy 2 :color "#ccc"}
             ;; {:type :rectangle :x 400 :y 400 :h 200 :w 200 :dx 5 :dy 2 :color "#aaa"}
             ;; {:type :rectangle :x 450 :y 450 :h 100 :w 100 :dx 5 :dy 2 :color "#333"}
             ;; {:type :rectangle :x 300 :y 300 :h 100 :w 100 :dx 5 :dy 2 :color "#aaa"}
             ;; {:type :rectangle :x 600 :y 600 :h 100 :w 100 :dx 5 :dy 2 :color "#aaa"}
             ;; {:type :rectangle :x 600 :y 300 :h 100 :w 100 :dx 5 :dy 2 :color "#aaa"}
             ;;{:type :rectangle :x 300 :y 600 :h 100 :w 100 :dx 5 :dy 2 :color "#aaa"}
             {:type :circle :radius 50  :dx 2 :dy 2 :color "#aaa"}
             ;{:type :line :start {:x 500 :y 500} :end {:x 700 :y 500} :dx 0 :dy 2 :color "#fff"}
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

(defn draw-circle [x y radius start-angle end-angle]
  (.beginPath context)
  (.arc context x y radius start-angle end-angle)
  (.stroke context))

(defn draw! [state]
  (do
    (set! (. context -fillStyle) (:color (first state)))
    (doseq [shape state]
      (set! (. context -fillStyle) (:color shape))      
      (condp = (:type shape)
        :rectangle (.fillRect context (:x shape) (:y shape) (:w shape) (:h shape))
        :circle  (draw-circle (:x shape) (:y shape) (:radius shape) 0 pi-times-2))
      )
    ))

(defn updater [state]
  (->> state       
       (map (fn [shape] (update shape :x #(+ % (:dx shape)))))
       (map (fn [shape] (update shape :y #(+ % (:dy shape)))))
       )
  )

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

(defn render! [state]  
  (do
    (clear!)     
    (if (or (>= (+ (:x (first @state)) (:w (first @state))) (.-innerWidth js/window)) (<= (:x (first @state)) 0))
      (swap! state direction-change-x))
    (if (or (>= (+ (:y (first @state)) (:h (first @state))) (.-innerHeight js/window)) (<= (:y (first @state)) 0))
      (swap! state direction-change-y))
    (swap! state updater)
    (draw! @state))
  (.requestAnimationFrame js/window #(render! state))        
    ;;(js/setInterval #(render! state) 5)
)

(.requestAnimationFrame js/window #(render! state))

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
    ;;(render! state)
    ;;(set! (. context -fillStyle) "#fff")          
    ;;(set! (. context -fillStyle) "#fff")
    ;;(.fillRect context (- event.x 15) (- event.y 15) 10 10)
    ))

(events/listen js/window event-type/CLICK on-clek)





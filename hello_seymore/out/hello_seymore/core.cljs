(ns hello-seymore.core
  (:require [goog.events :as events]
            [goog.events.EventType :as event-type]))

(def state (atom 
            [{:type :rectangle :x 300 :y 300 :h 400 :w 400 :vx 5 :vy 2 :color "#ccc"}
             {:type :rectangle :x 400 :y 400 :h 200 :w 200 :vx 5 :vy 2 :color "#aaa"}
             {:type :rectangle :x 450 :y 450 :h 100 :w 100 :vx 5 :vy 2 :color "#333"}
             {:type :rectangle :x 300 :y 300 :h 100 :w 100 :vx 5 :vy 2 :color "#aaa"}
             {:type :rectangle :x 600 :y 600 :h 100 :w 100 :vx 5 :vy 2 :color "#aaa"}
             {:type :rectangle :x 600 :y 300 :h 100 :w 100 :vx 5 :vy 2 :color "#aaa"}
             {:type :rectangle :x 300 :y 600 :h 100 :w 100 :vx 5 :vy 2 :color "#aaa"}
             ]
            ))

(def canvas-dom (.getElementById js/document "c1"))

(def upper-x (+ (:x (first @state)) (:w (first @state))))

(def upper-y (+ (:y (first @state)) (:h (first @state))))

(def context (.getContext canvas-dom "2d"))

(def inner-width (.-innerWidth js/window))

(def inner-height (.-innerHeight js/window))

(set! (.-width canvas-dom) inner-width)

(set! (.-height canvas-dom) inner-height)

(defn draw! [state]
  (do
    (set! (. context -fillStyle) (:color (first state)))
    (doseq [rect state]
      (set! (. context -fillStyle) (:color rect))
      (.fillRect context (:x rect) (:y rect) (:w rect) (:h rect)))
    ))

(defn updater [state]
  (->> state       
       ;;       (map (fn [shape] (update shape :vx #(- %))))
       ;;       (map (fn [shape] (update shape :vy #(- %))))
       (map (fn [shape] (update shape :x #(+ % (:vx shape)))))
       (map (fn [shape] (update shape :y #(+ % (:vy shape)))))
       )
  )

;; (defn updater [state]  
;;   (->> state
;;        (map (fn [shape] (update shape :x #(+ % (:vx shape)))))
;;        (map (fn [shape] (update shape :y #(+ % (:vy shape)))))
;;        )
;; )

(defn clear! []
  (.clearRect context 0 0 (.-innerWidth js/window) (.-innerHeight js/window)))

(defn direction-change-x [state]
  (map (fn [shape] (update shape :vx #(- %))) state))

(defn direction-change-y [state]
  (map (fn [shape] (update shape :vy #(- %))) state))

(defn render! [state]  
  (do
    (clear!)     
    (if (or (>= (+ (:x (first @state)) (:w (first @state))) inner-width) (<= (:x (first @state)) 0))
      (swap! state direction-change-x))
    (if (or (>= (+ (:y (first @state)) (:h (first @state))) inner-height) (<= (:y (first @state)) 0))
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
    ;; (.log js/console (str "event Y" event.y))
    (render! state)
    ;;(set! (. context -fillStyle) "#fff")
    ;;(.fillRect context (- event.x 15) (- event.y 15) 10 10)
    ))

(events/listen js/window event-type/CLICK on-clek)





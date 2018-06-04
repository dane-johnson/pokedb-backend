(ns pokedb-backend.core
  (:require [compojure.core :refer :all]
            [org.httpkit.server :refer [run-server]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.file :refer [wrap-file]]
            [ring.middleware.cors :refer [wrap-cors]]
            ;; My stuff
            [pokedb-backend.db :refer [get-trainers get-pokes update-age
                                       delete-pokemon get-species add-pokemon
                                       get-win-loss]])
  (:gen-class))

(defroutes pokedb-routes
  (GET "/trainers" [] (prn-str (get-trainers)))
  (PUT "/trainer/:id" [id age] (do (update-age id age) {:status 200}))
  (GET "/pokemon/:id" [id] (prn-str (get-pokes id)))
  (DELETE "/pokemon/:id" [id] (do (delete-pokemon id) {:status 200}))
  (POST "/pokemon" [trainernumber speciesname nickname attack defense]
        (add-pokemon trainernumber speciesname nickname attack defense)
        {:status 200})
  (GET "/species" [] (prn-str (get-species)))
  (GET "/winloss" [number speciesname]
       (prn-str (get-win-loss number speciesname))))

(defn -main
  [& args]
  (run-server (-> pokedb-routes
                  (wrap-file "resources/public")
                  (wrap-cors :access-control-allow-origin [#".*"]
                             :access-control-allow-methods [:get :put :delete :post])
                  wrap-params)
              {:port 5000})
  (println "Server running!"))

(defproject pokedb-backend "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/java.jdbc "0.7.3"]
                 [mysql/mysql-connector-java "5.1.44"]
                 [ring/ring-json "0.4.0"]
                 [ring-cors "0.1.11"]
                 [compojure "1.1.8"]
                 [http-kit "2.1.16"]]
  :main ^:skip-aot pokedb-backend.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})

(ns pokedb-backend.db
  (:require [clojure.java.jdbc :as j])
  (:gen-class))

(def mysql-db {:dbtype "mysql"
               :dbname "pokemon"
               :host "danejohnson.ddns.net"
               :user "mark"
               :password "mckenny"})

(defn get-trainers
  []
  (j/query mysql-db "SELECT * FROM Trainers LIMIT 20"))

(defn get-pokes
  [trainer-number]
  (j/query mysql-db (str "SELECT * FROM Pokemon WHERE trainerNumber = " trainer-number) ))

(defn get-species
  []
  (j/query mysql-db "SELECT * FROM Species ORDER BY `order` LIMIT 30"))

(defn update-age
  [no age]
  (j/execute! mysql-db (str "UPDATE Trainers SET age = " age
                            " WHERE number = " no)))

(defn delete-pokemon
  [no]
  (j/execute! mysql-db (str "DELETE FROM Pokemon WHERE number = " no)))

(defn add-pokemon
  [trainerno speciesname nickname attack defense]
  (j/execute! mysql-db (str "INSERT INTO Pokemon (number, speciesName, trainerNumber, nickname, attack, defense)\n"
                            "VALUE\n"
                            "(((SELECT MAX(number) FROM Pokemon AS p) + 1), '" speciesname "'," trainerno ",'" nickname "'," attack "," defense ");")))

(defn get-win-loss
  [number, speciesname]
  (j/query mysql-db (str "SELECT 
IFNULL(win.wins, 0) AS wins,
IFNULL(lose.losses, 0) AS losses
FROM Pokemon p
LEFT OUTER JOIN (
SELECT COUNT(battleNumber) wins, pokemonNumber, speciesName, trainerNumber FROM FightInWith f
WHERE (f.trainerNumber, f.battleNumber) IN (SELECT b.winner, b.number FROM Battles b)
GROUP BY trainerNumber
) win
ON win.pokemonNumber = p.number AND win.speciesName = p.speciesName
LEFT OUTER JOIN (
SELECT COUNT(battleNumber) losses, pokemonNumber, speciesName, trainerNumber FROM FightInWith f
WHERE (f.trainerNumber, f.battleNumber) NOT IN (SELECT b.winner, b.number FROM Battles b)
GROUP BY trainerNumber
) lose
ON lose.pokemonNumber = p.number AND lose.speciesName = p.speciesName
WHERE p.number = " number  " AND p.speciesName = '" speciesname  "'
GROUP BY p.number, p.speciesName
ORDER BY wins DESC")))

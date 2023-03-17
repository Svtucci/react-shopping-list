-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE "shoppingList" (
			"id" SERIAL PRIMARY KEY,
			"name" VARCHAR (80) NOT NULL,
			"quantity" DECIMAL (5,2) NOT NULL,
			"unit" VARCHAR (20)
);

INSERT INTO "shoppingList" ("name", "quantity", "unit")
VALUES ('milk', '1', 'gallon'), ('bread', '2', 'loaves') 

SELECT * FROM "shoppingList" ORDER BY "name" ASC;

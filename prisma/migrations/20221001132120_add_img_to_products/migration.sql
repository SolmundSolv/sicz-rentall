-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT 'Product',
    "price" DECIMAL NOT NULL DEFAULT 0,
    "img" TEXT NOT NULL DEFAULT '',
    "descripton" TEXT NOT NULL DEFAULT 'descripton'
);
INSERT INTO "new_Product" ("descripton", "id", "name", "price") SELECT "descripton", "id", "name", "price" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT 'Product',
    "price" DECIMAL NOT NULL DEFAULT 0,
    "img" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT 'Descripton',
    "categoryId" TEXT DEFAULT '',
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("categoryId", "description", "id", "img", "name", "price") SELECT "categoryId", "description", "id", "img", "name", "price" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

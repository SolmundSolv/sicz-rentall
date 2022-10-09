/*
  Warnings:

  - You are about to drop the column `descripton` on the `Product` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT 'Category',
    "description" TEXT NOT NULL DEFAULT 'Description'
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT 'Product',
    "price" DECIMAL NOT NULL DEFAULT 0,
    "img" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT 'Descripton',
    "categoryId" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("id", "img", "name", "price") SELECT "id", "img", "name", "price" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

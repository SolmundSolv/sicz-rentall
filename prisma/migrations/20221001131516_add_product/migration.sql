-- CreateTable
CREATE TABLE "Example" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT 'Product',
    "price" DECIMAL NOT NULL DEFAULT 0,
    "descripton" TEXT NOT NULL DEFAULT 'descripton'
);

/*
  Warnings:

  - You are about to drop the column `canceledAt` on the `VipCard` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_VipCard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "quantityOrder" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "expirationAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_VipCard" ("createdAt", "id", "quantityOrder", "status") SELECT "createdAt", "id", "quantityOrder", "status" FROM "VipCard";
DROP TABLE "VipCard";
ALTER TABLE "new_VipCard" RENAME TO "VipCard";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

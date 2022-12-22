-- CreateTable
CREATE TABLE "VipCard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "quantityOrder" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "canceledAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" TEXT NOT NULL,
    "canceledAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "vipCardId" TEXT NOT NULL,
    CONSTRAINT "Order_vipCardId_fkey" FOREIGN KEY ("vipCardId") REFERENCES "VipCard" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

/*
  Warnings:

  - Added the required column `syntaxHighlightCode` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorId` to the `Content` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "syntaxHighlightCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Content" ADD COLUMN     "authorId" UUID NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

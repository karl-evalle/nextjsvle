/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Vleuser` will be added. If there are existing duplicate values, this will fail.
  - Made the column `email` on table `Vleuser` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Vleuser` MODIFY `email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Vleuser_email_key` ON `Vleuser`(`email`);

/*
  Warnings:

  - A unique constraint covering the columns `[studentid]` on the table `Vleuser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `studentid` to the `Vleuser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Vleuser` ADD COLUMN `studentid` VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Vleuser_studentid_key` ON `Vleuser`(`studentid`);

/*
  Warnings:

  - You are about to drop the column `student` on the `Enrolled` table. All the data in the column will be lost.
  - Added the required column `studentId` to the `Enrolled` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Enrolled` DROP COLUMN `student`,
    ADD COLUMN `studentId` VARCHAR(255) NOT NULL;

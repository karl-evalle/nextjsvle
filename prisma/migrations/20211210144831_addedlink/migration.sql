/*
  Warnings:

  - Added the required column `courselink` to the `Courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Courses` ADD COLUMN `courselink` VARCHAR(255) NOT NULL;

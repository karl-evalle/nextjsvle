/*
  Warnings:

  - Added the required column `coursedescription` to the `Courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Courses` ADD COLUMN `coursedescription` VARCHAR(255) NOT NULL;

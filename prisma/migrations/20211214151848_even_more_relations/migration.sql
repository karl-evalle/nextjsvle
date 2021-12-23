/*
  Warnings:

  - You are about to drop the column `course` on the `Lessons` table. All the data in the column will be lost.
  - Added the required column `coursecode` to the `Lessons` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Lessons` DROP COLUMN `course`,
    ADD COLUMN `coursecode` VARCHAR(255) NOT NULL;

/*
  Warnings:

  - The primary key for the `Vleuser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Userprofile` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `Vleuser` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `username` VARCHAR(255) NOT NULL,
    MODIFY `password` VARCHAR(255) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `Userprofile`;

-- CreateTable
CREATE TABLE `Courses` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `coursename` VARCHAR(255) NOT NULL,
    `coursecode` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

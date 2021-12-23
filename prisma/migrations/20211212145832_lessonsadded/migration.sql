-- CreateTable
CREATE TABLE `Lessons` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lessonnumber` VARCHAR(255) NOT NULL,
    `course` VARCHAR(255) NOT NULL,
    `lessondescription` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

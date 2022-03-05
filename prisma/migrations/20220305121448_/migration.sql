-- CreateTable
CREATE TABLE `User` (
    `uuid` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `lastActiveAgent` VARCHAR(191) NOT NULL,
    `lastActiveIP` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_uuid_key`(`uuid`),
    UNIQUE INDEX `User_username_key`(`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Profile` (
    `uuid` VARCHAR(191) NOT NULL,
    `class` VARCHAR(191) NOT NULL,
    `aboutMe` VARCHAR(191) NULL,
    `avatar_path` VARCHAR(191) NULL,
    `current_map` VARCHAR(191) NULL,
    `experience` INTEGER NOT NULL DEFAULT 0,
    `role` INTEGER NULL,
    `lastActive` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Profile_uuid_key`(`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Stats` (
    `uuid` VARCHAR(191) NOT NULL,
    `strength` INTEGER NOT NULL DEFAULT 0,
    `wisdom` INTEGER NOT NULL DEFAULT 0,
    `dexterity` INTEGER NOT NULL DEFAULT 0,
    `armor` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `Stats_uuid_key`(`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Equipment` (
    `uuid` VARCHAR(191) NOT NULL,
    `main_hand` INTEGER NULL,
    `second_hand` INTEGER NULL,
    `head` INTEGER NULL,
    `body` INTEGER NULL,
    `legs` INTEGER NULL,

    UNIQUE INDEX `Equipment_uuid_key`(`uuid`),
    UNIQUE INDEX `Equipment_main_hand_key`(`main_hand`),
    UNIQUE INDEX `Equipment_second_hand_key`(`second_hand`),
    UNIQUE INDEX `Equipment_head_key`(`head`),
    UNIQUE INDEX `Equipment_body_key`(`body`),
    UNIQUE INDEX `Equipment_legs_key`(`legs`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_uuid_fkey` FOREIGN KEY (`uuid`) REFERENCES `User`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stats` ADD CONSTRAINT `Stats_uuid_fkey` FOREIGN KEY (`uuid`) REFERENCES `User`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Equipment` ADD CONSTRAINT `Equipment_uuid_fkey` FOREIGN KEY (`uuid`) REFERENCES `User`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;

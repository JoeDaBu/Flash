/*
  Warnings:

  - You are about to drop the `CourseBadges` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fast` to the `Listing` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "CourseBadges_subject_key";

-- AlterTable
ALTER TABLE "Tutor" ADD COLUMN "phone_number" INTEGER;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CourseBadges";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "CourseBadge" (
    "subject" TEXT NOT NULL,
    "verified_by_grades" INTEGER NOT NULL,
    "tutorUser_name" TEXT,
    CONSTRAINT "CourseBadge_tutorUser_name_fkey" FOREIGN KEY ("tutorUser_name") REFERENCES "Tutor" ("user_name") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Listing" (
    "listing_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "lowest_price" INTEGER NOT NULL,
    "highest_price" INTEGER NOT NULL,
    "preferred_location" TEXT NOT NULL,
    "preferred_time" TEXT NOT NULL,
    "courseCourse_id" INTEGER NOT NULL,
    "fast" BOOLEAN NOT NULL,
    CONSTRAINT "Listing_courseCourse_id_fkey" FOREIGN KEY ("courseCourse_id") REFERENCES "Course" ("course_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Listing" ("courseCourse_id", "description", "highest_price", "listing_id", "lowest_price", "preferred_location", "preferred_time", "title") SELECT "courseCourse_id", "description", "highest_price", "listing_id", "lowest_price", "preferred_location", "preferred_time", "title" FROM "Listing";
DROP TABLE "Listing";
ALTER TABLE "new_Listing" RENAME TO "Listing";
CREATE UNIQUE INDEX "Listing_listing_id_key" ON "Listing"("listing_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "CourseBadge_subject_key" ON "CourseBadge"("subject");

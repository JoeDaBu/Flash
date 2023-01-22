/*
  Warnings:

  - You are about to drop the column `listing_id` on the `Listing` table. All the data in the column will be lost.
  - Added the required column `id` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `listing_id` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Listing" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "lowest_price" INTEGER NOT NULL,
    "highest_price" INTEGER NOT NULL,
    "preferred_location" TEXT NOT NULL,
    "preferred_time" TEXT NOT NULL,
    "courseCourse_id" INTEGER NOT NULL,
    "fast" BOOLEAN NOT NULL
);
INSERT INTO "new_Listing" ("courseCourse_id", "description", "fast", "highest_price", "lowest_price", "preferred_location", "preferred_time", "title") SELECT "courseCourse_id", "description", "fast", "highest_price", "lowest_price", "preferred_location", "preferred_time", "title" FROM "Listing";
DROP TABLE "Listing";
ALTER TABLE "new_Listing" RENAME TO "Listing";
CREATE UNIQUE INDEX "Listing_id_key" ON "Listing"("id");
CREATE TABLE "new_Course" (
    "course_id" INTEGER NOT NULL,
    "department" TEXT NOT NULL,
    "course_number" INTEGER NOT NULL,
    "listing_id" INTEGER NOT NULL,
    "tutorPref_name" TEXT NOT NULL,
    "tutorCom_name" TEXT NOT NULL,
    CONSTRAINT "Course_tutorPref_name_fkey" FOREIGN KEY ("tutorPref_name") REFERENCES "Tutor" ("user_name") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Course_tutorCom_name_fkey" FOREIGN KEY ("tutorCom_name") REFERENCES "Tutor" ("user_name") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Course_listing_id_fkey" FOREIGN KEY ("listing_id") REFERENCES "Listing" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Course" ("course_id", "course_number", "department", "tutorCom_name", "tutorPref_name") SELECT "course_id", "course_number", "department", "tutorCom_name", "tutorPref_name" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
CREATE UNIQUE INDEX "Course_course_id_key" ON "Course"("course_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

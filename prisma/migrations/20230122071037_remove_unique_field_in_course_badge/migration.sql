/*
  Warnings:

  - You are about to drop the column `verified_by_grades` on the `CourseBadge` table. All the data in the column will be lost.
  - Added the required column `course_badge_id` to the `CourseBadge` table without a default value. This is not possible if the table is not empty.
  - Made the column `tutorUser_name` on table `CourseBadge` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CourseBadge" (
    "course_badge_id" INTEGER NOT NULL,
    "subject" TEXT NOT NULL,
    "tutorUser_name" TEXT NOT NULL,
    CONSTRAINT "CourseBadge_tutorUser_name_fkey" FOREIGN KEY ("tutorUser_name") REFERENCES "Tutor" ("user_name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CourseBadge" ("subject", "tutorUser_name") SELECT "subject", "tutorUser_name" FROM "CourseBadge";
DROP TABLE "CourseBadge";
ALTER TABLE "new_CourseBadge" RENAME TO "CourseBadge";
CREATE UNIQUE INDEX "CourseBadge_course_badge_id_key" ON "CourseBadge"("course_badge_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Course" (
    "course_id" INTEGER NOT NULL,
    "department" TEXT NOT NULL,
    "course_number" INTEGER NOT NULL,
    "listing_id" INTEGER,
    "tutorPref_name" TEXT,
    "tutorCom_name" TEXT,
    CONSTRAINT "Course_tutorPref_name_fkey" FOREIGN KEY ("tutorPref_name") REFERENCES "Tutor" ("user_name") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Course_tutorCom_name_fkey" FOREIGN KEY ("tutorCom_name") REFERENCES "Tutor" ("user_name") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Course_listing_id_fkey" FOREIGN KEY ("listing_id") REFERENCES "Listing" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Course" ("course_id", "course_number", "department", "listing_id", "tutorCom_name", "tutorPref_name") SELECT "course_id", "course_number", "department", "listing_id", "tutorCom_name", "tutorPref_name" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
CREATE UNIQUE INDEX "Course_course_id_key" ON "Course"("course_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

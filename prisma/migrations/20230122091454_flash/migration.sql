-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Course" (
    "listing_id" TEXT,
    "tutorPref_name" TEXT,
    "tutorCom_name" TEXT,
    "course_id" TEXT NOT NULL PRIMARY KEY,
    "department" TEXT NOT NULL,
    "course_number" INTEGER NOT NULL,
    CONSTRAINT "Course_tutorPref_name_fkey" FOREIGN KEY ("tutorPref_name") REFERENCES "Tutor" ("user_name") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Course_tutorCom_name_fkey" FOREIGN KEY ("tutorCom_name") REFERENCES "Tutor" ("user_name") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Course_listing_id_fkey" FOREIGN KEY ("listing_id") REFERENCES "Listing" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Course" ("course_id", "course_number", "department", "listing_id", "tutorCom_name", "tutorPref_name") SELECT "course_id", "course_number", "department", "listing_id", "tutorCom_name", "tutorPref_name" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
CREATE TABLE "new_CourseBadge" (
    "course_badge_id" TEXT NOT NULL PRIMARY KEY,
    "subject" TEXT NOT NULL,
    "tutorUser_name" TEXT NOT NULL,
    CONSTRAINT "CourseBadge_tutorUser_name_fkey" FOREIGN KEY ("tutorUser_name") REFERENCES "Tutor" ("user_name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CourseBadge" ("course_badge_id", "subject", "tutorUser_name") SELECT "course_badge_id", "subject", "tutorUser_name" FROM "CourseBadge";
DROP TABLE "CourseBadge";
ALTER TABLE "new_CourseBadge" RENAME TO "CourseBadge";
CREATE TABLE "new_Listing" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "lowest_price" INTEGER NOT NULL,
    "highest_price" INTEGER NOT NULL,
    "preferred_location" TEXT NOT NULL,
    "preferred_time" TEXT NOT NULL,
    "courseCourse_id" INTEGER NOT NULL,
    "fast" BOOLEAN NOT NULL
);
INSERT INTO "new_Listing" ("courseCourse_id", "description", "fast", "highest_price", "id", "lowest_price", "preferred_location", "preferred_time", "title") SELECT "courseCourse_id", "description", "fast", "highest_price", "id", "lowest_price", "preferred_location", "preferred_time", "title" FROM "Listing";
DROP TABLE "Listing";
ALTER TABLE "new_Listing" RENAME TO "Listing";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

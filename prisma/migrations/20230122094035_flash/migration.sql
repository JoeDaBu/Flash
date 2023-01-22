-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CourseBadge" (
    "course_badge_id" TEXT NOT NULL PRIMARY KEY,
    "subject" TEXT NOT NULL,
    "tutorUser_name" TEXT,
    CONSTRAINT "CourseBadge_tutorUser_name_fkey" FOREIGN KEY ("tutorUser_name") REFERENCES "Tutor" ("user_name") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_CourseBadge" ("course_badge_id", "subject", "tutorUser_name") SELECT "course_badge_id", "subject", "tutorUser_name" FROM "CourseBadge";
DROP TABLE "CourseBadge";
ALTER TABLE "new_CourseBadge" RENAME TO "CourseBadge";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Student" (
    "user_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone_number" TEXT
);
INSERT INTO "new_Student" ("email", "first_name", "last_name", "password", "phone_number", "user_name") SELECT "email", "first_name", "last_name", "password", "phone_number", "user_name" FROM "Student";
DROP TABLE "Student";
ALTER TABLE "new_Student" RENAME TO "Student";
CREATE UNIQUE INDEX "Student_user_name_key" ON "Student"("user_name");
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");
CREATE TABLE "new_Tutor" (
    "user_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "year_level" INTEGER NOT NULL,
    "gpa" REAL,
    "preferred_meetup" TEXT,
    "rate" REAL NOT NULL,
    "phone_number" TEXT
);
INSERT INTO "new_Tutor" ("email", "first_name", "gpa", "last_name", "password", "phone_number", "preferred_meetup", "rate", "user_name", "year_level") SELECT "email", "first_name", "gpa", "last_name", "password", "phone_number", "preferred_meetup", "rate", "user_name", "year_level" FROM "Tutor";
DROP TABLE "Tutor";
ALTER TABLE "new_Tutor" RENAME TO "Tutor";
CREATE UNIQUE INDEX "Tutor_user_name_key" ON "Tutor"("user_name");
CREATE UNIQUE INDEX "Tutor_email_key" ON "Tutor"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

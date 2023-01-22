-- CreateTable
CREATE TABLE "Student" (
    "user_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone_number" INTEGER
);

-- CreateTable
CREATE TABLE "Tutor" (
    "user_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "year_level" INTEGER NOT NULL,
    "gpa" REAL,
    "preferred_meetup" TEXT,
    "rate" REAL NOT NULL,
    "phone_number" INTEGER
);

-- CreateTable
CREATE TABLE "Course" (
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

-- CreateTable
CREATE TABLE "CourseBadge" (
    "course_badge_id" TEXT NOT NULL PRIMARY KEY,
    "subject" TEXT NOT NULL,
    "tutorUser_name" TEXT,
    CONSTRAINT "CourseBadge_tutorUser_name_fkey" FOREIGN KEY ("tutorUser_name") REFERENCES "Tutor" ("user_name") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Listing" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "lowest_price" INTEGER NOT NULL,
    "highest_price" INTEGER NOT NULL,
    "preferred_location" TEXT NOT NULL,
    "preferred_time" TEXT NOT NULL,
    "fast" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_user_name_key" ON "Student"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Tutor_user_name_key" ON "Tutor"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "Tutor_email_key" ON "Tutor"("email");

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
    "rate" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Course" (
    "course_id" INTEGER NOT NULL,
    "department" TEXT NOT NULL,
    "course_number" INTEGER NOT NULL,
    "tutorPref_name" TEXT NOT NULL,
    "tutorCom_name" TEXT NOT NULL,
    CONSTRAINT "Course_tutorPref_name_fkey" FOREIGN KEY ("tutorPref_name") REFERENCES "Tutor" ("user_name") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Course_tutorCom_name_fkey" FOREIGN KEY ("tutorCom_name") REFERENCES "Tutor" ("user_name") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CourseBadges" (
    "subject" TEXT NOT NULL,
    "verified_by_grades" INTEGER NOT NULL,
    "tutorUser_name" TEXT,
    CONSTRAINT "CourseBadges_tutorUser_name_fkey" FOREIGN KEY ("tutorUser_name") REFERENCES "Tutor" ("user_name") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Listing" (
    "listing_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "lowest_price" INTEGER NOT NULL,
    "highest_price" INTEGER NOT NULL,
    "preferred_location" TEXT NOT NULL,
    "preferred_time" TEXT NOT NULL,
    "courseCourse_id" INTEGER NOT NULL,
    CONSTRAINT "Listing_courseCourse_id_fkey" FOREIGN KEY ("courseCourse_id") REFERENCES "Course" ("course_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_user_name_key" ON "Student"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Tutor_user_name_key" ON "Tutor"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "Tutor_email_key" ON "Tutor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Course_course_id_key" ON "Course"("course_id");

-- CreateIndex
CREATE UNIQUE INDEX "Course_department_key" ON "Course"("department");

-- CreateIndex
CREATE UNIQUE INDEX "CourseBadges_subject_key" ON "CourseBadges"("subject");

-- CreateIndex
CREATE UNIQUE INDEX "Listing_listing_id_key" ON "Listing"("listing_id");

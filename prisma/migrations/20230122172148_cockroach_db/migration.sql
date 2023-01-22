-- CreateTable
CREATE TABLE "Student" (
    "user_name" STRING NOT NULL,
    "first_name" STRING NOT NULL,
    "last_name" STRING NOT NULL,
    "email" STRING NOT NULL,
    "password" STRING NOT NULL,
    "phone_number" STRING
);

-- CreateTable
CREATE TABLE "Tutor" (
    "user_name" STRING NOT NULL,
    "first_name" STRING NOT NULL,
    "last_name" STRING NOT NULL,
    "email" STRING NOT NULL,
    "password" STRING NOT NULL,
    "year_level" INT4 NOT NULL,
    "gpa" FLOAT8,
    "preferred_meetup" STRING,
    "rate" FLOAT8 NOT NULL,
    "phone_number" STRING
);

-- CreateTable
CREATE TABLE "Course" (
    "listing_id" STRING,
    "tutorPref_name" STRING,
    "tutorCom_name" STRING,
    "course_id" STRING NOT NULL,
    "department" STRING NOT NULL,
    "course_number" INT4 NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("course_id")
);

-- CreateTable
CREATE TABLE "CourseBadge" (
    "course_badge_id" STRING NOT NULL,
    "subject" STRING NOT NULL,
    "tutorUser_name" STRING,

    CONSTRAINT "CourseBadge_pkey" PRIMARY KEY ("course_badge_id")
);

-- CreateTable
CREATE TABLE "Listing" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "description" STRING NOT NULL,
    "lowest_price" INT4 NOT NULL,
    "highest_price" INT4 NOT NULL,
    "preferred_location" STRING NOT NULL,
    "preferred_time" STRING NOT NULL,
    "fast" BOOL NOT NULL,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_user_name_key" ON "Student"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Tutor_user_name_key" ON "Tutor"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "Tutor_email_key" ON "Tutor"("email");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_tutorPref_name_fkey" FOREIGN KEY ("tutorPref_name") REFERENCES "Tutor"("user_name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_tutorCom_name_fkey" FOREIGN KEY ("tutorCom_name") REFERENCES "Tutor"("user_name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_listing_id_fkey" FOREIGN KEY ("listing_id") REFERENCES "Listing"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseBadge" ADD CONSTRAINT "CourseBadge_tutorUser_name_fkey" FOREIGN KEY ("tutorUser_name") REFERENCES "Tutor"("user_name") ON DELETE SET NULL ON UPDATE CASCADE;

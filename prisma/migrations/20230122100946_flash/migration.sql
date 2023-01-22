-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Listing" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "lowest_price" INTEGER NOT NULL,
    "highest_price" INTEGER NOT NULL,
    "preferred_location" TEXT NOT NULL,
    "preferred_time" TEXT NOT NULL,
    "courseCourse_id" TEXT NOT NULL,
    "fast" BOOLEAN NOT NULL
);
INSERT INTO "new_Listing" ("courseCourse_id", "description", "fast", "highest_price", "id", "lowest_price", "preferred_location", "preferred_time", "title") SELECT "courseCourse_id", "description", "fast", "highest_price", "id", "lowest_price", "preferred_location", "preferred_time", "title" FROM "Listing";
DROP TABLE "Listing";
ALTER TABLE "new_Listing" RENAME TO "Listing";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

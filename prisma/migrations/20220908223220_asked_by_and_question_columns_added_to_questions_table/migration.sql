/*
  Warnings:

  - Added the required column `askedBy` to the `questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question` to the `questions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "questions" ADD COLUMN     "askedBy" VARCHAR(50) NOT NULL,
ADD COLUMN     "question" VARCHAR(500) NOT NULL;

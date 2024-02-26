-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "Vertical" AS ENUM ('HASS_ARTS', 'BASE', 'ENERGY', 'INDUSTRY', 'MICRO', 'NEWS', 'HEALTH');

-- CreateTable
CREATE TABLE "CountryAvailability" (
    "id" TEXT NOT NULL,
    "names" TEXT,
    "slug" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "CountryAvailability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "University" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "University_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Webinar" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "region" TEXT NOT NULL,
    "vertical" "Vertical" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "topic" TEXT NOT NULL,
    "zoomLink" TEXT NOT NULL,
    "presenter" TEXT NOT NULL,

    CONSTRAINT "Webinar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WebinarTime" (
    "id" TEXT NOT NULL,
    "webinarId" TEXT NOT NULL,
    "AESTTime" TEXT NOT NULL,
    "SATime" TEXT NOT NULL,
    "QLDTime" TEXT NOT NULL,
    "NZTime" TEXT NOT NULL,
    "UKTime" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "WebinarTime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UniversityAttachedWebinar" (
    "id" TEXT NOT NULL,
    "webinarId" TEXT NOT NULL,
    "universityId" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "UniversityAttachedWebinar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Researcher" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "universityId" TEXT NOT NULL,
    "curiosityIndex" DOUBLE PRECISION NOT NULL,
    "register" INTEGER NOT NULL,
    "attended" INTEGER NOT NULL,
    "participationTime" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Researcher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResearcherRegisterWebinar" (
    "id" TEXT NOT NULL,
    "researcherId" TEXT NOT NULL,
    "universityAttachedWebinarId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "ResearcherRegisterWebinar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CountryAvailability_userId_id_idx" ON "CountryAvailability"("userId", "id");

-- CreateIndex
CREATE INDEX "Webinar_userId_id_idx" ON "Webinar"("userId", "id");

-- CreateIndex
CREATE UNIQUE INDEX "WebinarTime_webinarId_key" ON "WebinarTime"("webinarId");

-- CreateIndex
CREATE UNIQUE INDEX "UniversityAttachedWebinar_webinarId_key" ON "UniversityAttachedWebinar"("webinarId");

-- CreateIndex
CREATE UNIQUE INDEX "Researcher_universityId_key" ON "Researcher"("universityId");

-- CreateIndex
CREATE INDEX "Researcher_userId_id_idx" ON "Researcher"("userId", "id");

-- CreateIndex
CREATE UNIQUE INDEX "ResearcherRegisterWebinar_universityAttachedWebinarId_key" ON "ResearcherRegisterWebinar"("universityAttachedWebinarId");

-- AddForeignKey
ALTER TABLE "WebinarTime" ADD CONSTRAINT "WebinarTime_webinarId_fkey" FOREIGN KEY ("webinarId") REFERENCES "Webinar"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UniversityAttachedWebinar" ADD CONSTRAINT "UniversityAttachedWebinar_webinarId_fkey" FOREIGN KEY ("webinarId") REFERENCES "Webinar"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UniversityAttachedWebinar" ADD CONSTRAINT "UniversityAttachedWebinar_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Researcher" ADD CONSTRAINT "Researcher_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResearcherRegisterWebinar" ADD CONSTRAINT "ResearcherRegisterWebinar_researcherId_fkey" FOREIGN KEY ("researcherId") REFERENCES "Researcher"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResearcherRegisterWebinar" ADD CONSTRAINT "ResearcherRegisterWebinar_universityAttachedWebinarId_fkey" FOREIGN KEY ("universityAttachedWebinarId") REFERENCES "UniversityAttachedWebinar"("id") ON DELETE CASCADE ON UPDATE CASCADE;

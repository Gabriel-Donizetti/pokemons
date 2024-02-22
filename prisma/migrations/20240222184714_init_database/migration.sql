-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "trainer" TEXT NOT NULL,
    "level" INTEGER NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "garments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "colection_id" TEXT NOT NULL,
    "type_piece_id" TEXT,

    CONSTRAINT "garments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type_pieces" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "type_pieces_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "garments" ADD CONSTRAINT "garments_colection_id_fkey" FOREIGN KEY ("colection_id") REFERENCES "colections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "garments" ADD CONSTRAINT "garments_type_piece_id_fkey" FOREIGN KEY ("type_piece_id") REFERENCES "type_pieces"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_fk_deliveryman_id_fkey";

-- AlterTable
ALTER TABLE "deliveries" ALTER COLUMN "fk_deliveryman_id" DROP NOT NULL,
ALTER COLUMN "end_at" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_fk_deliveryman_id_fkey" FOREIGN KEY ("fk_deliveryman_id") REFERENCES "deliveryman"("id") ON DELETE SET NULL ON UPDATE CASCADE;

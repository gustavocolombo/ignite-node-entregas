import { Deliveries } from "@prisma/client";
import { prisma } from "../../../../database/prisma";

interface IUpdateDateDelivery {
  fk_clients_id: string;
  fk_deliveryman_id: string;
}
export default class UpdateEndDateDelivery {
  async execute({
    fk_clients_id,
    fk_deliveryman_id,
  }: IUpdateDateDelivery): Promise<Deliveries> {
    const delivery = await prisma.deliveries.updateMany({
      where: {
        fk_clients_id,
        fk_deliveryman_id,
      },
      data: {
        end_at: new Date(),
      },
    });

    return delivery;
  }
}

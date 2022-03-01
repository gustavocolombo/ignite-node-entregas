import { Deliveries } from "@prisma/client";
import { prisma } from "../../../../database/prisma";
interface IUpdateDelivery {
  id: string;
  fk_delivery_id: string;
}
export default class UpdateDeliveryUseCase {
  async execute({ id, fk_deliveryman_id }): Promise<Deliveries> {
    const delivery = await prisma.deliveries.update({
      where: {
        id,
      },
      data: {
        fk_deliveryman_id,
      },
    });

    return delivery;
  }
}

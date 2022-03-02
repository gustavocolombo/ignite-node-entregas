import { Deliveries } from "@prisma/client";
import { prisma } from "../../../../database/prisma";

export default class FindAllDeliveriesDeliveryman {
  async execute(fk_deliveryman_id: string): Promise<Deliveries[]> {
    const deliveries = await prisma.deliveryman.findMany({
      where: {
        id: fk_deliveryman_id,
      },
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });

    return deliveries;
  }
}

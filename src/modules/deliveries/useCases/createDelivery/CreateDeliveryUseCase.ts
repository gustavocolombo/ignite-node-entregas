import { Deliveries, Prisma } from "@prisma/client";
import { prisma } from "../../../../database/prisma";

interface ICreateDelivery {
  item_name: string;
  fk_clients_id: string;
}

export default class CreateDeliveryUseCase {
  async execute({
    item_name,
    fk_clients_id,
  }: ICreateDelivery): Promise<Deliveries> {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        fk_clients_id,
      },
    });

    return delivery;
  }
}

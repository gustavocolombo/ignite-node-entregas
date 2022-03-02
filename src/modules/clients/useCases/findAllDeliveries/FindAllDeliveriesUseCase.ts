import { prisma } from "../../../../database/prisma";

export default class FindAllDeliveriesUseCase {
  async execute(fk_clients_id: string): Promise<Deliveries[]> {
    const deliveries = await prisma.clients.findMany({
      where: {
        id: fk_clients_id,
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

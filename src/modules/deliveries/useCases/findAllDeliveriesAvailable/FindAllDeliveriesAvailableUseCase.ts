import { prisma } from "../../../../database/prisma";

export default class FindAllDeliveriesAvailableUseCase {
  async execute(): Promise<FindAllDeliveriesAvailableUseCase[]> {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        end_at: null,
      },
    });

    return deliveries;
  }
}

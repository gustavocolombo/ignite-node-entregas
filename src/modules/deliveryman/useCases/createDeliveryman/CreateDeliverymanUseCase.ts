import { Deliveryman, Prisma } from "@prisma/client";
import { hash } from "bcryptjs";
import { prisma } from "../../../../database/prisma";

export default class CreateDeliverymanUseCase {
  async execute({
    username,
    password,
  }: Prisma.DeliverymanCreateInput): Promise<Deliveryman> {
    const deliverymanExist = await prisma.deliveryman.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (deliverymanExist) throw new Error("User with username already exists");

    const hashedPass = await hash(password, 8);

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: hashedPass,
      },
    });

    return deliveryman;
  }
}

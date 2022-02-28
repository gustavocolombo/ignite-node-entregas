import { Deliveryman, Prisma } from "@prisma/client";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prisma";

interface ICreateTokenDeliveryman {
  token: string;
  deliveryman: Deliveryman;
}

export default class AuthenticateDeliverymanUseCase {
  async execute({
    username,
    password,
  }: Prisma.DeliverymanWhereInput): Promise<ICreateTokenDeliveryman> {
    const deliverymanExists = await prisma.deliveryman.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (!deliverymanExists)
      throw new Error("Combinação username/senha inválidos");

    const comparePass = await compare(password, deliverymanExists.password);

    if (!deliverymanExists)
      throw new Error("Combinação username/senha inválidos");

    const token = sign(
      {
        id: deliverymanExists.id,
        username: deliverymanExists.username,
      },
      "d7a9d971995e4128f1c688659bd817e7",
      {
        expiresIn: "1d",
        subject: deliverymanExists.id,
      }
    );

    return { deliverymanExists, token };
  }
}

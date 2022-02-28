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
    const deliveryman = await prisma.deliveryman.findUnique({
      where: {
        username,
      },
    });

    if (!deliveryman)
      throw new Error("Combinação username/senha inválidos");

    const comparePass = await compare(password, deliveryman.password);

    if (!deliveryman)
      throw new Error("Combinação username/senha inválidos");

    const token = sign(
      {
        id: deliveryman.id,
        username: deliveryman.username,
      },
      "d7a9d971995e4128f1c688659bd817e7",
      {
        expiresIn: "1d",
        subject: deliveryman.id,
      }
    );

    return { token, deliveryman };
  }
}

import { Clients, Prisma } from "@prisma/client";
import { hash } from "bcryptjs";
import { prisma } from "../../../../database/prisma";

export default class CreateClientUseCase {
  async execute({
    username,
    password,
  }: Prisma.ClientsCreateInput): Promise<Clients> {
    const clientExists = await prisma.clients.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (clientExists) throw new Error("Client already exists");

    const hashedPass = await hash(password, 8);

    const client = await prisma.clients.create({
      data: {
        username,
        password: hashedPass,
      },
    });

    return client;
  }
}

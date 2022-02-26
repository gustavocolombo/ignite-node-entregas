import { Clients, Prisma } from "@prisma/client";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prisma";

interface IReturnAuthClient {
  token: string;
  client: Clients;
}

export default class AuthenticateClientUseCase {
  async execute({
    username,
    password,
  }: Prisma.ClientsWhereInput): Promise<IReturnAuthClient> {
    const client = await prisma.clients.findFirst({
      where: { username },
    });

    if (!client) throw new Error("User/password combination does not match");

    const comparePass = await compare(password, client.password);

    if (!comparePass)
      throw new Error("User/password combination does not match");

    const token = sign(
      {
        id: client.id,
        name: client.username,
      },
      "d7a9d971995e4128f1c688659bd817e8",
      {
        subject: client.id,
        expiresIn: "1d",
      }
    );

    return { token, client };
  }
}

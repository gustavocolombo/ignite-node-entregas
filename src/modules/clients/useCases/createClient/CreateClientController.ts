import { Clients } from "@prisma/client";
import { Request, Response } from "express";
import CreateClientUseCase from "./CreateClientUseCase";

export default class CreateClientController {
  async handle(request: Request, response: Response): Promise<Clients> {
    const { username, password } = request.body;

    const service = new CreateClientUseCase();

    const client = await service.execute({ username, password });

    return response.json(client);
  }
}

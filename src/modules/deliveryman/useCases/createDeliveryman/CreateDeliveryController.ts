import { Deliveryman } from "@prisma/client";
import { Request, Response } from "express";
import CreateDeliverymanUseCase from "./CreateDeliverymanUseCase";

export default class CreateDeliverymanController {
  async handle(request: Request, response: Response): Promise<Deliveryman> {
    const { username, password } = request.body;

    const service = new CreateDeliverymanUseCase();

    const deliveryman = await service.execute({
      username,
      password,
    });

    return response.json(deliveryman);
  }
}

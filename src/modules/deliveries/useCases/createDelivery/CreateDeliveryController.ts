import { Deliveries } from "@prisma/client";
import { Request, Response } from "express";
import CreateDeliveryUseCase from "./CreateDeliveryUseCase";

export default class CreateDeliveryController {
  async handle(request: Request, response: Response): Promise<Deliveries> {
    const { item_name } = request.body;
    const { fk_clients_id } = request;

    const service = new CreateDeliveryUseCase();

    const delivery = await service.execute({ item_name, fk_clients_id });

    return response.json(delivery);
  }
}

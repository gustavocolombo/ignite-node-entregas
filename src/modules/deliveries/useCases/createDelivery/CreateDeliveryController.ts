import { Deliveries } from "@prisma/client";
import { Request, Response } from "express";
import CreateDeliveryUseCase from "./CreateDeliveryUseCase";

export default class CreateDeliveryController {
  async handle(request: Request, response: Response): Promise<Deliveries> {
    const { item_name } = request.body;
    const { id } = request.params;

    const service = new CreateDeliveryUseCase();

    const delivery = await service.execute({ item_name, fk_clients_id: id });

    return response.json(delivery);
  }
}

import { Deliveries } from "@prisma/client";
import { Request, Response } from "express";
import UpdateEndDateDeliveryUseCase from "./UpdateEndDateDeliveryUseCase";

export default class UpdateEndDateController{
  async handle(request: Request, response: Response): Promise<Deliveries>{
    const { fk_deliveryman_id } = request;
    const { fk_clients_id } = request.params;

    const service = new UpdateEndDateDeliveryUseCase();

    const updateDelivery = await service.execute({fk_clients_id, fk_deliveryman_id});

    return response.json(updateDelivery);
  }
}
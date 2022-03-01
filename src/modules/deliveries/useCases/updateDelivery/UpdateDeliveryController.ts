import { Request, Response } from "express";
import UpdateDeliveryUseCase from "./UpdateDeliveryUseCase";

export default class UpdateDeliveryController {
  async handle(request: Request, response: Response): Promise<Deliveries> {
    const { fk_deliveryman_id } = request;
    const { id } = request.params;

    const service = new UpdateDeliveryUseCase();

    const updateDelivery = await service.execute({ id, fk_deliveryman_id });

    return response.json(updateDelivery);
  }
}

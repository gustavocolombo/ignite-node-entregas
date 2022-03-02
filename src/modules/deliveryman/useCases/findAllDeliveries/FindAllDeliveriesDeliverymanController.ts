import { Deliveries } from "@prisma/client";
import { Request, Response } from "express";
import FindAllDeliveriesDeliveryman from "./FindAllDeliveriesDeliverymanUseCase";

export default class FindAllDeliveriesDeliverymanController{
  async handle(request: Request, response: Response): Promise<Deliveries[]>{
    const { fk_deliveryman_id } = request;

    const service = new FindAllDeliveriesDeliveryman();

    const deliveries = await service.execute(fk_deliveryman_id);

    return response.json(deliveries)
  }
}
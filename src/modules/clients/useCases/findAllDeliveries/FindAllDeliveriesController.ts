import { Deliveries } from "@prisma/client";
import { Request, Response } from "express";
import FindAllDeliveriesUseCase from "./FindAllDeliveriesUseCase";

export default class FindAllDeliveriesController {
  async handle(
    request: Request,
    response: Response
  ): Promise<Deliveries[]> {
    const { fk_clients_id } = request;

    const service = new FindAllDeliveriesUseCase();

    const deliveries = await service.execute(fk_clients_id);

    return response.json(deliveries);
  }
}

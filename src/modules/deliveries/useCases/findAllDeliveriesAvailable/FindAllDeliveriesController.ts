import { Deliveries } from "@prisma/client";
import { Request, Response } from "express";
import FindAllDeliveriesAvailableUseCase from "./FindAllDeliveriesAvailableUseCase";

export default class FindAllDeliveriesAvailableController {
  async handle(request: Request, response: Response): Promise<Deliveries[]> {
    const service = new FindAllDeliveriesAvailableUseCase();

    const deliveries = await service.execute();

    return response.json(deliveries);
  }
}

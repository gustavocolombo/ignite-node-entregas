import { Request, Response } from "express";
import AuthenticateDeliverymanUseCase from "./AuthenticateDeliverymanUseCase";

export default class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const service = new AuthenticateDeliverymanUseCase();

    const auth = await service.execute({ username, password });

    return response.json(auth);
  }
}

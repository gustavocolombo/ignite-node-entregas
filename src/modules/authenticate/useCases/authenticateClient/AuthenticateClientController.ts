import { Request, Response } from "express";
import AuthenticateClientUseCase from "./AuthenticateClientUseCase";

export default class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const service = new AuthenticateClientUseCase();

    const auth = await service.execute({ username, password });

    return response.json(auth);
  }
}

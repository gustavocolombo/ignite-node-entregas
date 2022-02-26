import { Router } from "express";
import AuthenticateClientController from "../modules/authenticate/useCases/authenticateClient/AuthenticateClientController";
import CreateClientController from "../modules/clients/useCases/createClient/CreateClientController";

const routes = Router();

routes.post("/v1/clients/create", new CreateClientController().handle);
routes.post('/v1/clients/authenticate', new AuthenticateClientController().handle)

export default routes;

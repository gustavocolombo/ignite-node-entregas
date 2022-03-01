import { Router } from "express";
import ensureAuthenticatedClient from "../middlewares/ensureAuthenticatedClient";
import ensureAuthenticatedDeliveryman from "../middlewares/ensureAuthenticatedDeliveryman";
import AuthenticateClientController from "../modules/authenticate/useCases/authenticateClient/AuthenticateClientController";
import AuthenticateDeliverymanController from "../modules/authenticate/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";
import CreateClientController from "../modules/clients/useCases/createClient/CreateClientController";
import CreateDeliveryController from "../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import FindAllDeliveriesAvailableController from "../modules/deliveries/useCases/findAllDeliveriesAvailable/FindAllDeliveriesController";
import UpdateDeliveryController from "../modules/deliveries/useCases/updateDelivery/UpdateDeliveryController";
import CreateDeliverymanController from "../modules/deliveryman/useCases/createDeliveryman/CreateDeliveryController";

const routes = Router();

routes.post("/v1/clients/create", new CreateClientController().handle);
routes.post(
  "/v1/clients/authenticate",
  new AuthenticateClientController().handle
);
routes.post("/v1/deliveryman/create", new CreateDeliverymanController().handle);
routes.post(
  "/v1/deliveryman/authenticate",
  new AuthenticateDeliverymanController().handle
);
routes.post(
  "/v1/deliveries/create",
  ensureAuthenticatedClient,
  new CreateDeliveryController().handle
);
routes.get(
  "/v1/deliveries/get-all",
  ensureAuthenticatedDeliveryman,
  new FindAllDeliveriesAvailableController().handle
);
routes.put(
  "/v1/deliveries/patch/:id",
  ensureAuthenticatedDeliveryman,
  new UpdateDeliveryController().handle
);

export default routes;

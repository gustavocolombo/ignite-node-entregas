import { Router } from "express";
import ensureAuthenticatedClient from "../middlewares/ensureAuthenticatedClient";
import ensureAuthenticatedDeliveryman from "../middlewares/ensureAuthenticatedDeliveryman";
import AuthenticateClientController from "../modules/authenticate/useCases/authenticateClient/AuthenticateClientController";
import AuthenticateDeliverymanController from "../modules/authenticate/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";
import CreateClientController from "../modules/clients/useCases/createClient/CreateClientController";
import FindAllDeliveriesController from "../modules/clients/useCases/findAllDeliveries/FindAllDeliveriesController";
import CreateDeliveryController from "../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import FindAllDeliveriesAvailableController from "../modules/deliveries/useCases/findAllDeliveriesAvailable/FindAllDeliveriesController";
import UpdateDeliveryController from "../modules/deliveries/useCases/updateDelivery/UpdateDeliveryController";
import UpdateEndDateController from "../modules/deliveries/useCases/updateEndDateDelivery/UpdateEndDateController";
import CreateDeliverymanController from "../modules/deliveryman/useCases/createDeliveryman/CreateDeliveryController";
import FindAllDeliveriesDeliverymanController from "../modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController";

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
routes.get(
  "/v1/clients/all-deliveries",
  ensureAuthenticatedClient,
  new FindAllDeliveriesController().handle
);
routes.get(
  "/v1/deliveryman/all-deliveries",
  ensureAuthenticatedDeliveryman,
  new FindAllDeliveriesDeliverymanController().handle
);
routes.put(
  "/v1/deliveries/update-date/:id",
  ensureAuthenticatedDeliveryman,
  new UpdateEndDateController().handle
);

export default routes;

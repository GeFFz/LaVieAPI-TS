const express = require("express");
const routes = express.Router();

import { PsicologoValidation } from '../validations'
import { PsicologoController } from '../controllers/psicologo.controller';

routes.get(
    "/psicologos", 
    PsicologoController.getAll
);
routes.get(
  "/psicologos/:id",
  PsicologoValidation.getOne,
  PsicologoController.getOne
);
routes.post(
  "/psicologos",
  PsicologoValidation.create,
  PsicologoController.create
);
routes.delete(
  "/psicologos/:id",
  PsicologoValidation.destroy,
  PsicologoController.delete
);
routes.put(
  "/psicologos/:id",
  PsicologoValidation.update,
  PsicologoController.update
);


module.exports = routes;

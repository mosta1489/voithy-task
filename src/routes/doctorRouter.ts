import { Router } from "express";
import asyncHandler from "express-async-handler";
import * as handler from "../handlers";

import * as middleware from "../middleware";

export const doctorRouter = Router();

doctorRouter.post("/signup", asyncHandler(handler.signUpHandler));

doctorRouter.get("/verify", asyncHandler(handler.verifyHandler));

doctorRouter.post("/login", asyncHandler(handler.loginHandler));

doctorRouter.use(
  "/patient",
  middleware.jwtParseMiddleware,
  middleware.checkVerification
);

doctorRouter.post("/patient", asyncHandler(handler.addNewPatientHandler));

doctorRouter.get("/patient", asyncHandler(handler.getAllPatientsHandler));

doctorRouter.get("/patient/:id", asyncHandler(handler.getPatientHandler));

doctorRouter.put(
  "/patient/:id",
  asyncHandler(handler.updatePatientPotionHandler)
);

doctorRouter.delete("/patient/:id", asyncHandler(handler.deletePatientHandler));

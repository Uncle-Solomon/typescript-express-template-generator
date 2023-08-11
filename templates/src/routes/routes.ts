import express from "express";
import { customController } from "../controllers/controller";
export const routes = express.Router();

routes.get("/custom-route", customController);

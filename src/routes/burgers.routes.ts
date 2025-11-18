import { Router } from "express";
import { BurgersController } from "../controllers/burgers.controller";

const router = Router();

router.get("/", BurgersController.list);
router.post("/", BurgersController.create);

export default router;

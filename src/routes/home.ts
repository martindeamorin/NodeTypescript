import {Router, Request, Response} from "express";
const router: Router = Router();
import {homeController} from "../controllers/homeController"

router.get("/", homeController.home)

export default router;
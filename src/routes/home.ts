import {Router, Request, Response} from "express";
const router: Router = Router();
import {homeController} from "../controllers/homeController"

router.get("/hola", homeController.home)

export default router;
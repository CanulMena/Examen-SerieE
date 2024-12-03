import { Router } from "express";
import { CityRoutes } from "./computer/computer-routes";

export class AppRoutes {
    static get routes(): Router {

        const router = Router();

        router.use('/api', CityRoutes.routes); //Ruta de las cocinas

        return router;
    }
}
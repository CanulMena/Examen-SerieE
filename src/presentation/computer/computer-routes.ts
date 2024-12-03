import { Router } from "express";
import { OrdenadorController } from "./computer-controller";

export class CityRoutes {
  static get routes(): Router {
    const router = Router();

    const ordenadorController = new OrdenadorController();

    // Crear ordenador con unidad central
    router.post('/computer', ordenadorController.postOrdenador);

    // Añadir un componente al ordenador
    router.post('/computer/component', ordenadorController.postComponent);

    // Eliminar un componente por modelo
    router.delete('/computer/component/:model', ordenadorController.deleteComponent);

    // Obtener el precio total del ordenador
    router.get('/computer/price', ordenadorController.getTotalPrice);

    // Obtener la lista de componentes del ordenador
    router.get('/computer/components', ordenadorController.getComponents);

    return router;
  }
}

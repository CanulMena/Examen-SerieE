import { Request, Response } from 'express';
import { Computer } from '../../domain/ordenador';
import { Component } from '../../domain/component';


let computer: Computer | null = null;

export class OrdenadorController {

  //crear ordenaor con unidad central
  public postOrdenador = async (req: Request, res: Response ) => {
    const { centralUnit } = req.body;
    if (!centralUnit) {
      res.status(400).send("Unidad central requerida.");
      return 
    }

    computer = new Computer(centralUnit);
    res.status(201).json({ message: "Ordenador creado.", computer });
  }

  //añadir componente
  public postComponent = async (req: Request, res: Response ) => {
    if (!computer) {
      res.status(400).send("Crea un ordenador primero.");
      return 
    }

    const { component } = req.body;

    computer.addComponent(component);
    const components = computer.getComponents();
    // res.status(201).send("Componente añadido.");
    res.status(201).json({ message: "Componente añadido.", components });
  }

  //eliminar componente
  public deleteComponent = async (req: Request, res: Response ) => {
    if (!computer) {
      res.status(400).send("Crea un ordenador primero.");
      return 
    }
    const { model } = req.params;
    computer.removeComponent(model);
    res.status(200).send("Componente eliminado.");
  }

  //optener precio total
  public getTotalPrice = async (req: Request, res: Response ) => {
    if (!computer) {
      res.status(400).send("Crea un ordenador primero.");
      return 
    }
    res.status(200).json({ totalPrice: computer.getTotalPrice() });
    
  }

  //obtener lista de componentes
  public getComponents = async (req: Request, res: Response ) => {
    if (!computer) {
      res.status(400).send("Crea un ordenador primero.");
      return 
    }
    res.status(200).json(computer.getComponents());
  }


}
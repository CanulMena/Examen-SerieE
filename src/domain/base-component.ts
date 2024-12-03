// src/classes/Components.ts
import {
  Component,
  InputDevice,
  OutputDevice,
  Printer,
  LaserPrinter,
  TouchScreen,
} from "./component";

export class BaseComponent implements Component {
  constructor(
    public manufacturer: string,
    public model: string,
    public price: number
  ) {}
}

export class Keyboard extends BaseComponent implements InputDevice {
  constructor(
    manufacturer: string,
    model: string,
    price: number,
    public connectorType: string,
    public validPorts: number[]
  ) {
    super(manufacturer, model, price);
  }
}

export class Monitor extends BaseComponent implements OutputDevice {
  constructor(
    manufacturer: string,
    model: string,
    price: number,
    public validPorts: number[]
  ) {
    super(manufacturer, model, price);
  }
}

export class LaserPrinterClass
  extends BaseComponent
  implements LaserPrinter
{
  constructor(
    manufacturer: string,
    model: string,
    price: number,
    public validPorts: number[],
    public cartridgeType: string,
    public pagesSinceLastTonerChange: number
  ) {
    super(manufacturer, model, price);
  }
}

export class TouchScreenDevice
  extends BaseComponent
  implements TouchScreen
{
  constructor(
    manufacturer: string,
    model: string,
    price: number,
    public connectorType: string,
    public validPorts: number[]
  ) {
    super(manufacturer, model, price);
  }
}

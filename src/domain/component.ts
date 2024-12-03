// src/interfaces/Component.ts
export interface Component {
  manufacturer: string; //nombre del fabricante
  model: string; //modelo
  price: number; //precio de venta
}

export interface InputDevice extends Component {
  connectorType: string;
  validPorts: number[];
}

export interface OutputDevice extends Component {
  validPorts: number[];
}

export interface Printer extends OutputDevice {
  cartridgeType: string;
}

export interface LaserPrinter extends Printer {
  pagesSinceLastTonerChange: number;
}

export interface TouchScreen extends InputDevice, OutputDevice {}

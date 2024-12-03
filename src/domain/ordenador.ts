// src/classes/Computer.ts
import { Component } from "./component";

export class Computer {
  private components: Component[] = [];

  constructor(private centralUnit: Component) {
    this.components.push(centralUnit);
  }

  addComponent(component: Component) {
    this.components.push(component);
  }

  removeComponent(model: string) {
    this.components = this.components.filter(
      (component) => component.model !== model
    );
  }

  getTotalPrice(): number {
    return this.components.reduce((total, component) => total + component.price, 0);
  }

  getComponents(): Component[] {
    return this.components;
  }
}

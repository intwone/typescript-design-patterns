import { VehicleProtocol } from './vehicle-protocol';

export class Car implements VehicleProtocol {
  constructor(private name: string) {}

  pickUp(customerName: string): void {
    console.log(`${this.name} está buscando ${customerName}.`);
  }

  stop(): void {
    console.log(`${this.name} parou.`);
  }
}

import { VehicleProtocol } from '../vehicles/vehicle-protocol';

export abstract class VehicleFactory {
  abstract getVehicle(vehicleName: string): VehicleProtocol;

  pickUp(custumerName: string, vehicleName: string): VehicleProtocol {
    const car = this.getVehicle(vehicleName);
    car.pickUp(custumerName);
    return car;
  }
}

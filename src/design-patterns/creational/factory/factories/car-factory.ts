import { Car } from '../vehicles/car';
import { VehicleProtocol } from '../vehicles/vehicle-protocol';
import { VehicleFactory } from './vehicle-factory';

export class CarFactory extends VehicleFactory {
  getVehicle(vehicleName: string): VehicleProtocol {
    return new Car(vehicleName);
  }
}

import { Bicycle } from '../vehicles/bicycle';
import { VehicleProtocol } from '../vehicles/vehicle-protocol';
import { VehicleFactory } from './vehicle-factory';

export class BicycleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): VehicleProtocol {
    return new Bicycle(vehicleName);
  }
}

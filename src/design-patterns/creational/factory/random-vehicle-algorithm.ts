import { BicycleFactory } from './factories/bicycle';
import { CarFactory } from './factories/car-factory';
import { generateRandomNumber } from './utils/generate-random-number';
import { VehicleProtocol } from './vehicles/vehicle-protocol';

export function randomCarAlgorithm(): VehicleProtocol {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta');
  const bicycle1 = bicycleFactory.getVehicle('Monark');

  const vehicles = [car1, car2, bicycle1];
  const randomNumber = generateRandomNumber(vehicles.length);

  return vehicles[randomNumber];
}

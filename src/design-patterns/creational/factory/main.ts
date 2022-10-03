/**
 * ---- Sem factories ----
 */

// import { Car } from './vehicles/car';

// const fusca = new Car('Fusca');
// fusca.pickUp('Joana');
// fusca.stop();
// const celta = new Car('Celta');
// celta.pickUp('Maria');
// celta.stop();

/**
 * ---- Com factories1 ----
 */

// import { CarFactory } from './factories/car-factory';

// const carFactory = new CarFactory();
// const fusca = carFactory.getVehicle('Fusca');
// fusca.pickUp('Joana');
// fusca.stop();

/**
 * ---- Com factories2 ----
 */

import { randomCarAlgorithm } from './random-vehicle-algorithm';
import { generateRandomNumber } from './utils/generate-random-number';

const custumerNames = ['Ana', 'Jose', 'Maria', 'João'];

for (let index = 0; index < 10; index++) {
  const vehicle = randomCarAlgorithm();
  const name = custumerNames[generateRandomNumber(custumerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  console.log('-'.repeat(20));
}

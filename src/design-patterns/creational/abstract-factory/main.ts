import { EnterpriseCustomrVehicleFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCustomrVehicleFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCustomrVehicleFactory();
const individualFactory = new IndividualCustomrVehicleFactory();

const car1 = enterpriseFactory.createVehicle('Lexus', 'João');
const car2 = individualFactory.createVehicle('Celta', 'Maria');

car1.pickUp();
car2.pickUp();

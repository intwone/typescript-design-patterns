import { Customer } from '../customers/customer';
import { IndividualCustomer } from '../customers/individual-customer';
import { IndividualCar } from '../vehicles/individual-car';
import { Vehicle } from '../vehicles/vehicle';
import { CustomerVehicleFactoryProtocol } from './customer-vehicle-factory-protocol';

export class EnterpriseCustomrVehicleFactory
  implements CustomerVehicleFactoryProtocol {
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}

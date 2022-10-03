import { Customer } from '../customers/customer';
import { EnterpriseCustomer } from '../customers/enterprise-customer';
import { EnterpriseCar } from '../vehicles/enterprise-car';
import { Vehicle } from '../vehicles/vehicle';
import { CustomerVehicleFactoryProtocol } from './customer-vehicle-factory-protocol';

export class IndividualCustomrVehicleFactory
  implements CustomerVehicleFactoryProtocol {
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}

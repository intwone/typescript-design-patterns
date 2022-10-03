import { Customer } from '../customers/customer';
import { Vehicle } from '../vehicles/vehicle';

export interface CustomerVehicleFactoryProtocol {
  createCustomer: (customerName: string) => Customer;
  createVehicle: (vehicleName: string, customerName: string) => Vehicle;
}

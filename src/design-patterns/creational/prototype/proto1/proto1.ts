export interface Prototype {
  clone: () => Prototype;
}

export class Address {
  constructor(public street: string, public number: number) {}
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  public clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

const address = new Address('Rua Castro', 144);
const p1 = new Person('Cassio', 29);
const p2 = p1.clone();
p1.addAddress(address);
console.log(p1);

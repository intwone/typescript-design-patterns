abstract class ProductComponent {
  abstract getPrice(): number;

  add(product: ProductComponent): void {}

  remove(product: ProductComponent): void {}
}

class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }

  add(product: ProductComponent): void {
    this.children.push(product);
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }
}

// ----------------

const smartphone = new ProductLeaf('Motorola', 1399.9);
const pen = new ProductLeaf('Bic', 19.0);
const tshirt = new ProductLeaf('Nike', 194.0);
const productBox = new ProductComposite();

productBox.add(smartphone);
productBox.add(pen);
productBox.add(tshirt);

console.log(productBox.getPrice());

productBox.remove(pen);

console.log(productBox.getPrice());

const tablet = new ProductLeaf('Ipad', 7000);
const kindle = new ProductLeaf('Amazon Kindle', 400);
const productBox2 = new ProductComposite();

productBox2.add(tablet);
productBox2.add(kindle);

console.log(productBox2.getPrice());

productBox.add(productBox2);

console.log(productBox.getPrice());

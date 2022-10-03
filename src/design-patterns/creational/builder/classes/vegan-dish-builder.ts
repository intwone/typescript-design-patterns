import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Bean, Beverage, Dessert, Rice, Salad } from './meals';

export class VeganDishBuilder implements MealBuilderProtocol {
  private meal: MealBox = new MealBox();

  public reset(): this {
    this.meal = new MealBox();
    return this;
  }

  public makeMeal(): this {
    const rice = new Rice('Arroz', 10);
    const bean = new Bean('Feijão', 20);
    const salad = new Salad('Salada', 40);
    this.meal.add(rice, bean, salad);
    return this;
  }

  public makeBevarage(): this {
    const beverage = new Beverage('Bebida', 7);
    this.meal.add(beverage);
    return this;
  }

  public makeDessert(): this {
    const dessert = new Dessert('Sobremesa', 10);
    this.meal.add(dessert);
    return this;
  }

  public getMeal(): MealBox {
    return this.meal;
  }

  public getPrice(): number {
    return this.meal.getPrice();
  }
}

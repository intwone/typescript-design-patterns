// import { MealBox } from './classes/meal-box';
// import { Bean, Meat, Rice } from './classes/meals';

// const rice = new Rice('Arroz', 23.2);
// const bean = new Bean('Feijão', 13.2);
// const meat = new Meat('Carne', 43.2);

// const mealBox = new MealBox();
// mealBox.add(rice, bean, meat);

// console.log(mealBox);
// console.log(mealBox.getPrice());

// ---------------------------

// import { StandardDishBuilder } from './classes/stardard-dish-builder';

// const standardDishBuilder = new StandardDishBuilder();
// standardDishBuilder.makeMeal().makeDessert().makeBevarage();
// console.log(standardDishBuilder.getMeal());
// console.log(standardDishBuilder.getPrice());

// ---------------------------
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const veganDishBuilder = new VeganDishBuilder();
veganDishBuilder.makeMeal().makeBevarage();
console.log(veganDishBuilder.getMeal());
console.log(veganDishBuilder.getPrice());

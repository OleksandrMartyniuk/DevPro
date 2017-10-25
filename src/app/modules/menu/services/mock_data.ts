import { Product } from './../../../models/product';
import { ProductCategory } from './../../../models/product-category';

const omelette = new Product('Omelette', 15);
const pancake = new Product('Pancakes', 20);
const waffles = new Product('Belgian Waffles', 28);
const chesecake = new Product('Cheesecake', 25);
const fruit_salad = new Product('Fruit salad', 20);

const margarita = new Product('Margarita', 35);
const carbonara = new Product('Carbonara', 45);
const hawaiian = new Product('Hawaiian', 50);
const pepperoni = new Product('Pepperoni', 48);

const than_shrimps = new Product('Shrimp Than', 40);
const than_chicken = new Product('Chicken Than', 40);
const than_veg = new Product('Vegan Than', 35);
const udon_shrimps = new Product('Shrimp Udon', 40);
const udon_chicken = new Product('Chicken Udon', 40);
const udon_veg = new Product('Vegan Udon', 35);

const pannacota = new Product('Pannacota', 15);
const choco_muffin = new Product('Chocolate muffin', 15);

const americano = new Product('Americano', 8);
const espresso = new Product('Espresso', 8);
const cappucino = new Product('Cappucino', 8);
const tea = new Product('Tea', 8);
const juice = new Product('Juice', 8);

const breakfast = new ProductCategory('Breakfast', [omelette, pancake, waffles, chesecake, fruit_salad]);
const pizza = new ProductCategory('Pizza', [margarita, carbonara, hawaiian, pepperoni]);
const wok = new ProductCategory('Wok', [than_chicken, than_shrimps, than_veg, udon_chicken, udon_shrimps, udon_veg]);
const deserts = new ProductCategory('Deserts', [chesecake, waffles, fruit_salad, pannacota, choco_muffin]);
const drinks = new ProductCategory('Drinks', [americano, espresso, cappucino, tea, juice]);

export const categories_mock: Array<ProductCategory> = [breakfast, pizza, wok, deserts, drinks];

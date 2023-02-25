/** @format */

import { comidas, bebidas } from "../data/data.js";

const form = document.getElementById("form");
export let order_information = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const card_food_1 = document.getElementById("plato1");
  const card_food_2 = document.getElementById("plato2");
  const card_food_3 = document.getElementById("plato3");
  const card_food_4 = document.getElementById("plato4");

  const card_drink_1 = document.getElementById("bebida1");
  const card_drink_2 = document.getElementById("bebida2");
  const card_drink_3 = document.getElementById("bebida3");
  const card_drink_4 = document.getElementById("bebida4");

  const counter_food_1 = document.getElementById("contador_comida1");
  const counter_food_2 = document.getElementById("contador_comida2");
  const counter_food_3 = document.getElementById("contador_comida3");
  const counter_food_4 = document.getElementById("contador_comida4");

  const counter_drink_1 = document.getElementById("contador_bebida1");
  const counter_drink_2 = document.getElementById("contador_bebida2");
  const counter_drink_3 = document.getElementById("contador_bebida3");
  const counter_drink_4 = document.getElementById("contador_bebida4");

  const data_food_1 = comidas[0];
  const data_food_2 = comidas[1];
  const data_food_3 = comidas[2];
  const data_food_4 = comidas[3];

  const data_drink_1 = bebidas[0];
  const data_drink_2 = bebidas[1];
  const data_drink_3 = bebidas[2];
  const data_drink_4 = bebidas[3];

  let price_food;
  let price_for_all_food;
  let price_for_all_drink;
  let price_for_all;

  let price_drink;
  let name_of_the_food;
  let number_of_foods;
  let picture_of_food;

  let name_of_the_drink;
  let number_of_drinks;
  let picture_of_drink;

  /************************* FOOD *****************************************/
  const c1 = () => {
    if (card_food_1.checked && parseInt(counter_food_1.innerText) !== 0) {
      price_for_all_food =
        data_food_1.f_price * parseInt(counter_food_1.innerText);
      name_of_the_food = data_food_1.title;
      number_of_foods = counter_food_1.innerText;
      picture_of_food = data_food_1.img_src;
      price_food = data_food_1.f_price;
      counter_food_1.innerText = "0";
    }
  };
  /******************************************************************/
  const c2 = () => {
    if (card_food_2.checked && parseInt(counter_food_2.innerText) !== 0) {
      price_for_all_food =
        data_food_2.f_price * parseInt(counter_food_2.innerText);
      name_of_the_food = data_food_2.title;
      number_of_foods = counter_food_2.innerText;
      picture_of_food = data_food_2.img_src;
      price_food = data_food_2.f_price;
      counter_food_2.innerText = "0";
    }
  };
  /******************************************************************/
  const c3 = () => {
    if (card_food_3.checked && parseInt(counter_food_3.innerText) !== 0) {
      price_for_all_food =
        data_food_3.f_price * parseInt(counter_food_3.innerText);
      name_of_the_food = data_food_3.title;
      number_of_foods = counter_food_3.innerText;
      picture_of_food = data_food_3.img_src;
      price_food = data_food_3.f_price;
      counter_food_3.innerText = "0";
    }
  };
  /******************************************************************/
  const c4 = () => {
    if (card_food_4.checked && parseInt(counter_food_4.innerText) !== 0) {
      price_for_all_food =
        data_food_4.f_price * parseInt(counter_food_4.innerText);
      name_of_the_food = data_food_4.title;
      number_of_foods = counter_food_4.innerText;
      picture_of_food = data_food_4.img_src;
      price_food = data_food_4.f_price;
      counter_food_4.innerText = "0";
    }
  };
  /******************************************************************/
  /************************** DRINK ****************************************/
  const d1 = () => {
    if (card_drink_1.checked && parseInt(counter_drink_1.innerTex) !== 0) {
      price_for_all_drink =
        data_drink_1.d_price * parseInt(counter_drink_1.innerText);
      name_of_the_drink = data_drink_1.title;
      number_of_drinks = counter_drink_1.innerText;
      picture_of_drink = data_drink_1.img_src;
      price_drink = data_drink_1.d_price;
      counter_drink_1.innerText = "0";
    }
  };
  /******************************************************************/
  const d2 = () => {
    if (card_drink_2.checked && parseInt(counter_drink_2.innerTex) !== 0) {
      price_for_all_drink =
        data_drink_2.d_price * parseInt(counter_drink_2.innerText);
      name_of_the_drink = data_drink_2.title;
      number_of_drinks = counter_drink_2.innerText;
      picture_of_drink = data_drink_2.img_src;
      price_drink = data_drink_2.d_price;
      counter_drink_2.innerText = "0";
    }
  };
  /******************************************************************/
  const d3 = () => {
    if (card_drink_3.checked && parseInt(counter_drink_3.innerTex) !== 0) {
      price_for_all_drink =
        data_drink_3.d_price * parseInt(counter_drink_3.innerText);
      name_of_the_drink = data_drink_3.title;
      number_of_drinks = counter_drink_3.innerText;
      picture_of_drink = data_drink_3.img_src;
      price_drink = data_drink_3.d_price;
      counter_drink_3.innerText = "0";
    }
  };
  /******************************************************************/
  const d4 = () => {
    if (card_drink_4.checked && parseInt(counter_drink_4.innerTex) !== 0) {
      price_for_all_drink =
        data_drink_4.d_price * parseInt(counter_drink_4.innerText);
      name_of_the_drink = data_drink_4.title;
      number_of_drinks = counter_drink_4.innerText;
      picture_of_drink = data_drink_4.img_src;
      price_drink = data_drink_4.d_price;
      counter_drink_4.innerText = "0";
    }
  };

  /******************************************************************/

  if (
    counter_food_1.innerText != "0" ||
    counter_food_2.innerText != "0" ||
    counter_food_3.innerText != "0" ||
    counter_food_4.innerText != "0" ||
    counter_drink_1.innerText != "0" ||
    counter_drink_1.innerText != "0" ||
    counter_drink_1.innerText != "0" ||
    counter_drink_1.innerText != "0"
  ) {
    c1();
    c2();
    c3();
    c4();
    d1();
    d2();
    d3();
    d4();
    price_for_all = price_for_all_food + price_for_all_drink;
    let order = {
      food: {
        picture: picture_of_food,
        title: name_of_the_food,
        price: price_food,
        amount: number_of_foods,
        final_price: price_for_all_food,
      },
      drink: {
        picture: picture_of_drink,
        title: name_of_the_drink,
        price: price_drink,
        amount: number_of_drinks,
        final_price: price_for_all_drink,
      },
      total: price_for_all,
    };

    order_information.push(order);
    localStorage.setItem("order", JSON.stringify(order));
    location.replace("./factura.html");
  } else {
    alert("¡Seleccione una cantidade para sus respectiva comida y bebbida ");
  }

  /******************************************************************/

  form.reset();
});

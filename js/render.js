/** @format */

import { comidas, bebidas } from "../data/data.js";

const conten_food = document.querySelector(".conten-food");
const conten_drink = document.querySelector(".conten-drink");

const renderFood = () => {
  comidas.forEach((el) => {
    conten_food.innerHTML += `
    
    <label for="plato${el.id}" class="card">
          <div class="conten-img">
            <img src="${el.img_src}" alt="">
          </div>
          <span class="title">${el.title}</span>
          <div class="conten-price">
            <span class="price">${el.price}</span>
          </div>
          <div class="conten-contador">
            <i class="bi bi-dash-square-fill" id="less_food${el.id}"></i>
            <span id="contador_comida${el.id}">0</span>
            <i class="bi bi-plus-square-fill" id="more_food${el.id}"></i>
          </div>
          <input type="radio" name="food" id="plato${el.id}" class="input-radio" />
          <span class="btn">Seleccionar</span>
        </label>
    
    `;
  });
};

const renderDrink = () => {
  bebidas.forEach((el) => {
    conten_drink.innerHTML += `
    
    <label for="bebida${el.id}" class="card">
          <div class="conten-img">
            <img src="${el.img_src}" alt="">
          </div>
          <span class="title">${el.title}</span>
          <div class="conten-price">
            <span class="price">${el.price}</span>
          </div>
          <div class="conten-contador">
            <i class="bi bi-dash-square-fill" id="less_drink${el.id}"></i>
            <span id="contador_bebida${el.id}">0</span>
            <i class="bi bi-plus-square-fill" id="more_drink${el.id}"></i>
          </div>  
          <input type="radio" name="drink" id="bebida${el.id}"  class="input-radio"/>
          <span class="btn">Seleccionar</span>
        </label>
    
    `;
  });
};

renderFood();
renderDrink();

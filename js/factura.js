/** @format */

const conten_factura = document.querySelector(".conten-factura");

const order_information = JSON.parse(localStorage.getItem("order"));

const rederFactura = () => {
  if (order_information !== null) {
    const picture_food = order_information.food.picture;
    const name_food = order_information.food.title;
    const amount_food = order_information.food.amount;
    const price_food = order_information.food.price;
    const final_price_food = order_information.food.final_price;

    const picture_drink = order_information.drink.picture;
    const name_drink = order_information.drink.title;
    const amount_drink = order_information.drink.amount;
    const price_drink = order_information.drink.price;
    const final_price_drink = order_information.drink.final_price;

    const price_for_all = order_information.total;

    conten_factura.innerHTML = `
    <table class="table">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Amount</th>
            <th scope="col">Total price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="conten-img">
                  <img src="${picture_food}" alt="img food">
              </div>
            </td>
            <td><span>${name_food}</span></td>
            <td><span>${price_food}</span></td>
            <td><span>${amount_food}</span></td>
            <td><span>${final_price_food}</span></td>
          </tr>
          <tr>
            <td>
              <div class="conten-img">
                  <img src="${picture_drink}" alt="img drink">
              </div>
            </td>
            <td><span>${name_drink}</span></td>
            <td><span>${price_drink}</span></td>
            <td><span>${amount_drink}</span></td>
            <td><span>${final_price_drink}</span></td>
          </tr>
          <tr>
            <th colspan="5">Total a pagar ${price_for_all}</th>
          </tr>
        </tbody>
      </table>

    `;
  }
};

rederFactura();

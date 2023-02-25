/** @format */

const contador_food1 = () => {
  const icon_more = document.getElementById("more_food1");
  const icon_less = document.getElementById("less_food1");
  let counter = 0;
  let location_counter = document.getElementById("contador_comida1");

  icon_more.addEventListener("click", () => {
    counter++;
    location_counter.innerText = counter;
  });
  icon_less.addEventListener("click", () => {
    if (counter >= 1) {
      counter--;
      location_counter.innerText = counter;
    }
  });
};
const contador_food2 = () => {
  const icon_more = document.getElementById("more_food2");
  const icon_less = document.getElementById("less_food2");
  let counter = 0;
  let location_counter = document.getElementById("contador_comida2");

  icon_more.addEventListener("click", () => {
    counter++;
    location_counter.innerText = counter;
  });
  icon_less.addEventListener("click", () => {
    if (counter >= 1) {
      counter--;
      location_counter.innerText = counter;
    }
  });
};
const contador_food3 = () => {
  const icon_more = document.getElementById("more_food3");
  const icon_less = document.getElementById("less_food3");
  let counter = 0;
  let location_counter = document.getElementById("contador_comida3");

  icon_more.addEventListener("click", () => {
    counter++;
    location_counter.innerText = counter;
  });
  icon_less.addEventListener("click", () => {
    if (counter >= 1) {
      counter--;
      location_counter.innerText = counter;
    }
  });
};
const contador_food4 = () => {
  const icon_more = document.getElementById("more_food4");
  const icon_less = document.getElementById("less_food4");
  let counter = 0;
  let location_counter = document.getElementById("contador_comida4");

  icon_more.addEventListener("click", () => {
    counter++;
    location_counter.innerText = counter;
  });
  icon_less.addEventListener("click", () => {
    if (counter >= 1) {
      counter--;
      location_counter.innerText = counter;
    }
  });
};

const contador_drink1 = () => {
  const icon_more = document.getElementById("more_drink1");
  const icon_less = document.getElementById("less_drink1");
  let counter = 0;
  let location_counter = document.getElementById("contador_bebida1");

  icon_more.addEventListener("click", () => {
    counter++;
    location_counter.innerText = counter;
  });
  icon_less.addEventListener("click", () => {
    if (counter >= 1) {
      counter--;
      location_counter.innerText = counter;
    }
  });
};
const contador_drink2 = () => {
  const icon_more = document.getElementById("more_drink2");
  const icon_less = document.getElementById("less_drink2");
  let counter = 0;
  let location_counter = document.getElementById("contador_bebida2");

  icon_more.addEventListener("click", () => {
    counter++;
    location_counter.innerText = counter;
  });
  icon_less.addEventListener("click", () => {
    if (counter >= 1) {
      counter--;
      location_counter.innerText = counter;
    }
  });
};
const contador_drink3 = () => {
  const icon_more = document.getElementById("more_drink3");
  const icon_less = document.getElementById("less_drink3");
  let counter = 0;
  let location_counter = document.getElementById("contador_bebida3");

  icon_more.addEventListener("click", () => {
    counter++;
    location_counter.innerText = counter;
  });
  icon_less.addEventListener("click", () => {
    if (counter >= 1) {
      counter--;
      location_counter.innerText = counter;
    }
  });
};
const contador_drink4 = () => {
  const icon_more = document.getElementById("more_drink4");
  const icon_less = document.getElementById("less_drink4");
  let counter = 0;
  let location_counter = document.getElementById("contador_bebida4");

  icon_more.addEventListener("click", () => {
    counter++;
    location_counter.innerText = counter;
  });
  icon_less.addEventListener("click", () => {
    if (counter >= 1) {
      counter--;
      location_counter.innerText = counter;
    }
  });
};

contador_food1();
contador_food2();
contador_food3();
contador_food4();

contador_drink1();
contador_drink2();
contador_drink3();
contador_drink4();

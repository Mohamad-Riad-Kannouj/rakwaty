fetch("https://rakwaty.herokuapp.com/data")
  .then(response => response.json())
  .then(data => {
    let hot_drinks = document.getElementById("hot_drinks");
    data.hot_drinks.forEach(e => {
      let component = document.createElement("div");
      component.classList.add(
        "component",
        "d-flex",
        "justify-content-start",
        "align-content-center"
      );
      let item = document.createElement("p");
      item.classList.add("item", "text-nowrap");
      let dots = document.createElement("p");
      dots.classList.add("dots");
      let price = document.createElement("p");
      price.classList.add("price");

      item.innerHTML = e.item;
      price.innerHTML = e.price + '<span class="curr">.000</span>';
      component.append(item, dots, price);
      hot_drinks.appendChild(component);
    });
    let cold_drinks = document.getElementById("cold_drinks");
    data.cold_drinks.forEach(e => {
      let component = document.createElement("div");
      component.classList.add(
        "component",
        "d-flex",
        "justify-content-start",
        "align-content-center"
      );
      let item = document.createElement("p");
      item.classList.add("item", "text-nowrap");
      let dots = document.createElement("p");
      dots.classList.add("dots");
      let price = document.createElement("p");
      price.classList.add("price");
      item.innerHTML = e.item;
      price.innerHTML = e.price + '<span class="curr">.000</span>';
      component.append(item, dots, price);
      cold_drinks.appendChild(component);
    });
    let ice_coffee = document.getElementById("ice_coffee");
    data.ice_coffee.forEach(e => {
      let component = document.createElement("div");
      component.classList.add(
        "component",
        "d-flex",
        "justify-content-start",
        "align-content-center"
      );
      let item = document.createElement("p");
      item.classList.add("item", "text-nowrap");
      let dots = document.createElement("p");
      dots.classList.add("dots");
      let price = document.createElement("p");
      price.classList.add("price");

      item.innerHTML = e.item;
      price.innerHTML = e.price + '<span class="curr">.000</span>';
      component.append(item, dots, price);
      ice_coffee.appendChild(component);
    });
    let ice_tea = document.getElementById("ice_tea");
    data.ice_tea.forEach(e => {
      let component = document.createElement("div");
      component.classList.add(
        "component",
        "d-flex",
        "justify-content-start",
        "align-content-center"
      );
      let item = document.createElement("p");
      item.classList.add("item", "text-nowrap");
      let dots = document.createElement("p");
      dots.classList.add("dots");
      let price = document.createElement("p");
      price.classList.add("price");
      item.innerHTML = e.item;
      price.innerHTML = e.price + '<span class="curr">.000</span>';
      component.append(item, dots, price);
      ice_tea.appendChild(component);
    });
    let milkshakes = document.getElementById("milkshakes");
    data.milkshakes.forEach(e => {
      let component = document.createElement("div");
      component.classList.add(
        "component",
        "d-flex",
        "justify-content-start",
        "align-content-center"
      );
      let item = document.createElement("p");
      item.classList.add("item", "text-nowrap");
      let dots = document.createElement("p");
      dots.classList.add("dots");
      let price = document.createElement("p");
      price.classList.add("price");
      item.innerHTML = e.item;
      price.innerHTML = e.price + '<span class="curr">.000</span>';
      component.append(item, dots, price);
      milkshakes.appendChild(component);
    });
    let smoothies = document.getElementById("smoothies");
    data.smoothies.forEach(e => {
      let component = document.createElement("div");
      component.classList.add(
        "component",
        "d-flex",
        "justify-content-start",
        "align-content-center"
      );
      let item = document.createElement("p");
      item.classList.add("item", "text-nowrap");
      let dots = document.createElement("p");
      dots.classList.add("dots");
      let price = document.createElement("p");
      price.classList.add("price");
      item.innerHTML = e.item;
      price.innerHTML = e.price + '<span class="curr">.000</span>';
      component.append(item, dots, price);
      smoothies.appendChild(component);
    });
    let ground_coffee = document.getElementById("ground_coffee");
    data.ground_coffee.forEach(e => {
      let component = document.createElement("div");
      component.classList.add(
        "component",
        "d-flex",
        "justify-content-start",
        "align-content-center"
      );
      let item = document.createElement("p");
      item.classList.add("item", "text-nowrap");
      let dots = document.createElement("p");
      dots.classList.add("dots");
      let price = document.createElement("p");
      price.classList.add("price");
      item.innerHTML = e.item;
      price.innerHTML = e.price + '<span class="curr">.000</span>';
      component.append(item, dots, price);
      ground_coffee.appendChild(component);
    });
    let nuts_candy = document.getElementById("nuts_candy");
    data.nuts_candy.forEach(e => {
      let component = document.createElement("div");
      component.classList.add(
        "component",
        "d-flex",
        "justify-content-start",
        "align-content-center"
      );
      let item = document.createElement("p");
      item.classList.add("item", "text-nowrap");
      let dots = document.createElement("p");
      dots.classList.add("dots");
      let price = document.createElement("p");
      price.classList.add("price");
      item.innerHTML = e.item;
      price.innerHTML = e.price + '<span class="curr">.000</span>';
      component.append(item, dots, price);
      nuts_candy.appendChild(component);
    });
  });
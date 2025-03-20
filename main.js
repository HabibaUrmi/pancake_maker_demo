document.addEventListener("DOMContentLoaded", function () {
  const typeSelect = document.getElementById("type");
  const toppings = document.querySelectorAll(".topping");
  const extras = document.querySelectorAll(".extra");
  const totalPriceDisplay = document.getElementById("totalPriceDisplay");
  const totalPriceBanner = document.getElementById("totalPrice");

  function calculateTotal() {
    let total = Number(typeSelect.value);

    toppings.forEach((topping) => {
      if (topping.checked) {
        total += Number(topping.value);
      }
    });

    extras.forEach((extra) => {
      if (extra.checked) {
        total += Number(extra.value);
      }
    });

    totalPriceDisplay.textContent = total + "€";
    totalPriceBanner.textContent = total + "€";
  }

  typeSelect.addEventListener("change", calculateTotal);
  toppings.forEach((topping) =>
    topping.addEventListener("change", calculateTotal)
  );
  extras.forEach((extra) => extra.addEventListener("change", calculateTotal));

  calculateTotal();
});

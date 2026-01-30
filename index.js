let total = 0;

function addItem(name, price) {
  total = total + price;
  console.log(price, total, name);
  console.log("Der Gesamtpreis liegt bei " + total + "€");
  document.getElementById("totalAmount").innerHTML = total + "€";
  document.getElementById("orderlist").innerHTML +=
    "<p class='order'>" + name + ": " + price + "€" + "</p>";
}

function clearTotal() {
  total = 0;
  document.getElementById("totalAmount").innerHTML = "0,00€";
  document.getElementById("orderlist").innerHTML = "";
}

function checkoutVorOrt() {
  alert("Vielen Dank für die Bestellung. Gesamtbetrag: " + total + "€");
  clearTotal();
}

function checkoutLieferung() {
  if (total < 20) {
    alert(
      "Der Mindestbestellwert von 20€ wurde noch nicht erreicht Gesamtbetrag: " +
        total +
        "€",
    );
  } else {
    let shippingcost = 2.5;
    let endcost = total + shippingcost;

    alert(
      "Vielen Dank für Ihre Bestellung! Gesamtbetrag: " +
        endcost +
        "€" +
        " inkl. Versandkosten von 2,50€",
    );

    clearTotal();
  }
}

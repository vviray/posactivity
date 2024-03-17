function finalize() {
  var choices = document.querySelectorAll(".choice");
  var total = 0;

  choices.forEach(function(choice) {
      var food = choice.querySelector(".food").value;
      var quantity = parseInt(choice.querySelector(".quantity").value);
      var price = 0;

      // Get the price of the selected food
      switch (food) {
          case "burger":
              price = 60;
              break;
          case "fries":
              price = 50;
              break;
          case "fishball":
              price = 20;
              break;
          case "kikiam":
              price = 25;
              break;
          default:
              price = 0;
      }

      // Calculate total for this choice
      total += price * quantity;
  });

  // Display the total
  alert("Your total order is ₱" + total.toFixed(2));
}

function duplicate() {
  var original = document.querySelector(".choice");
  var clone = original.cloneNode(true);
  document.getElementById("choices-container").appendChild(clone);
}

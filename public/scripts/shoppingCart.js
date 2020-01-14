$(document).ready(function() {
  let yourTotalOrder = [];
  $("section.order-food-interface button").on("click", function() {
    // let count = $(".shopping-cart .counter");
    // let n = Number(count.text());
    // n = n + 1;
    // count.text(n);
    // console.log(n);
    let name = $(this).parent().children()[1].innerText;
    let price = $(this).parent().children()[2].innerText;
    console.log(name);
    console.log(price);
    let yourOrder = {
      name: name,
      price: price
    };
    yourTotalOrder.push(yourOrder);
    console.log(yourTotalOrder);
  })
});


$(document).ready(function() {
  //Press plus button to add the number
  $(".quantity .plus-button").on("click", function() {
    let count = $(this).siblings("input");
    let n = Number(count.val());
    n += 1;
    count.val(n);
  });

  //Press minus button to minus the number
  $(".quantity .minus-button").on("click", function() {
    let count = $(this).parent().children("input");
    let n = Number(count.val());
    n -= 1;
    count.val(n);
  });

  $("div.order-total button.checkout-button").on("click", function() {
    //Reset the "Total" amouts before we do anything.
    let subTotalOnScreenLocation = $(".order-calculations").children("p")[0];
    subTotalOnScreenLocation.innerText = "Subtotal:";
    let taxesOnScreenValueLocation = $(".order-calculations").children("p")[1];
    taxesOnScreenValueLocation.innerText = "Taxes:";
    let totalOnScreenValueLocation = $(".order-calculations").children("p")[2];
    totalOnScreenValueLocation.innerText = "Total";

    //iterate the HTML with all divs named "food-item"
    let total = 0;
    $("section.order-food-interface div.food-item").each((index, element) => {
      let price = Number($(element).children(".price")[0].innerText.slice(1));
      let quantity = Number($(element).find("input").val());
      let singleTotal = price * quantity;
      total = total + singleTotal;
    });
    let tax = (total * 0.13).toFixed(2);
    let totalWithTax = Number(total) + Number(tax);
    let subTotalOnScreenValue = $(".order-calculations").children("p")[0].innerText;
    subTotalOnScreenLocation.innerText = subTotalOnScreenValue + " $" + total;


    let taxesOnScreenValue = $(".order-calculations").children("p")[1].innerText;
    taxesOnScreenValueLocation.innerText = taxesOnScreenValue + " $" + tax;


    let totalOnScreenValue = $(".order-calculations").children("p")[2].innerText;
    totalOnScreenValueLocation.innerText = totalOnScreenValue + " $" + totalWithTax;
    // console.log(subTotalOnScreen, taxesOnScreen, totalOnScreen);
    // return {
    //   Subtotal: total,
    //   Taxes: tax,
    //   Total: totalWithTax
    // }
  });
});


// event handler that counts user input displays
// how many remaining characters are left to be used

$(document).ready(function() {
  $('.quantity .increment').on('click', function() {

    let count = $(this).siblings("input");
    let n = Number(count.val());
    n += 1;
    count.val(n);

    $('.subtotal').text(parseInt($('.subtotal').text()) + parseInt($(this).parent().siblings(".price").text()));


    $('.taxes').text(Math.round($('.subtotal').text() * 0.13 * 100) / 100);

    $('.total').text(parseInt($('.subtotal').text()) + (Math.round($('.subtotal').text() * 0.13 * 100) / 100))

    //need to create an object to populate the popup box WARNING WARNING WARNING

  });

  $('.quantity .decrement').on('click', function() {
    let count = $(this).siblings("input");
    let n = Number(count.val());
    if (n > 0)  {
    n -= 1;
    count.val(n)


    $('.subtotal').text(parseInt($('.subtotal').text()) - parseInt($(this).parent().siblings(".price").text()));

    $('.taxes').text(Math.round($('.subtotal').text() * 0.13 * 100) / 100);

    $('.total').text(parseInt($('.subtotal').text()) + (Math.round($('.subtotal').text() * 0.13 * 100) / 100))
  }

  });


  $('.quantity input').on('input', function() {

    let price = 0;

    $(".price").each(function(index)  {
      price += parseInt($(this).text()) * parseInt($(this).siblings(".quantity").children("input").val());
    })


    $(".subtotal").text(price);
    $(".taxes").text(price * 0.13)
    $(".total").text(parseInt($(".subtotal").text()) + parseInt($(".taxes").text()))
  })



  $(".checkout-button").on("click", function(event) {
    // Now user has clicked sumbit so we need to retrieve values from Cart

    // We need to send those values to the server using Ajax
    // const formData = $(".subtotal").serialize();

    const foodObject = {}
    const foodNameArray = [];
    $(".food-name").each(function(index)  {
      if ($(this).siblings(".quantity").children("input").val() > 0)  {
        foodObject[$(this).text()] = $(this).siblings(".quantity").children("input").val();
        foodNameArray.push($(this).text());
      }
    })
    console.log(foodNameArray);
    foodObject["subtotal"] = $(".subtotal").text()
    foodObject["taxes"] = $(".taxes").text()
    foodObject["total"] = $(".total").text()
    foodObject["orderedItems"] = foodNameArray;

    foodNameArray.forEach(function(elements)  {
      $(".order-details").text($(".order-details").text() + " " + foodObject[elements] + " " + elements + " / ")
    })
    $(".modal-subtotal").text(foodObject["subtotal"]);
    $(".modal-taxes").text(foodObject["taxes"])
    $(".modal-total").text(foodObject["total"])

  })

  $(".close").on("click", function(event) {
    $(".order-details").text("")
  })



  $(".confirm").on("click", function(event) {

    const foodObject = {}
    const foodNameArray = [];
    $(".food-name").each(function(index)  {
      if ($(this).siblings(".quantity").children("input").val() > 0)  {
        foodObject[$(this).text()] = $(this).siblings(".quantity").children("input").val();
        foodNameArray.push($(this).text());
      }
    })
    console.log(foodNameArray);
    foodObject["subtotal"] = $(".subtotal").text()
    foodObject["taxes"] = $(".taxes").text()
    foodObject["total"] = $(".total").text()
    foodObject["orderedItems"] = foodNameArray;
    foodObject["name"] = $(".name").val()
    foodObject["phone"] = $(".phone").val()

    if(parseInt($(".total").text()) > 0)  {
      $.ajax({
        url:"http://localhost:8080/order",
        method: "POST",
        data: foodObject
      }).then(() => {
      })
    }

  })

})









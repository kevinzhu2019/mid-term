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

    $('.total').text(parseInt($('.subtotal').text()) + parseInt($('.taxes').text()))
  });

  $('.quantity .decrement').on('click', function() {

    let count = $(this).siblings("input");
    let n = Number(count.val());
    if (n > 0)  {
    n -= 1;
    count.val(n)


    $('.subtotal').text(parseInt($('.subtotal').text()) - parseInt($(this).parent().siblings(".price").text()));

    $('.taxes').text(Math.round($('.subtotal').text()*0.13 * 100) / 100);

    $('.total').text(parseInt($('.subtotal').text()) + parseInt($('.taxes').text()))
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


});



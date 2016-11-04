(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(
  function(){
    console.log('jQuery rockin');
    var $currentTotal = 0;
    var availableItems ={
      Burger: 8.99,
      Pizza: 7.99,
      'Ice_Cream' : 11.99,
      Ribs: 14.99
    }
    var itemQuantities = {
      Burger: 0,
      Pizza: 0,
      'Ice_Cream': 0,
      Ribs: 0
    }
    $('.order-button').click(
      function(){
        // var newRow =
        console.log($(this).data('title'));
        var $title = $(this).data('title');
        var $cost = parseFloat(availableItems[$title]).toFixed(2);
        $currentTotal += parseFloat((parseFloat($cost)).toFixed(2));
        console.log($cost);
        console.log($currentTotal);
        function updateCosts(){
          var $tax = parseFloat(($currentTotal*.08).toFixed(2));
          var $total = $currentTotal + $tax;
          if($currentTotal < 15){
            $('#totals').append(
              `                      <table class="right-align">
                                        <col align="right">
                                        <col align="right">
                                            <tbody id="tBodyHere">
                                            <tr>
                                                <td>Subtotal</td>
                                                <td class="right-align currentSubtotalTab">${$currentTotal}</td>
                                            </tr>
                                            <tr>
                                                <td>Tax</td>
                                                <td class="right-align currentTaxTab">${$tax}</td>
                                            </tr>
                                            <tr>
                                                <td>Total</td>
                                                <td class="right-align currentTotalTab">${$total}</td>
                                            </tr>
                                        </tbody>
                                    </table>`
            )
          }else{
            $('.currentSubtotalTab').html($currentTotal);
            $('.currentTaxTab').html($tax);
            $('.currentTotalTab').html($total);

          }
        }
        if(itemQuantities[$title] === 0){
          itemQuantities[$title]++;
          $('#tBodyHere').append(
            `<tr><td>${$title}</td><td id="${$title}Cart">${itemQuantities[$title]}</td><td class="right-align">${$cost}</td></tr>`
          );
          updateCosts();
        }else{
          itemQuantities[$title]++;
          $('#'+$title+'Cart').html(itemQuantities[$title]);
          console.log(itemQuantities[$title]);
          updateCosts();

        }


      } //end of .click function
    ) //end of onClick
    $('#order-place').submit(
      function(){
        alert('thanks for your order!');
        event.preventDefault();
        console.log('address ',$('#address').html());
        console.log('clicked button');
        if($('#address').html() !== undefined && $('#icon_telephone').html() !== undefined && $('#first_name').html() !== undefined){
        }
      }) //end of onclick and onclick function
  } // end of first onReady function

) // end of onReady

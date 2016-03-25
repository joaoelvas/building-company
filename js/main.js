function showPopup()
{

  $('#opaco').height($(document).height()).removeClass('hidden').fadeTo('slow', 0.9);
  $('#popup').removeClass('hidden').fadeTo('slow', 1);
  
    
};
function closePopup()
{

  $('#opaco').height($(document).height()).addClass('hidden').fadeTo('slow', 1);
  $('#popup').addClass('hidden').fadeTo('slow', 1);
  
    
};


function calculate() {
  var option1 = $("input[name=optionsFloor]:checked").val();
  option1 = parseFloat(option1);

  var option2 = $("input[name=options2]:checked").val();
  option2 = parseFloat(option2);

  var option3 = 0;  
  $("input[name=options3]:checked").each(function(){
    var number = $(this).val();
    number = parseFloat(number);
    option3+=number;
  });

  var price=option1+option2+option3;

  $('#total').text("Total price: "+price+"$");
};

$(document).ready(function(){
  $('.slideblock .button').click(showPopup);  
  $('.contact').click(showPopup);

  $('#popup :not(.cform)').click(closePopup);
  calculate();
  
  $('form').change(function(){
      calculate();
  });

});

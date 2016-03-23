/*//open pop-up
function showPopup(popup_type)
{
  //when IE - fade immediately
  if($.browser.msie)
  {
   $('#opaco').height($(document).height()).toggleClass('hidden');
  }
  else
  //in all the rest browsers - fade slowly
  {
   $('#opaco').height($(document).height()).toggleClass('hidden').fadeTo('slow', 0.7);
  }

  $('#popup')
   .html($('#popup_' + popup_type).html())
   .alignCenter()
   .toggleClass('hidden');

}*/

function showPopup()
{

  $('#opaco').height($(document).height()).toggleClass('hidden').fadeTo('slow', 0.9);
  $('#popup').toggleClass('hidden').fadeTo('slow', 1);
  
    
};

$(document).ready(function(){
  $('.slideblock .button').click(showPopup);
  $('#popup .fa-times').click(showPopup);
  $('.contact').click(showPopup);
  $('#popup .container > :not(form)').click(showPopup);
});
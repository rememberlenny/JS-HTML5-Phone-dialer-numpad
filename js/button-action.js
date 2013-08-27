(function ($){

  window.numberArray = [],
  window.phoneNumber,
  window.numberDisplayEl;

  $('div#dialpad li').click(function(){
    var content = $(this).html();
    numberArray.push(content);
    compilePhoneNumber();
    updateDisplay();
  });


})(jQuery);
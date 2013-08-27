(function ($){

  window.numberArray = [],
  window.phoneNumber,
  window.numberDisplayEl;

  $('div#dialpad li').click(function(){
    var content = $(this).html();
    numberArray.push(content);
    console.log("Added: " + content);
    console.log("Array is: " + numberArray);
    compilePhoneNumber();
    updateDisplay();
  });


})(jQuery);
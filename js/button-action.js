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

  function compilePhoneNumber(numberArray){
    if (window.numberArray.length > 1){ 
      window.phoneNumber = window.numberArray.join('');
    }
    // this.phoneNumber = numberArray.join();
    return window.phoneNumber;
  };

  function updateDisplay(phoneNumber){
    numberDisplayEl = $('div#numberDisplay p');
    numberDisplayEl.html = this.phoneNumber;
  };

})(jQuery);
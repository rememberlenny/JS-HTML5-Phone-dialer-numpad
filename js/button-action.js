(function ($){

  window.numberArray = [],
  window.phoneNumber,
  window.updateDisplay,
  window.numberDisplayEl;

  function compilePhoneNumber(numberArray){
    if (window.numberArray.length > 1){ 
      window.phoneNumber = window.numberArray.join('');
    } else {
      window.phoneNumber = window.numberArray
    }
    return this.phoneNumber;
  };

  function updateDisplay(phoneNumber){
    window.numberDisplayEl = $('div#numberDisplay p');
    window.numberDisplayEl.html(window.phoneNumber);
  };

  function clearPhoneNumber(){
    window.phoneNumber = '';
    window.numberArray = [];
    console.log('Phone Number cleared.');
    console.log('Array is empty.');
  }

  $('div#dialpad li').click(function(){
    var content = $(this).html();
    numberArray.push(content);
    console.log("Added: " + content);
    console.log("Array is: " + numberArray);
    compilePhoneNumber();
    updateDisplay();
  });

  $('div#actions li.clear').click(function(){
    clearPhoneNumber();
    updateDisplay();
  })

})(jQuery);
// Refactor to OO
// Write tests

(function ($){

  window.numberArray = [],
  window.phoneNumber = '',
  window.updateDisplay,
  window.numberDisplayEl,
  window.numberDisplayEl = $('#numberDisplay input');

  function compilePhoneNumber(numberArray){
    if (window.numberArray.length > 1){ 
      window.phoneNumber = window.numberArray.join('');
    } else {
      window.phoneNumber = window.numberArray
    }
    return this.phoneNumber;
  };

  function updateDisplay(phoneNumber){
    window.numberDisplayEl.val(window.phoneNumber);
  };

  function clearPhoneNumber(){
    window.numberDisplayEl.val('');
    window.phoneNumber = '';
    window.numberArray = [];
    console.log('Phone Number cleared.');
    console.log('Array is empty.');
  };

  function callNumber(){
    window.numberDisplayEl.attr('value', 'Calling...');
    // Need timer interval to animate . . .
    // Trigger  "Hangup"
    // Trigger  "Call timer"
  };

  function refreshInputArray(){
    console.log('Input Array refreshed.');
    this.numberDisplayElContent = window.numberDisplayEl.val(); 
    window.numberArray = this.numberDisplayElContent.split('');
  };

  $('div#dialpad li').click(function(){
    var content = $(this).html();
    refreshInputArray();
    window.numberArray.push(content);
    console.log("Added: " + content);
    console.log("Array is: " + numberArray);
    compilePhoneNumber();
    updateDisplay();
  });

  $('div#actions li.clear').click(function(){
    clearPhoneNumber();
    updateDisplay();
  });

  $('div#actions li.call').click(function(){
    callNumber();
  });

})(jQuery);
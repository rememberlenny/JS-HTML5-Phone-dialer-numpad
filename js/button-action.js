// Refactor to OO
// Write tests

(function ($){
  window.numberArray = [],
  window.phoneNumber = '',
  window.updateDisplay,
  window.numberDisplayEl,
  window.dialpadButton = $('div#dialpad li'),
  window.clearButton = $('#actions .clear'),
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
    window.numberDisplayEl.val('Calling...');
    window.numberDisplayEl.attr('readonly','readonly');
    activateInCallInterface();
    // Need timer interval to animate . . .
    // Trigger  "Hangup"
    // Trigger  "Call timer"
  };

  function activateInCallInterface(){
    changeClearIntoHangUp();
    disableDialButton();
  };

  function disableDialButton(){

  };

  function changeClearIntoHangUp(){
    window.clearButton.html('Hang Up');
    window.clearButton.html('Hang Up');
  };

  function changeHangUpIntoClear(){
    if( window.clearButton.html('Hang Up') ){
      window.clearButton.html('Clear');
    }
  };

  function disableInCallInterface(){
    removeReadOnlyInput();
  }

  function removeReadOnlyInput(){
    window.numberDisplayEl.removeAttr('readonly');
  }

  function refreshInputArray(){
    console.log('Input Array refreshed.');
    this.numberDisplayElContent = window.numberDisplayEl.val(); 
    window.numberArray = this.numberDisplayElContent.split('');
  };

  window.dialpadButton.click(function(){
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
    removeReadOnlyInput();
    changeHangUpIntoClear();
    updateDisplay();
  });

  $('div#actions li.call').click(function(){
    callNumber();
  });

})(jQuery);
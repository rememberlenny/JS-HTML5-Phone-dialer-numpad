// Refactor to OO
// Write tests

(function ($){
  window.numberArray = [],
  window.phoneNumber = '',
  window.updateDisplay,
  window.numberDisplayEl,
  window.dialpadButton = $('div#dialpad li'),
  window.dialpadCase = $('div#dialpad'),
  window.clearButton = $('#actions .clear'),
  window.callButton = $('#actions .call'),
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
    disableCallButton();
    disableDialButton();
  };

  function disableInCallInterface(){
    removeReadOnlyInput();
    enableCallButton();
  }

  function highlightCallButton(){
    window.callButton.addClass('higlight');
  };

  function unhighlightCallButton(){
    window.callButton.removeClass('higlight');
  };

  function disableCallButton(){
    window.callButton.addClass('deactive');
  };

  function enableCallButton(){
    window.callButton.removeClass('deactive');
  };

  function enableDialButton(){
    window.dialpadCase.removeClass('deactive');
  };

  function disableDialButton(){
    window.dialpadCase.addClass('deactive');
  };

  function changeClearIntoHangUp(){
    window.clearButton.html('Hang Up');
    window.clearButton.addClass('hangup');
  };

  function changeHangUpIntoClear(){
    if( window.clearButton.html('Hang Up') ){
      window.clearButton.html('Clear');
      window.clearButton.removeClass('hangup');
    }
  };

  function removeReadOnlyInput(){
    window.numberDisplayEl.removeAttr('readonly');
  }

  function refreshInputArray(){
    console.log('Input Array refreshed.');
    this.numberDisplayElContent = window.numberDisplayEl.val(); 
    window.numberArray = this.numberDisplayElContent.split('');
  };

  window.dialpadButton.click(function(){
    if( !$(dialpadCase).hasClass('deactive') ){
      var content = $(this).html();
      refreshInputArray();
      window.numberArray.push(content);
      console.log("Added: " + content);
      console.log("Array is: " + numberArray);
      compilePhoneNumber();
      updateDisplay();
      checkDisplayEl();
    }
  });

  function checkDisplayEl(){
    if( window.numberDisplayEl.val() != "" ){
      addReadyToClear();
    } else if ( window.numberDisplayEl.val() == "" ) {
      removeReadyFromClear();
    }
  }

  function addReadyToClear(){
    window.clearButton.addClass('ready');
  }

  function removeReadyFromClear(){
    window.clearButton.removeClass('ready');
    console.log('Removed ready from clear.');
  }

  $('div#actions li.clear').click(function(){
    enableCallButton();
    enableDialButton();
    clearPhoneNumber();
    removeReadOnlyInput();
    changeHangUpIntoClear();
    updateDisplay();
    checkDisplayEl();
  });

  $('div#actions li.call').click(function(){
    callNumber();
  });

})(jQuery);
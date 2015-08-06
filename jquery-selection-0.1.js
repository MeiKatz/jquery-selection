(function ($) {
  $.fn.selection = function (start, end, direction) {
    // get DOM instance of first element in the set of selected elements
    var el = $(this)[0];
    
    // we only can get and set the selection range if we have a selected element
    // and the element value can be selected
    if ( el && el.setSelectionRange ) {
      // change selection range if at least one argument is passed
      if ( arguments.length > 0 ) {
        // negative position values are seen as position seen from the end in reverse direction
        if ( end < 0 ) {
          end = el.value.length + end + 1;
        }
      
        // set new selection range
        el.setSelectionRange(start, end, direction || null);
      }
      
      // return data of selection
      return {
        "start":     el.selectionStart,
        "end":       el.selectionEnd,
        "direction": el.selectionDirection,
        "selected":  el.value.substr(el.selectionStart, el.selectionEnd - el.selectionStart),
        "length":    el.selectionEnd - el.selectionStart
      };
    }
  };
})(jQuery);

/* start-amd-strip-block */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function($) {
/* end-amd-strip-block */

  /**
  * Make elements in the jQuery selector disabled if they support the prop disabled. Or has a disable method.
  */
  $.fn.disable = function() {
    $.each(this.data(), function(index, value) {
      if (value instanceof jQuery) {
        return;
      }

      if (value && value.disable) {
        value.disable();
      }
    });
    this.prop('disabled', true);
    return this;
  };

  /**
  * Make elements in the jQuery selector enabled if they support the prop disabled. Or has a enable method.
  */
  $.fn.enable = function() {
    $.each(this.data(), function(index, value) {
      if (value instanceof jQuery) {
        return;
      }

      if (value && value.enable) {
        value.enable();
      }
    });
    this.prop({'disabled': false, 'readonly': false});
    return this;
  };

  /**
  * Make elements in the jQuery selector readonly if they support the prop readonly. Or has a readonly method.
  */
  $.fn.readonly = function() {
    $.each(this.data(), function(index, value) {
      if (value instanceof jQuery) {
        return;
      }

      if (value && value.readonly) {
        value.readonly();
      }
    });
    this.prop('readonly', true);
    return this;
  };

  // Fix: Labels without the "for" attribute
  $(function () {
    var str, control,
      labelText = $('.label-text'),
      labels = labelText.closest('label, .label');

    labels.each(function () {
      control = $('input, textarea, select', this);
      str = control.attr('class');

      $(this).addClass(function () {
        // Add "inline" and "inline-{control}" class to label
        // assuming control class is first thing in class string
        return 'inline' + (str ? ' inline-'+ (str.indexOf(' ') === -1 ? str : str.substr(0, str.indexOf(' '))) : '');
      });
    });
  });

  // Fix: Radio buttons was not selecting when click and than use arrow keys on Firefox
  $(function () {
    $('input:radio').on('click.radios', function() {
      this.focus();
    });
  });

  // Add css classes to parent for apply special rules
  $(function () {
    var addCssClassToParent = function(elemArray, cssClass) {
      for (var i = 0, l = elemArray.length; i < l; i++) {
        $(elemArray[i]).parent().addClass(cssClass);
      }
    };
    addCssClassToParent($('.field > input:checkbox, .field > .inline-checkbox'), 'field-checkbox');
    addCssClassToParent($('.field > input:radio, .field > .inline-radio'), 'field-radio');
  });

/* start-amd-strip-block */
}));
/* end-amd-strip-block */

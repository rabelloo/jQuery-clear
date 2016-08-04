/*
    Clear forms with one call

    Author: André Luiz Rabêllo
    Version: 1.0.0
*/

;(function($) {

  $.fn.clear = function (elements, noClear) {
      // Form
      var $form = this;
      if (!$form.is('form'))
          $form = this.find('form');

      // Validate form found
      if (!$form.length)
          return this;

      // Elements to clear
      if (!elements)
          elements = 'input textarea select';

      // Find elements to clear
      $form
          .find(elements)
              // Ignore elements not to clear
              .not(noClear)
                  .each(function () {
                      var $input = $(this);
                      var clearValue = $input.data('clear');

                      // Type check
                      if ($input.is(':checkbox, :radio'))
                          $input.prop('checked', clearValue || false);

                      else if ($input.is('select'))
                          $input.val(clearValue || $input.find('option').val());

                      else
                          $input.val(clearValue || '');
                  })
                  .trigger('change');

      return this;
  };
})(jQuery);

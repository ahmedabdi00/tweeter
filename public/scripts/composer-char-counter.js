$(document).ready(function() {
  $('.new-tweet textarea').on('input', function() {
    const maxLength = 140;
    const currentLength = $(this).val().length;
    const remaining = maxLength - currentLength;
    const counter = $(this).closest('form').find('.counter');

    counter.text(remaining);

    if (remaining < 0) {
      counter.addClass('red-text'); // Add a class for red text
    } else {
      counter.removeClass('red-text'); // Remove the class
    }
  });
});

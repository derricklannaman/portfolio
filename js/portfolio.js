$( document ).ready(function() {
  $('object#resume-pdf').hide();
  $('.entrepreurial-details').hide();
  $('#learn-more-btn').on('click', showBusinessDetails);
  $('#get-resume-btn').on('click', showResume);
  $('#learn-more-btn, #get-resume-btn').hover(highlightText, removeHighlight);
});

function highlightText() {
  button = $( this);
  button.css('color', 'green')
}

function removeHighlight() {
  button = $( this);
  button.css('color', '#495563')
}

function showResume() {
  $('object#resume-pdf').toggle();
}

function showBusinessDetails() {
   $('.entrepreurial-details').slideToggle(300);
}
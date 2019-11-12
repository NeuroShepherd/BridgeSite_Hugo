$(document).on('click', '.toggle-hide-show', function(){
  var target = $(this).attr('data-target');
  $('.'+target).toggle();
  $(this).children('svg').toggleClass('fa-chevron-circle-down').toggleClass('fa-chevron-circle-up');
});
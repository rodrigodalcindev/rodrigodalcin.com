$(function() {
  $('select.talents').customSelect();

  $('select.talents').on('change', function() {
    talentId = $(this).val();
    $('body').attr('data-variation', talentId);
    refreshCustomSelect();
  });

  function refreshCustomSelect() {
    $('select.talents').width($('.customSelect').outerWidth());
  }

  setTimeout(function(){
    refreshCustomSelect();
  }, 750);
});
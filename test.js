$( document ).ready(function() {



// $('#forever-anchor').on('click',function(){
//   $('.logo-container').addClass('add-opacity');
//   $('#forever-modal').addClass('showvideo');
//   $("#foreverbg").css("opacity","1").css("z-index", "8");

// });

$('#pain-anchor').on('click',function(){
  $('.logo-container').addClass('add-opacity');
  $('#pain-modal').addClass('showvideo');
  $("#painbg").css("opacity","1").css("z-index", "8");
});

$('#spotlight-anchor').on('click',function(){
  $('.logo-container').addClass('add-opacity');
  $('#spotlight-modal').addClass('showvideo');
  $("#spotlightbg").css("opacity","1").css("z-index", "8");
});

$('.x-out2').on('click',function(){
  $('#forever-modal').removeClass("showvideo");
  $('#foreverbg').css("opacity","0").css("z-index","0");

  $('#pain-modal').removeClass("showvideo");
  $("#painbg").css("opacity","0").css("z-index", "0");

  $('#spotlight-modal').removeClass("showvideo");
  $('#spotlightbg').css("opacity","0").css("z-index","0");
});


});

$(document).ready(function() {

  $("#x-out").click(function() {
    $('iframe').css('display', 'none');    
    $("#promo-bg").css('display', 'none');
    $("#promo-modal").css('display', 'none');
    $('body').wrapInner('<div class="shell" id="shell"/>');
    
//     var delay = 3000; //Your delay in milliseconds
//     setTimeout(function(){ 
//         $("#main-container").fadeTo(1000, 0, function() {
//         $("#single-links").css("display", "flex");
//         $("#contact-btn").css("display", "block");
//         $("#zindex9").css("display", "inline");
        
//         $("#main-container").css("background", "#0d0d0d");
//         $("#single-links").css("opacity", "1");
//         console.log("fadeout");
//         $(".shell").removeClass("shell");
//       });
//       $("#main-container").fadeTo(1000, 1, function() {
//         $("#main-container").css("opacity", "1");
//         console.log("fadein");
//       $('iframe').css('display', 'block');
        
//         $('#shell').click(function(e) {
//           e.stopPropagation();
//         });
//       });
//     }, delay);
    
     $(".shell").one('click', function() {
      $("#main-container").fadeTo(1000, 0, function() {
        $("#single-links").css("display", "flex");
        $("#contact-btn").css("display", "block");
        $("#zindex9").css("display", "inline");
        
        $("#main-container").css("background", "#0d0d0d");
        $("#single-links").css("opacity", "1");
        console.log("fadeout");
        $("#shell").removeClass("shell");
      });
      $("#main-container").fadeTo(1000, 1, function() {
        $("#main-container").css("opacity", "1");
        console.log("fadein");
      $('iframe').css('display', 'block');    
        
      });
    });
  });

  // CREATE FULL SCREEN DIVS FOR EACH PIC THEN DISPLAY: BLOCK OR VISIBILITY

  $("#forever-anchor").mouseenter(function() {
    $("#main-container").css("background", "url(/images/valentin3.1_BAN.jpg) no-repeat center center fixed");
    $("#main-container").css("-webkit-background-size", "cover");
    $("#main-container").css("-moz-background-size", "cover");
    $("#main-container").css("-o-background-size", "cover");
    $("#main-container").css("background-size", "cover");
    $("#main-container").fadeTo(0, 1, function() {
      $("#spotlight-anchor").addClass("hidetext");
      $("#pain-anchor").addClass("hidetext");
    });
    console.log("FOREVER ANCHOR");
  });

  $("#forever-anchor").mouseout(function() {
    $("#main-container").css("background", "#0d0d0d");
    $("#main-container").fadeTo(0, 1, function() {
      $("#spotlight-anchor").removeClass("hidetext");
      $("#pain-anchor").removeClass("hidetext");
    });
  });

  $("#pain-anchor").mouseover(function() {
    $("#main-container").css("background", "url(/images/buste3.1BAN.jpg) no-repeat center center fixed");
    $("#main-container").css("-webkit-background-size", "cover");
    $("#main-container").css("-moz-background-size", "cover");
    $("#main-container").css("-o-background-size", "cover");
    $("#main-container").css("background-size", "cover");
    $("#main-container").fadeTo(0, 1, function() {
      $("#forever-anchor").addClass("hidetext");
      $("#spotlight-anchor").addClass("hidetext");
    });

    console.log("PAIN ANCHOR");
  });

  $("#pain-anchor").mouseout(function() {
    $("#main-container").css("background", "#0d0d0d");
    $("#main-container").fadeTo(0, 1, function() {
      $("#forever-anchor").removeClass("hidetext");
      $("#spotlight-anchor").removeClass("hidetext");
    });
  });

  $("#spotlight-anchor").mouseover(function() {
    $("#main-container").css("background", "url(/images/chaise3.2_BAN.jpg) no-repeat center center fixed");
    $("#main-container").css("-webkit-background-size", "cover");
    $("#main-container").css("-moz-background-size", "cover");
    $("#main-container").css("-o-background-size", "cover");
    $("#main-container").css("background-size", "cover");
    $("#main-container").fadeTo(0, 1, function() {
      $("#forever-anchor").addClass("hidetext");
      $("#pain-anchor").addClass("hidetext");
    });

    console.log("SPOTLIGHT ANCHOR");
  });

  $("#spotlight-anchor").mouseout(function() {
    $("#main-container").css("background", "#0d0d0d");
    $("#main-container").fadeTo(0, 1, function() {
      $("#forever-anchor").removeClass("hidetext");
      $("#pain-anchor").removeClass("hidetext");
    });
  });

  $("#contact-btn").click(function() {
    $('iframe').css('display', 'none');
    $('#painbg').css('display', 'none');
    $('#spotlightbg').css('display', 'none');
    $('#foreverbg').css('display', 'none');
    $("#single-links").hide("fast");
    $("#contact-btn").hide("slow");
    $("#singles-btn").show("slow");
    $("#contact-page").show("slow");
    $("#zindex9").css("display", "none");

  });

  $("#singles-btn").click(function() {
    $('iframe').css('display', 'block');
    $('#painbg').css('display', 'block');
    $('#spotlightbg').css('display', 'block');
    $('#foreverbg').css('display', 'block');
    $("#contact-page").hide("fast");
    $("#singles-btn").hide("slow");
    $("#singles-links").show("slow");
    $("#contact-btn").show("slow");
    $("#single-links").css('display', 'flex');
    $("#zindex9").css("display", "inline");

  });

});

$( document ).load(function() {
  $(window).scrollTop(0);
})

var section = $('.intro-text');

section.mouseover(function () {

  var index = $(this).parent().index() + 1;
  var imagepath = "url('assets/img/home" + index + ".gif')"

if (index < 3) {
  $(this).css("color", "white");
  $(this).css("mix-blend-mode", "difference");
  $(this).parent().css("background", "none");
  $("#bg-container").css("background-image", imagepath);
 }

 if (index == 3) {
   $("#img3").css("display", "block");
 }

   if ($(this).is("#hover-left")) {
     $(this).css("background-image", "url('assets/img/home5s.gif')");
   } else if ($(this).is("#hover-right")) {
     $(this).css("background-image", "url('assets/img/home5d.gif')");

   $(this).children().css("color", "white");
   $(this).children().css("mix-blend-mode", "difference");
   $(this).siblings().css("background-image", "none")
   $(this).siblings().css("color", "black")
   }
})


section.mouseout(function() {
var index = $(this).parent().index() + 1;


if (index < 3) {
  $(this).css("color", "black");
  $(this).css("mix-blend-mode", "initial");
  $("#bg-container").css("background-image", "none");
}

  $("#img3").css("display", "none");

if (index == 2) {
  $(this).parent().css("background-color", "var(--grey)");
}

 if (index > 3) {
$(this).children().css("color", "black");
$(this).children().css("mix-blend-mode", "initial");
$(this).css("background-image", "none")
}
})


// MARQUEE

document.querySelectorAll('.js-marquee').forEach(function(e) {
    var letter = e.querySelector('span');
    for (counter = 1; counter <= 3; ++counter) {
        var clone = letter.cloneNode(true);
        letter.after(clone);
    }
})

// HYPERLINKS
$("#hover-left").click(function () {window.open('map.html', "_self")})
$("#hover-right").click(function () {window.open('atlas.html', "_self")})

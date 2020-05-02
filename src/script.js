let cookFooter = document.getElementById("cook-footer");
let scrollUpBtn = document.getElementById("scrollUp");

window.onscroll = function () {
  console.log(window.pageYOffset)
  
  if (window.pageYOffset >= 400 && window.pageYOffset < 899) {
    console.log("400-899");
    cookFooter.classList.add("fixed");
    cookFooter.classList.remove("bottom");
  } else if (window.pageYOffset >= 899) {
    console.log(">899");
    cookFooter.classList.add("bottom");
  } else {
    console.log("<400");
    cookFooter.classList.remove("fixed");
    cookFooter.classList.remove("bottom");
  }
  a();
}

  
  function a() {
    var e = $("#concept").offset().top,
        n = $("#concept").outerHeight(),
        i = $("#concept .cook-info").offset().top + 220,
        r = $("#concept .footer").outerHeight(),
        o = $(window).scrollTop(),
        s = $(window).height(),
        a = 0;
        i + r + a - s < o
          ? ($("#concept .footer").removeClass("bottom"), $("#concept .footer").addClass("fixed"))
          : $("#concept .footer").removeClass("fixed"),
          e + n - s < o && ($("#concept .footer").removeClass("fixed"), $("#concept .footer").addClass("bottom"))
  }

new WOW().init();

window.onscroll = function () {
  console.log(window.pageYOffset)
  
  if (window.pageYOffset >= 500) {
  scrollUpBtn.classList.add("show");
  } else {
  scrollUpBtn.classList.remove("show");
  }
}

scrollUpBtn.onclick = function() {
  console.log("click");
  window.scrollTo({ 
    top: 100,
    behavior: "smooth" 
  });
}


// let menuBtn = document.getElementById("menu-icon");

// menuBtn.onclick = function() {
//   if(mobileHeader.classList.contains("open")) {
//     menuBtn.classList.remove("close-icon");
//     mobileHeader.classList.remove("open");
//   } else{
//     mobileHeader.classList.add("open");
//     menuBtn.classList.add("close-icon");
//   }
// }

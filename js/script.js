

//burger open
let menuOpen = document.querySelector('.burger_line_open')
let menuPage = document.querySelector('.menu')
let menuCloseItem = document.querySelector('.burger_close')
let menuActive = document.querySelector('.menu_page_active')
let burgerLang = document.querySelector('.in_menu_mobile')
let burgerLangActive = document.querySelector('.in_menu_mobile_active')
menuOpen.addEventListener('click', function(){
    menuPage.classList.toggle('menu_page_active')
    burgerLang.classList.toggle('in_menu_mobile_active')
});
menuCloseItem.addEventListener('click', function(){
    menuPage.classList.remove('menu_page_active')
    burgerLang.classList.remove('in_menu_mobile_active')
});

//burger_mouse
let burgerOpen = document.querySelector('.burger_line_open')
let burgerTitle = document.querySelector('.burger_title')
burgerOpen.addEventListener('mouseover', function(){
    burgerTitle.classList.add('burger_title_back')
});
burgerOpen.addEventListener('mouseout', function(){
    burgerTitle.classList.remove('burger_title_back')
});

//animation active
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('anim_active');
    } else {
    change.target.classList.remove('anim_active');
    }
  });
}
let options = { threshold: [0.01] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.anim_left,.anim_right,.anim_rotate_left,.anim_rotate_right');
for (let elm of elements) {
  observer.observe(elm);
}
//effect for menu
window.addEventListener('scroll', function() {
  if (pageYOffset > 255) {
    document.querySelector('.menu').classList.add('active_header_menu')
  } else {
    document.querySelector('.menu').classList.remove('active_header_menu')
  }
})


//effects open for wrap_card
const buttons = document.querySelectorAll('.wrap_card')
for (let button of buttons) {
  button.addEventListener('click', () => {
      button.querySelector('.card').classList.toggle('card_active')
      button.querySelector('.hidden_card').classList.toggle('hidden_card_active')
  })
}



// пагинация для первого блока отзывов

var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("block_page_first");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}


var sIndex = 1;
showS(sIndex);
// Next/previous controls
function plusS(n) {
  showS(sIndex += n);
}
// Thumbnail image controls
function currentS(n) {
  showS(sIndex = n);
}
function showS(n) {
  var i;
  var slidess = document.getElementsByClassName("block_page_second");
  if (n > slidess.length) {sIndex = 1}
  if (n < 1) {sIndex = slidess.length}
  for (i = 0; i < slidess.length; i++) {
      slidess[i].style.display = "none";
  }
  slidess[sIndex-1].style.display = "flex";
}



var slideIndex1= 0;
showSlides1(slideIndex1);
var count = 3
// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n, n);
}

function showSlides1(n,step=0) {
    var slides1 = document.getElementsByClassName("wrap_card");
    if (slideIndex1  < slides1.length && slideIndex1>=0) {
        //alert(n+" inx"+slideIndex1+' len '+slides1.length)
        var end = n + 2;
        var len = slides1.length;
        for (i1 = 0; i1 < slides1.length; i1++) {
            slides1[i1].style.display = "none";
            slides1[i1].querySelector('.card').classList.remove('card_active');
            slides1[i1].querySelector('.hidden_card').classList.remove('hidden_card_active');
        }
        for (var i2 = n; i2 <= end; i2++) {
            var idx = i2 % len;
            slides1[idx].style.display = "block";
        }
        // if (n>0){
        //     slides1[slideIndex1].querySelector('.card').classList.toggle('card_active');
        //     slides1[slideIndex1].querySelector('.hidden_card').classList.toggle('hidden_card_active');
        // }
        slides1[slideIndex1].querySelector('.card').classList.add('card_active');
        slides1[slideIndex1].querySelector('.hidden_card').classList.add('hidden_card_active');
    }
    else {
        //alert("false"+n+" inx"+slideIndex1+' len '+slides1.length)
        slideIndex1 -= step
    }
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

        alert("Вы используете мобильное устройство (телефон или планшет).")

    } else alert("Вы используете ПК.")
}
  // var i1, i2;
  // var slides1 = document.getElementsByClassName("wrap_card");
  // if (n> slides1.length) {slideIndex1 = 0}
  // else if (n < 0) {slideIndex1 = slides1.length}
  // alert(n+" "+slideIndex1)
  // for (i1 = 0; i1 < slides1.length; i1++) {
  //         slides1[i1].style.display = "none";
  //     }
  // if (n-1<0){
  //     slides1[slideIndex1].style.display = "block";
  // }
  // else {
  //     slides1[n-1].style.display = "block";
  // }
  // slides1[n].style.display = "block";
  //
  // if (n+1>slides1.length) {
  //     slides1[slideIndex1+1].style.display = "block";
  // }
  // else {
  //     slides1[n+1].style.display = "block";
  // }



        // if (card) {
      //     slides[slideIndex1 - 3].querySelector('.card').classList.toggle('card_active');
      //     slides[slideIndex1 - 3].querySelector('.hidden_card').classList.toggle('hidden_card_active');
      // }
  // for (i2 = 0; i2 < count; i2++){
  //     slides1[slideIndex1+i2].style.display = "block";
  // }
  // slides1[slideIndex1-1].style.display = "block";
  // slides1[slideIndex1].style.display = "block";
  // slides1[slideIndex1+1].style.display = "block";

  ///slides1[slideIndex1-2].style.display = "block";
  // slides[slideIndex1-2].querySelector('.card').classList.toggle('card_active');
  // slides[slideIndex1-2].querySelector('.hidden_card').classList.toggle('hidden_card_active');
  ///slides1[slideIndex1-3].style.display = "block";


//
// const buttons = document.querySelectorAll('.wrap_card')
// for (let button of buttons) {
//   button.addEventListener('click', () => {
//       button.querySelector('.card').classList.toggle('card_active')
//       button.querySelector('.hidden_card').classList.toggle('hidden_card_active')
//   })
// }







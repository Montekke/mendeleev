$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  focusOnSelect: true,
  arrows:false,
  responsive:[
    {
      breakpoint:1400,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint:992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint:768,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});



 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
});

$('.single-item').slick({
  appendArrows: $('.arrows'),
  focusOnSelect: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  centerMode: true,
   responsive:[
    {
      breakpoint:1200,
      settings: {
        centerMode: false,
        variableWidth: false,
      }
    },
  ]
});


$('.arrows-next').click(function(){
  $(this).prev().slick('slickNext');
});
var $status = $('.pagingInfo');
var $slickElement = $('.single-sert');
$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  if(!slick.$dots){
  	return;
  }

  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + (slick.$dots[0].children.length));
});

$('.show-popup').magnificPopup({
    type: 'inline',
    removalDelay: 0, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
        },
        open: function(){
          jQuery('body').addClass('magnificpopupnoscroll');
          $slickElement.slick({
          appendArrows: $('.arrows2'),
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive:[
            {
              breakpoint:768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint:576,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
          });
        },
          close: function() {
          jQuery('body').removeClass('magnificpopupnoscroll');
        },
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.

});

$(function(){
  $(".single-sert").on('afterChange', function(event, slick, currentSlide){
     $("#cp").text(currentSlide + 1);
  });
});

$("body").on("focusin", "input[type=tel]", (function() {
    $(this).inputmask({
        mask: ["+79999999999", "+799999999999"],
        greedy: !1
    })
}
));

//Сейчас работаем

var date = new Date();
var hourr = date.getHours();
var week = date.getDay();

if (hourr < 11 || hourr > 20) {
      $('.worknow').addClass('none');
      $('.online').addClass('none');
}
else {
      $('.worknow').removeClass('none');
      $('.online').removeClass('none');
};






var r = 59,
c = 19,
n = !0;
if (setInterval(n, 1e3),
$("#map").length) {
ymaps.ready(init);
function init() {
var result = document.getElementById('result'),

destinations = {
'м. Менделеевская': [55.78431856896068,37.59697399999992],
'м. Полежаевская': [55.77585406896871,37.53170250000001],
'м. Курская': [55.75525656900521,37.65345099999998],
'м. Ленинский проспект': [55.701861069016935,37.58068749999996],
},

myMap = new ymaps.Map('map', {

center: [55.78431856896068,37.59697399999992],
zoom: 17
});
myPlacemark2 = new ymaps.Placemark(destinations['м. Менделеевская'], {
hintContent: 'Москва, ул. Новослободская, 36/1с1',
balloonContent: 'Москва, ул. Новослободская, 36/1с1'
}, {

iconLayout: 'default#image',

iconImageHref: 'img/placeholder.svg',
iconColor:"red",
iconImageSize:[163,196],
iconImageOffset:[-80,-123]
});
myPlacemark = new ymaps.Placemark(destinations['м. Полежаевская'], {
hintContent: 'Москва, Хорошевское шоссе, 17',
balloonContent: 'Москва, Хорошевское шоссе, 17'
}, {

iconLayout: 'default#image',

iconImageHref: 'img/placeholder.svg',
iconColor:"red",
iconImageSize:[163,196],
iconImageOffset:[-80,-123]
});
myPlacemark3 = new ymaps.Placemark(destinations['м. Курская'], {
hintContent: 'Москва, Подсосенский пер., д. 28',
balloonContent: 'Москва, Подсосенский пер., д. 28'
}, {

iconLayout: 'default#image',

iconImageHref: 'img/placeholder.svg',
iconColor:"red",
iconImageSize:[163,196],
iconImageOffset:[-80,-123]
});
myPlacemark4 = new ymaps.Placemark(destinations['м. Ленинский проспект'], {
hintContent: 'Москва, ул. Вавилова, 17',
balloonContent: 'Москва, ул. Вавилова, 17'
}, {

iconLayout: 'default#image',

iconImageHref: 'img/placeholder.svg',
iconColor:"red",
iconImageSize:[163,196],
iconImageOffset:[-80,-123]
});


myMap.geoObjects
.add(myPlacemark)
.add(myPlacemark2)
.add(myPlacemark3)
.add(myPlacemark4);
myMap.behaviors.disable('scrollZoom');
/*
myMap2 = new ymaps.Map('map2', {

center: [55.752998447279396,37.62386502388133],
zoom: 17
});
myMap2.geoObjects
.add(myPlacemark)
.add(myPlacemark2)
.add(myPlacemark3)
.add(myPlacemark4);
myMap2.behaviors.disable('scrollZoom');
*/
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

myMap.behaviors.disable('drag');
myMap2.behaviors.disable('drag');
}
}
}
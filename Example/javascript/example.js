'use strict'
//SLIDER
$('.slider').slick();

$(".slick-next").click(IsActive)
$(".slick-prev").click(IsActive)


function IsActive(){
    $(".image-slider").removeClass("active")
    setTimeout(() => {
    $(".image-slider").addClass("active")
    }, 500);
}

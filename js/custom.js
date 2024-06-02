$(document).ready(function(){
    var currentIndex = 0;
    var slidePosition;
    setInterval(function(){
        if (currentIndex < 2) {
            currentIndex ++;
        } else {
            currentIndex = 0;
        }
            slidePosition = currentIndex * (-1200) +"px";
            $(".slideList").animate({left:slidePosition},400);
    },3000);

    $('.open-modal').click(function(){
        $('.modal').fadeIn()
    })
    $('.modal-close').click(function(){
        $('.modal').fadeOut()
    })
});
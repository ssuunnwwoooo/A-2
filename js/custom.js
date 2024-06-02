$(document).ready(function(){
    let index = 0; // 현재 슬라이드 인덱스

    const slideWidth = 1200; // 슬라이드 하나의 너비

    const slideCount = $('.slider img').length; // 슬라이드 이미지 개수

    function showNextSlide() {
        index = (index + 1) % slideCount; // 인덱스를 1 증가, 슬라이드 개수로 나눈 나머지
        
        $('.slider').animate({left: -index * slideWidth + 'px'}, 500); // 슬라이드를 이동
    }

    setInterval(showNextSlide, 3000); // 3초마다 showNextSlide 함수 실행
});
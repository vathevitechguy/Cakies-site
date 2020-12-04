$(window).scroll(function(){
    var dist = $(window).scrollTop();
    var sTop = $('.cart-area-rl').position().top;
    var mHeight = $('.main').height();
    var userDist = 100;
    if((sTop > (mHeight - userDist)) && (dist > (mHeight - userDist))){
        //the sidebar is pinned now. it won't scroll further.
    }else if(dist < (mHeight - userDist)){
        $('.cart-area-rl').animate({
            top: dist + $('.cart-area-rl').height()
        }, 0);         
    }
});
$(function() {
    console.log('test');
    $('.l-header__ham-button').on("click", function(){
        $(this).toggleClass('open');
        $('.l-header__list').toggleClass('open');
    });
    // メニューをクリックされたら、非表示にする
    $('.l-header__item').on("click", function(){
    $('.l-header__list').removeClass('open');
    $('.l-header__ham-button').removeClass('open');
    });
});

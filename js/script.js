$(function(){
    const burger = $('#js-burger-btn');
    const nav = $('#js-header-nav');
    $(burger).on('click', function(){
        $(nav).slideToggle();
    });
})
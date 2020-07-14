$(function(){
    const burger = $('#js-burger-btn');
    const nav = $('#js-header-nav');
    $(burger).on('click', function(){
        $(nav).slideToggle();
    });

    const subBtn = $('#js-section__sub-btn');
    const log = $('#js-subject-log');
    $(subBtn).on('click', function(){
        $(log).slideToggle();
    });

    const side = [
        '#js-subject-side__check01',
        '#js-subject-side__check02',
        '#js-subject-side__check03',
        '#js-subject-side__check04',
        '#js-subject-side__check05',
        '#js-subject-side__check06',
        '#js-subject-side__check07',
        '#js-subject-side__check08',
        '#js-subject-side__check09',
        '#js-subject-side__check10',
        '#js-subject-side__check11',
        '#js-subject-side__check12',
        '#js-subject-side__check13',
        '#js-subject-side__check14',
        '#js-subject-side__check15'
    ];
    const main = [
        '#js-subject-main01',
        '#js-subject-main02',
        '#js-subject-main03',
        '#js-subject-main04',
        '#js-subject-main05',
        '#js-subject-main06',
        '#js-subject-main07',
        '#js-subject-main08',
        '#js-subject-main09',
        '#js-subject-main10',
        '#js-subject-main11',
        '#js-subject-main12',
        '#js-subject-main13',
        '#js-subject-main14',
        '#js-subject-main15'
    ];

    function SetMain(i)
    {
        $(main[i]).slideToggle();
    };
    $(side[0]).on('click', function(){$(main[0]).slideToggle();});  
    $(side[1]).on('click', function(){$(main[1]).slideToggle();});  
    $(side[2]).on('click', function(){$(main[2]).slideToggle();});  
    $(side[3]).on('click', function(){$(main[3]).slideToggle();});  
    $(side[4]).on('click', function(){$(main[4]).slideToggle();});  
    $(side[5]).on('click', function(){$(main[5]).slideToggle();});  
    $(side[6]).on('click', function(){$(main[6]).slideToggle();});  
    $(side[7]).on('click', function(){$(main[7]).slideToggle();});  
    $(side[8]).on('click', function(){$(main[8]).slideToggle();});  
    $(side[9]).on('click', function(){$(main[9]).slideToggle();});  
    $(side[10]).on('click', function(){$(main[10]).slideToggle();});  
    $(side[11]).on('click', function(){$(main[11]).slideToggle();});  
    $(side[12]).on('click', function(){$(main[12]).slideToggle();});  
    $(side[13]).on('click', function(){$(main[13]).slideToggle();});  
    $(side[14]).on('click', function(){$(main[14]).slideToggle();});  
})
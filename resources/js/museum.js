
$(document).ready(()=>{
    const root = getComputedStyle(document.querySelector(':root'));

    $('.art__img')
        .on('mouseover',function(event){
            $(this).css({
                'z-index': root.getPropertyValue('--z-index-E'),
            })
            $('.art__wrapper').css({
                'background-color': '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6),
                'visibility': 'visible',
                'opacity': '1',
                'z-index': root.getPropertyValue('--z-index-D')
            })
        })
        .on('mouseleave',function(event){
            $(this).css({
                'z-index': root.getPropertyValue('--z-index-A'),
            })
            $('.art__wrapper').css({
                'visibility': 'hidden',
                'opacity': '0',
                'z-index': root.getPropertyValue('--z-index-A')
            })
        })
})


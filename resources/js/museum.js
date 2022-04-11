
// $(document).ready(()=>{
//     const root = getComputedStyle(document.querySelector(':root'));
//
//     $('.art__img')
//         .on('mouseover',function(event){
//             $(this).css({
//                 'z-index': root.getPropertyValue('--z-index-E'),
//             })
//             $('.art__wrapper').css({
//                 'background-color': '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6),
//                 'visibility': 'visible',
//                 'opacity': '1',
//                 'z-index': root.getPropertyValue('--z-index-D')
//             })
//         })
//         .on('mouseleave',function(event){
//             $(this).css({
//                 'z-index': root.getPropertyValue('--z-index-A'),
//             })
//             $('.art__wrapper').css({
//                 'visibility': 'hidden',
//                 'opacity': '0',
//                 'z-index': root.getPropertyValue('--z-index-A')
//             })
//         })
// })

function imageComponent(url) {
    return `<a href="" class="item">
                <img class="item__img" src="${url}" alt="">
            </a>`
}

$(document).ready(function(){
    const root = getComputedStyle(document.querySelector(':root'));

    images.forEach(img=>{
        $('.row:first-child').append(imageComponent(img))
        $('.row:last-child').prepend(imageComponent(img))
    })

    $('.item')
        .on('mouseenter', function(){
            $(this).css({
                'z-index': root.getPropertyValue('--z-index-E'),
                'transform': 'scale(1.3)'
            })
            document.querySelector('.art__name').innerText = "fuck you damage"
            $('.art__wrapper').css({
                'background-color': '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6),
                'visibility': 'visible',
                'z-index': root.getPropertyValue('--z-index-D'),
                'opacity': '0.8',
            })
        })
        .on('mouseleave', function(){
            $('.art__wrapper').css({
                'z-index': root.getPropertyValue('--z-index-A'),
                'opacity': '0',
                'visibility': 'hidden'
            })
            document.querySelector('.art__name').innerText = "THE MUSEUM"
            $(this).css({
                'z-index': root.getPropertyValue('--z-index-C'),
                'transform': 'scale(1)'
            })
        })

})

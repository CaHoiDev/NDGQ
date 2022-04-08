const images = [
    '/resources/images/vangoghmuseum-s0022V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0027V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0031V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0195V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0106V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0050V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0049V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0032V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0031V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0029V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0027V1962-800.jpg'
]

$(document).ready(()=>{
    $('.nav')
        .on('mouseenter',()=>{
            let img = $('.wrapper img')
            img.attr('src', images[Math.floor(Math.random() * images.length)])

            // let wImg = img.offsetWidth
            // let hImg = img.offsetHeight
            //
            // if (wImg > hImg){
            //     img.style.height =
            // }

            $('.wrapper').css({
                'visibility': 'visible',
                'opacity': '1'
            })
        })
        .on('mouseleave',()=>{
            $('.wrapper').css({
                'visibility': 'hidden',
                'opacity': '0'
            })
        })
})

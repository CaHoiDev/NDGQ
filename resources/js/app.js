const images = [
    '/resources/images/bannerVatican.jpg',
    '/resources/images/vangoghmuseum-d0337V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0005V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0008V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0019V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0022V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0027V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0029V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0031V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0032V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0047V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0049V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0050V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0106V1962-800.jpg',
    '/resources/images/vangoghmuseum-s0195V1962-800.jpg'
]

$(document).ready(()=>{
    $('.nav__list')
        .on('mouseenter',function(){
            $('.wrapper').css({
                'visibility': 'visible',
                'opacity': '1'
            })
        })
        .on('mouseleave',function(){
            $('.wrapper').css({
                'visibility': 'hidden',
                'opacity': '0'
            })
        })
})

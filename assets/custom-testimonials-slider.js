// initialize slideshow
var sliders = document.querySelectorAll('.main-carousel');

sliders.forEach((elem) => {
    let autoPl = parseInt(elem.parentElement.dataset.autoplay)



    new Flickity( elem, {
        // options
        cellAlign: 'left',
        pageDots: false,
        autoPlay: autoPl,
        contain: true,
        wrapAround: true
    });
})



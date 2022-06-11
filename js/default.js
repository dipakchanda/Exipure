// Testimonial Slider
$('.testimonial-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    // Autoplay
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    // Smart Speed
    smartSpeed: 2000,
    responsive: {
        0: {
            items: 1,
        },
        650: {
            items: 2,
        },
        768: {
            items: 3,
        }
    }
})
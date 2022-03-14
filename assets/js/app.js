new Splide('._why_buddy_slider', {
    type: 'loop',
    perPage: 3,
    padding: 0,
    focus: 'center',
    gap: 30,
    autoplay: true,
    interval: 1500,
    updateOnMove: true,
    arrows: false,
    breakpoints: {
        991: {
            perPage: 2
        },
        767: {
            perPage: 1
        }
    }
}).mount();


new Splide('._web_buddy_slider', {
    type: 'loop',
    perPage: 3,
    padding: 0,
    focus: 'center',
    gap: -20,
    updateOnMove: true,
    pagination: false,
    breakpoints: {
        991: {
            gap: 0,
        },
        767: {
            perPage: 1,
            gap: 0
        }
    }
}).mount();
new Splide('._why_buddy_slider', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    gap: 40,

    padding: {
        left: 5,
        right: 150
    },
    autoplay: true,
    interval: 1000,
    updateOnMove: true,
    arrows: true,
    breakpoints: {
        1399: {
            perPage: 2,
            padding: 0
        },
        767: {
            perPage: 1,
            padding: 100
        },
        420: {
            padding: 0,
            perPage: 1,
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
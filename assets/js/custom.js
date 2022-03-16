// CURSOR
gsap.registerPlugin(ScrollTrigger);



let tl = gsap.timeline();


tl.from("._hero_buddy_emo_item", {
        y: 0,
        x: 0,
        opacity: 0,
        duration: .5,
        delay: .2,
        stagger: .2
    })
    .from("._hero_buddy_con", {
        y: 100,
        opacity: 0,
        duration: .6,
        stagger: .2
    });

gsap.to("._hero_buddy_img_element1_img", {
    yPercent: -150,
    ease: "none",
    scrollTrigger: {
        trigger: "._hero_buddy_img_wrap",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true
    },
});

gsap.to("._hero_buddy_img_element2_img", {
    yPercent: -250,
    ease: "none",
    scrollTrigger: {
        trigger: "._hero_buddy_img_wrap",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true
    },
});

gsap.to("._interaction_img", {
    yPercent: -150,
    ease: "none",
    scrollTrigger: {
        trigger: "._inter_buddy_wrapper",
        scrub: true
    },
    stagger: true
});





// Scroll Scenes 
const scenes = gsap.utils.toArray('._app_buddy_content_item');

// maybe use dymanic height for pin/scroll ends?
const height = ((scenes.length - 1) * 100) + '%';

// Scenes Timeline
const pinTl = gsap.timeline({
    scrollTrigger: {
        trigger: "._app_buddy_content_item_container",
        pin: "._app_buddy_content_wrapper",
        start: "center center",
        end: `+=${height}`,
        scrub: true,
    }
});

// Set scenes wrapper to absolute
gsap.set(scenes, {
    position: "absolute",
    top: 0
});

// Loop over scenes
scenes.forEach(function (elem, i) {

    if (i != 0) {
        // Scene Enter animations
        pinTl.from(elem.querySelector('._app_buddy_content_item_right'), {
            autoAlpha: 0,
            translateY: -50
        }, i)

        pinTl.from(elem.querySelector('._app_buddy_content_item_left'), {
            autoAlpha: 0,
            translateY: 50
        }, i)
    }

    // Scene Exit animations
    if (i != scenes.length - 1) {
        pinTl.to(elem.querySelector('._app_buddy_content_item_right'), {
            autoAlpha: 0,
            translateY: 50
        }, i + 0.5)
        pinTl.to(elem.querySelector('._app_buddy_content_item_left'), {
            autoAlpha: 0
        }, i + 0.5)
    }

});
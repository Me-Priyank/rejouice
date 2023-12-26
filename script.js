function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoScroll();


function cursorEffect(){
    var page1Content = document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")

page1Content.addEventListener("mousemove", function(ggh){
    gsap.to(cursor,{
        x:ggh.x-50,
        y:ggh.y-50
    })
})
page1Content.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1Content.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
cursorEffect();


function page2Animation(){

gsap.from(".elem span", {
    y: 250,
    stagger: 1.2,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 97%",
        end: "top 76%",
        // markers: true,
        scrub: 2
    }
});

gsap.from(".page2-content p", {
    y: 250,
    stagger: 1.2,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 97%",
        end: "top 76%",
        // markers: true,
        scrub: 2
    }
});

    
}
page2Animation();


function p4(){
    gsap.registerPlugin(ScrollTrigger);

    // Animation timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start: "top 97%",
        end: "top 76%", // Adjust the end position as needed
        scrub: 2,
        // markers: true // Remove this line in production
      }
    });

    // Add animation to the timeline
    timeline.from("#page4 p", {
      opacity: 0,
      y: 220,
      stagger: 0.2,
     duration: 2,
    });

    // Add class "visible" to the paragraph when the animation completes
    timeline.to("#page4 p", {
      opacity: 1,
      y: 0,
      onComplete: () => {
        document.querySelector("#page4 p").classList.add("visible");
      }
    });
}
p4();

function swiper(){
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true, // Enable infinite loop
        speed: 20000, // Set a slower speed for smooth movement
        autoplay: {
          delay: 0, // No initial delay
          disableOnInteraction: false, // Continue autoplay even when the user interacts with the slider
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
}
swiper();

function loader(){
  var tl = gsap.timeline()

tl.from("#loader h3", {
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
})
tl.to("#loader h3",{
    opacity:0,
    x:-40,
    duration:1,
    stagger:0.1
})
tl.to("#loader",{
    opacity:0
})
tl.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
})
tl.to("#loader",{
    display:"none"
})
}
loader();

function bcursorEffect(){
  var page4Content = document.querySelector(".bc")
var blackCursor = document.querySelector(".black-cursor")

page4Content.addEventListener("mousemove", function(gh){
  gsap.to(blackCursor,{
      x:gh.x-340,
      y:gh.y-90
  })
})
page4Content.addEventListener("mouseenter", function(){
  gsap.to(blackCursor,{
      scale:1,
      opacity:1
  })
})
page4Content.addEventListener("mouseleave", function(){
  gsap.to(blackCursor,{
      scale:0,
      opacity:0
  })
})
}
bcursorEffect();

function page6Animation(){
  gsap.from(" #page6 h1 span", {
    y: 350,
    stagger: 1.9,
    duration: 7,
    scrollTrigger: {
        trigger: "#page6",
        scroller: "#main",
        start: "top 97%",
        end: "top 76%",
        // markers: true,
        scrub: 2,
        delay:40
    }
});
}
page6Animation();

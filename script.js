if (window.innerWidth > 700) {



  if (window.innerWidth > 740) {
    document.addEventListener("DOMContentLoaded", () => {
      const locoScroll = initLocoScroll();

      // Capsule rotation animation
      gsap.to("#right3", {
        scrollTrigger: {
          trigger: "#page2",
          scroller: "#main",
          start: "top center",
          end: "bottom center",
          scrub: 1,
          markers: false,
          onEnter: () => console.log("Capsule rotation started"),
          onLeave: () => console.log("Capsule rotation ended")
        },
        y: -180,
        rotate: -12,
        ease: "none",
        immediateRender: false
      });

    });
  }


  if (window.innerWidth > 740) {
    document.addEventListener("DOMContentLoaded", () => {
      const locoScroll = initLocoScroll();

      // Capsule rotation animation with height and width increase
      gsap.to("#right2", {
        scrollTrigger: {
          trigger: "#page2",
          scroller: "#main",
          start: "top center",
          end: "bottom center",
          scrub: 1,
          markers: false,
          onEnter: () => console.log("Capsule rotation started"),
          onLeave: () => console.log("Capsule rotation ended")
        },
        y: 100, // Keeps the vertical movement as it was
        scale: 1.2,
        rotate: 10, // Increases both width and height by 10%
        ease: "none",
        immediateRender: false
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const locoScroll = initLocoScroll();

    // Animation for #fanta
    gsap.to("#fanta", {
      scrollTrigger: {
        trigger: "#container3D",
        scroller: "#main", // Ensure this matches your Locomotive Scroll container
        start: "top -10%",
        end: "bottom 110%",
        scrub: true,
        markers: false, // Change to true if you want to see markers
        onEnter: () => console.log("Fanta animation started"),
        onLeave: () => console.log("Fanta animation ended"),
      },
      top: "90%",
      left: "-40%",
      rotate: "180deg",
      ease: "none",
      immediateRender: false
    });
  });



  var burgerSidebar = document.getElementsByClassName("sidebar")[0]; // Access the first element
  var burgerTop = document.getElementsByClassName("top");
  var burgerBot = document.getElementsByClassName("bottom");
  var burgerMid = document.getElementsByClassName("middle");
  var sideText = document.getElementsByClassName("sidetext");
  var burgerWhole = document.querySelectorAll(".top, .bottom, .middle");

  var tl = new TimelineMax({ paused: true, reversed: true });

  tl.timeScale(1);
  tl
    .to(burgerTop, 0.5, { y: 11, yoyo: true, ease: Power1.easeInOut }) // Reduced from 0.7 to 0.5
    .to(burgerBot, 0.5, { y: -11, yoyo: true, ease: Power1.easeInOut }, "-=0.5") // Adjusted sync timing
    .to(burgerTop, 0.6, { rotation: 585 }) // Reduced from 0.9 to 0.6
    .to(burgerMid, 0.6, { rotation: 585 }, "-=0.6") // Adjusted sync timing
    .to(burgerBot, 0.6, { rotation: 675 }, "-=0.6") // Adjusted sync timing
    .to(burgerWhole, 0.1, { css: { borderColor: "#000" }, ease: Power1.easeOut }, "-=0.6")
    .to(burgerSidebar, 0.6, { x: -1536, ease: Power1.easeOut }, "-=0.2"); // Reduced from 0.9 to 0.6



  function haminate() {
    tl.reversed() ? tl.play() : tl.reverse();
  }




  // Trigger the hamburger animation on load
  document.addEventListener("DOMContentLoaded", () => {
    // Call the haminate function directly
    if (window.innerWidth > 768) {
      haminate();
    }
    // OR simulate a click on the hamburger menu (if it's an element in your DOM)
    const burgerButton = document.querySelector(".hamburger-button"); // Replace with the correct selector
    if (burgerButton) {
      burgerButton.click();
    }
  });


  // Update JavaScript
  function toggleMobileSidebar() {
    const mobileSidebar = document.querySelector('.mobile-sidebar');
    mobileSidebar.classList.toggle('active');
  }

  // Modified haminate function
  function haminate() {
    if (window.innerWidth > 768) {
      // Desktop animation
      tl.reversed() ? tl.play() : tl.reverse();
    } else {
      // Mobile toggle
      toggleMobileSidebar();
    }
  }

  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', (e) => {
    if (window.innerWidth > 768) return;

    const sidebar = document.querySelector('.mobile-sidebar');
    const burger = document.querySelector('.burger-menu');

    if (!sidebar.contains(e.target) && !burger.contains(e.target)) {
      sidebar.classList.remove('active');
    }
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      document.querySelector('.mobile-sidebar').classList.remove('active');
    }
  });












  function locoScroll() {
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
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    gsap.from(".loader-1", {
      width: 0,
      duration: 1,
      ease: "power2.inOut"
    });

    gsap.from(".loader-2", {
      width: 0,
      delay: 0.9,
      duration: 1.5,
      ease: "power2.inOut"
    });

    gsap.from(".loader-3", {
      width: 0,
      delay: 0.9,
      duration: 2,
      ease: "power2.inOut"
    });

    gsap.from(".loader-4", {
      width: 0,
      delay: 0.9,
      duration: 2.5,
      ease: "power2.inOut"
    });

    gsap.from(".loader-5", {
      width: 0,
      delay: 0.9,
      duration: 1,
      ease: "power2.inOut"
    });

    gsap.from(".loader-6", {
      width: 0,
      delay: 0.9,
      duration: 1,
      ease: "power2.inOut"
    });

    gsap.to(".loader", {
      background: "none",
      delay: 3,
      duration: 0.1
    });



    // Loader 2: Move slightly down to join edges of Loader 1 and Loader 3
    gsap.to(".loader-2", {
      rotate: -90,
      x: 170,
      y: 120, // Adjusted to move slightly down
      duration: 0.5,
      delay: 4,
      // width: "calc(50% + 10px)", 
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "10px"
    });

    // Loader 3: Rotate and increase width
    gsap.to(".loader-3", {
      rotate: -90,
      x: 50,
      y: -50,
      duration: 0.5,
      delay: 4,
      borderTopRightRadius: "10px",
      borderBottomRightRadius: "10px",
      borderBottomLeftRadius: "10px"
    });

    // Loader 4: Join its left border to the middle of Loader 3 and increase width by 10px
    gsap.to(".loader-4", {
      x: -75, // Adjust position to align left border
      y: -60,
      duration: 0.5,
      delay: 4,
      borderTopRightRadius: "10px",

    });

    // Loader 5: Move slightly down to meet bottom-right corner of Loader 4
    gsap.to(".loader-5", {
      x: -75,
      y: -10, // Adjust position for alignment
      duration: 0.5,
      delay: 4,
      borderTopRightRadius: "10px",
      borderBottomLeftRadius: "10px",

    });

    // Loader 6: Move exactly below Loader 5
    gsap.to(".loader-6", {
      width: 120,
      rotate: 90,
      x: -160, // Align horizontally with Loader 5
      y: 75, // Position below Loader 5
      duration: 0.5,
      delay: 4,
      borderTopRightRadius: "10px",
      borderBottomRightRadius: "10px"
    });

    // Loader 1: Rotate and apply border-radius
    gsap.to(".loader-1", {
      rotate: 90,
      x: 185,
      y: 55,
      // width: "calc(80% + 120px)", 
      duration: 0.5,
      delay: 4,
      borderTopLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      borderBottomLeftRadius: "10px"
    });

    // Final transformations for the loaders
    gsap.to(".loader", {
      scale: 40,
      duration: 1,
      delay: 5,
      ease: "power2.inOut"
    });

    gsap.to(".loader", {
      rotate: -45,
      y: 500,
      x: 2900,
      duration: 1,
      delay: 5,
      ease: "power2.inOut"
    });

    gsap.to(".loading-screen", {
      opacity: 0,
      duration: 0.5,
      delay: 6.5,
      ease: "power1.inOut"
    });

    gsap.to(".loading-screen", {
      display: "none",
      duration: 0.5,
      delay: 6.5,
      ease: "power1.inOut"
    });



    gsap.to("h1", 1.5, {
      delay: 5,
      y: -80,
      ease: "power4.inOut",
      stagger: {
        amount: 0.1
      }
    });





    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();




  }
  locoScroll();








  function cursorEffect() {
    const cursor = document.querySelector("#cursor");
    if (!cursor) return;

    function updateCursor(event) {
      // Use pageX and pageY instead of clientX/Y + scrollY
      // This automatically accounts for scroll position
      gsap.to(cursor, {
        x: event.pageX - cursor.offsetWidth / 2,
        y: event.pageY - cursor.offsetHeight / 2,
        duration: 0.1,
        ease: "none"
      });
    }

    // Listen to the document instead of a specific element
    document.addEventListener("mousemove", updateCursor);

    const page1Content = document.querySelector("#page1");
    if (page1Content) {
      page1Content.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          duration: 0.3
        });
      });

      page1Content.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
          scale: 0,
          opacity: 0,
          duration: 0.3
        });
      });
    }
  }

  // Initialize the cursor effect
  cursorEffect();

  function cursorEffect2() {
    const page2Content = document.querySelector("#page2");
    const cursor = document.querySelector("#cursor2");

    if (!page2Content || !cursor) return;

    // Get the cursor's dimensions to calculate center offset
    const cursorRect = cursor.getBoundingClientRect();
    const cursorOffsetX = cursorRect.width / 2;
    const cursorOffsetY = cursorRect.height / 2;

    page2Content.addEventListener("mousemove", function (event) {
      // Get the container's position
      const containerRect = page2Content.getBoundingClientRect();

      // Calculate the cursor position relative to the container
      // and subtract half the cursor size to center it on the mouse
      const x = event.clientX - containerRect.left;
      const y = event.clientY - containerRect.top - cursorOffsetY;

      gsap.to(cursor, {
        x: x - 770,
        y: y,
        duration: 0.2,
        ease: "power2.out"
      });
    });

    page2Content.addEventListener("mouseenter", function () {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3
      });
    });

    page2Content.addEventListener("mouseleave", function () {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
        duration: 0.3
      });
    });
  }

  // Initialize the cursor effect
  cursorEffect2();




  function page2Animation() {
    const isMobile = window.innerWidth <= 768;

    gsap.from(".elem span", {
      y: isMobile ? 100 : 250,
      stagger: isMobile ? 0.8 : 1.2,
      duration: isMobile ? 0.3 : 0.5,
      scrollTrigger: {
        trigger: "#page2",
        scroller: isMobile ? window : "#main",
        start: "top 97%",
        end: "top 76%",
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

  if (window.innerWidth > 740) {
    page2Animation
  }

  function p4() {
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

  if (window.innerWidth > 740) {
    p4();
  }

  function swiper() {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      // Initialize Swiper only for desktop
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
  }

  swiper();

  // Reinitialize Swiper on window resize (if needed)
  window.addEventListener('resize', function () {
    swiper();
  });

  // function loader(){
  // var tl = gsap.timeline()

  // tl.from("#loader h3", {
  //   x:40,
  //   opacity:0,
  //   duration:1,
  //   stagger:0.1
  // })
  // tl.to("#loader h3",{
  //   opacity:0,
  //   x:-40,
  //   duration:1,
  //   stagger:0.1
  // })
  // tl.to("#loader",{
  //   opacity:0
  // })
  // tl.from("#page1-content h1 span",{
  //   y:100,
  //   opacity:0,
  //   stagger:0.1,
  //   duration:0.5,
  //   delay:-0.5
  // })
  // tl.to("#loader",{
  //   display:"none"
  // })
  // }
  // loader();



  function page6Animation() {
    gsap.from(" #page6  span", {
      y: 350,
      stagger: 3.9,
      duration: 9,
      scrollTrigger: {
        trigger: "#page6",
        scroller: "#main",
        start: "top 57%",
        end: "bottom bottom",
        // markers: true,
        scrub: 2,
        delay: 40
      }
    });
  }

  if (window.innerWidth > 768) {
    page6Animation();
  }

  document.querySelector('.btn-6').addEventListener('mouseenter', function (e) {
    const span = this.querySelector('span');
    const rect = this.getBoundingClientRect();

    // Calculate the position of the cursor within the button
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set the position of the circle
    span.style.left = `${x}px`;
    span.style.top = `${y}px`;

    // Trigger the filling animation
    span.style.width = '250%';
    span.style.height = '250%';
  });

  document.querySelector('.btn-6').addEventListener('mouseleave', function (e) {
    const span = this.querySelector('span');
    const rect = this.getBoundingClientRect();

    // Calculate the position of the cursor within the button
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set the position of the circle
    span.style.left = `${x}px`;
    span.style.top = `${y}px`;

    // Reset the size of the circle
    span.style.width = '0';
    span.style.height = '0';
  });


  const menuBtn = document.querySelector(".menu-div");
  const exitBtn = document.querySelector(".exit");

  let t1 = gsap.timeline({ paused: true });
  t1.to(".menu", { opacity: 1, duration: 1, top: 0, ease: Power2.easeInOut });
  t1.to(
    ".navV",
    {
      opacity: 1,
      marginBottom: 0,
      duration: 1,
      ease: Power2.easeInOut,
      stagger: 0.3,
    },
    ">-0.5"
  );

  menuBtn.addEventListener("click", () => {
    t1.play().timeScale(1);
  });

  exitBtn.addEventListener("click", () => {
    t1.timeScale(2.5);
    t1.reverse();
  });








  function initLocoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        smartphone: {
          smooth: false, // Disable smooth scroll on mobile
          breakpoint: 768
        },
        tablet: {
          smooth: false, // Disable smooth scroll on tablet
          breakpoint: 1024
        }
      });

      // Update ScrollTrigger on scroll
      locoScroll.on("scroll", ScrollTrigger.update);

      // Sync ScrollTrigger with Locomotive
      ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
      });

      // Refresh on window resize
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      ScrollTrigger.refresh();
    } else {
      // Enable basic scroll animations for mobile
      ScrollTrigger.defaults({ scroller: window });
    }
  }

  // Initialize animations after DOM is loaded
  const buttons = document.querySelectorAll(".capsule2btn");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "about.html";
    });
  });








  // Register GSAP Plugin
  gsap.registerPlugin(ScrollTrigger);

  // Create a timeline for the container3D image animation
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#container3D",
      start: "top center", // Start when the top of container3D hits center
      end: "bottom center", // End when bottom hits center
      scrub: 1, // Smooth scrubbing effect
      markers: false // Set to true for debugging
    }
  });

  // Add animation sequence
  tl3.fromTo("#container3D img",
    {
      x: -100, // Start position (left)
      scale: 1
    },
    {
      x: 100, // End position (right)
      scale: 1.2,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true, // Makes it go back and forth
      repeat: -1 // Infinite repeat
    }
  );

  // Add a second timeline for vertical movement
  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#container3D",
      start: "top center",
      end: "bottom center",
      scrub: 1,
      markers: true
    }
  });

  // Add subtle vertical movement
  tl4.to("#container3D img", {
    y: 50,
    duration: 1,
    ease: "none"
  });

  // Update container3D styles
  const container3D = document.querySelector("#container3D");
  if (container3D) {
    container3D.style.overflow = "hidden";
    container3D.style.position = "relative";
  }

  // Update image styles
  const image = document.querySelector("#container3D img");
  if (image) {
    image.style.position = "absolute";
    image.style.left = "50%";
    image.style.top = "50%";
    image.style.transform = "translate(-50%, -50%)";
  }

  ////


  function initResponsiveAnimations() {
    // Check if we're on mobile
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // Adjust page2 animations for mobile




      // Adjust fanta bottle animation for mobile
      gsap.to("#fanta", {
        scrollTrigger: {
          trigger: "#container3D",
          scroller: window,
          start: "top -10%",
          end: "bottom 110%",
          scrub: true,
          markers: false
        },
        top: "70%", // Adjusted position for mobile
        left: "-20%", // Adjusted position for mobile
        rotate: "90deg",
        ease: "none",
        immediateRender: false
      });

      // Adjust text animations for mobile
      gsap.from(".elem span", {
        y: 100,
        stagger: 0.8,
        duration: 0.3,
        scrollTrigger: {
          trigger: "#page2",
          scroller: window, // Use window as the scroller on mobile
          start: "top 97%",
          end: "top 76%",
          scrub: 1
        }
      });

      // Adjust other animations similarly
      gsap.from(".page2-content p", {
        y: 250,
        stagger: 1.2,
        duration: 1,
        scrollTrigger: {
          trigger: "#page2",
          scroller: window, // Use window as the scroller on mobile
          start: "top 97%",
          end: "top 76%",
          scrub: 2
        }
      });

      // Adjust footer animations for mobile
      gsap.from("#page6 h1 span", {
        y: 150, // Reduced distance
        stagger: 2, // Faster stagger
        duration: 4,
        scrollTrigger: {
          trigger: "#page6",
          scroller: window,
          start: "top 80%",
          end: "bottom bottom",
          scrub: 1
        }
      });

      // Adjust loader animations for mobile
      const loaderTimeline = gsap.timeline();
      loaderTimeline
        .to(".loader", {
          scale: 20, // Reduced scale for mobile
          duration: 1,
          delay: 5,
          ease: "power2.inOut"
        })
        .to(".loader", {
          rotate: -45,
          y: 300,
          x: 1500,
          duration: 1,
          delay: 5,
          ease: "power2.inOut"
        });
    }
  }

  // Add window resize listener to handle orientation changes
  let resizeTimeout;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      initResponsiveAnimations();
    }, 250);
  });

  // Initialize responsive animations on page load
  document.addEventListener('DOMContentLoaded', function () {
    initResponsiveAnimations();
  });

  // Add to script.js
  function enableMobileTouch() {
    if (window.innerWidth <= 768) {
      document.body.style.touchAction = "pan-y";
      document.querySelectorAll('[data-scroll]').forEach(el => {
        el.style.touchAction = "pan-y";
      });
    }
  }

  // Initialize on load and resize
  document.addEventListener("DOMContentLoaded", function () {
    initResponsiveAnimations();
  });

  window.addEventListener('resize', function () {
    initResponsiveAnimations();
  });

}


var burgerSidebar = document.getElementsByClassName("sidebar")[0]; // Access the first element
var burgerTop = document.getElementsByClassName("top");
var burgerBot = document.getElementsByClassName("bottom");
var burgerMid = document.getElementsByClassName("middle");
var sideText = document.getElementsByClassName("sidetext");
var burgerWhole = document.querySelectorAll(".top, .bottom, .middle");

var tl = new TimelineMax({ paused: true, reversed: true });

tl.timeScale(1);
tl
  .to(burgerTop, 0.5, { y: 11, yoyo: true, ease: Power1.easeInOut }) // Reduced from 0.7 to 0.5
  .to(burgerBot, 0.5, { y: -11, yoyo: true, ease: Power1.easeInOut }, "-=0.5") // Adjusted sync timing
  .to(burgerTop, 0.6, { rotation: 585 }) // Reduced from 0.9 to 0.6
  .to(burgerMid, 0.6, { rotation: 585 }, "-=0.6") // Adjusted sync timing
  .to(burgerBot, 0.6, { rotation: 675 }, "-=0.6") // Adjusted sync timing
  .to(burgerWhole, 0.1, { css: { borderColor: "#000" }, ease: Power1.easeOut }, "-=0.6")
  .to(burgerSidebar, 0.6, { x: -1536, ease: Power1.easeOut }, "-=0.2"); // Reduced from 0.9 to 0.6



function haminate() {
  tl.reversed() ? tl.play() : tl.reverse();
}




// Trigger the hamburger animation on load
document.addEventListener("DOMContentLoaded", () => {
  // Call the haminate function directly
  if (window.innerWidth > 768) {
    haminate();
  }
  // OR simulate a click on the hamburger menu (if it's an element in your DOM)
  const burgerButton = document.querySelector(".hamburger-button"); // Replace with the correct selector
  if (burgerButton) {
    burgerButton.click();
  }
});


// Update JavaScript
function toggleMobileSidebar() {
  const mobileSidebar = document.querySelector('.mobile-sidebar');
  mobileSidebar.classList.toggle('active');
}

// Modified haminate function
function haminate() {
  if (window.innerWidth > 768) {
    // Desktop animation
    tl.reversed() ? tl.play() : tl.reverse();
  } else {
    // Mobile toggle
    toggleMobileSidebar();
  }
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
  if (window.innerWidth > 768) return;

  const sidebar = document.querySelector('.mobile-sidebar');
  const burger = document.querySelector('.burger-menu');

  if (!sidebar.contains(e.target) && !burger.contains(e.target)) {
    sidebar.classList.remove('active');
  }
});

// Handle window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    document.querySelector('.mobile-sidebar').classList.remove('active');
  }
});

// mobile loader

if (window.innerWidth < 770) {
  // Function for Mobile Loader Animation
  function mobileLoader() {
    var tl = gsap.timeline();

    // Animate h2 and img elements
    tl.from("#mobile-loader h2, #mobile-loader img", {
      x: 80,
      opacity: 0,
      duration: 2,
      stagger: 0.1,
    });

    // Make h2 disappear immediately after moving to x:0
    tl.to("#mobile-loader h2", {
      opacity: 0,
      duration: 1,
    });

    // Move img from x:0 to x:-40 and fade it out
    tl.to("#mobile-loader img", {
      x: -40,
      opacity: 1,
      rotate: '29deg',
      scale: 2.5,
      duration: 2,
    });

    // Fade out the loader
    tl.to("#mobile-loader", {
      opacity: 0,
    });

    // Animate page1-content h1 span
    tl.from("#page1-content h1 span", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      delay: -0.5,
    });

    // Hide the loader after animation
    tl.to("#mobile-loader", {
      display: "none",
    });
  }

  // Function for Desktop Loader Animation
  function desktopLoader() {
    gsap.from(".loader-1", {
      width: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    gsap.from(".loader-2", {
      width: 0,
      delay: 0.9,
      duration: 1.5,
      ease: "power2.inOut",
    });

    gsap.from(".loader-3", {
      width: 0,
      delay: 0.9,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.from(".loader-4", {
      width: 0,
      delay: 0.9,
      duration: 2.5,
      ease: "power2.inOut",
    });

    gsap.from(".loader-5", {
      width: 0,
      delay: 0.9,
      duration: 1,
      ease: "power2.inOut",
    });

    gsap.from(".loader-6", {
      width: 0,
      delay: 0.9,
      duration: 1,
      ease: "power2.inOut",
    });

    gsap.to(".loader", {
      background: "none",
      delay: 3,
      duration: 0.1,
    });

    gsap.to(".loader", {
      scale: 40,
      duration: 1,
      delay: 5,
      ease: "power2.inOut",
    });

    gsap.to(".loader", {
      rotate: -45,
      y: 500,
      x: 2900,
      duration: 1,
      delay: 5,
      ease: "power2.inOut",
    });

    gsap.to(".loading-screen", {
      opacity: 0,
      duration: 0.5,
      delay: 6.5,
      ease: "power1.inOut",
    });

    gsap.to(".loading-screen", {
      display: "none",
      duration: 0.5,
      delay: 6.5,
      ease: "power1.inOut",
    });
  }

  // Initialize Loader Based on Screen Size
  function initLoader() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // Apply Mobile Loader Animation
      mobileLoader();
    } else {
      // Apply Desktop Loader Animation
      desktopLoader();
    }
  }

  // Call the Loader Function on Page Load
  document.addEventListener("DOMContentLoaded", () => {
    initLoader();
  });

  // Reinitialize Loader on Window Resize
  window.addEventListener("resize", () => {
    initLoader();
  });
}
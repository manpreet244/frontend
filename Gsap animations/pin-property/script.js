// Ensure GSAP and ScrollTrigger are imported and registered
gsap.registerPlugin(ScrollTrigger);
gsap.to("#page2 img", {
    width: "100%",
    scrollTrigger: {
      trigger: "#page2", // The element that triggers the scroll
      scroller: "body", // The element that is being scrolled (usually "body" or a specific container)
      markers: true, // Display markers for debugging (remove in production)
      start: "top top", // When the top of the trigger element hits the top of the viewport
      end: "bottom top", // When the bottom of the trigger element hits the top of the viewport
      pin: true, // Pin the trigger element in place during the animation
      scrub: 2, // Smoothly animate over the scroll duration (2 seconds delay)
    }
  });
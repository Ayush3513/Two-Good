function vidCrsr(){
    let play = document.querySelector(".vid-container .play")
let vidContainer = document.querySelector(".vid-container")
vidContainer.getBoundingClientRect().top
vidContainer.addEventListener("mousemove",function(dets){
    gsap.to(".vid-container .play",{
    scale:1,
    opacity:1,
    left:dets.x - 60,
    top:dets.y -60
    })
})
vidContainer.addEventListener("mouseenter",function(dets){
    gsap.to(".vid-container .play",{
    scale:1,
    opacity:1,
    })
})
vidContainer.addEventListener("mouseleave",function(dets){
    gsap.to(".vid-container .play",{
    scale:0,
    opacity:0,
    
    })
})

}
locoScroll()


gsap.to(".nav1 svg",{
  
  transform: "translatey(-100%)",
  scrollTrigger:{
    trigger:".nav1 svg",
    scroller:".main",
    start:"top top",
    end:"top top",
    scrub:1
  }

})
gsap.to(".nav2 a",{
  opacity:0,
  scale:0,
  scrollTrigger:{
    trigger:".nav2 a",
    scroller:".main",
    start:"top top",
    end:"top top",
    scrub:1
  }
})

function loadingAnime(){
    
gsap.from(".page1 h1",{
    y:300,
    duration:0.6,
    stagger:0.4,
    ease:Power1,
    opacity:0
})

gsap.from(".page1 .vid-container",{
    scale:0.7,
    duration:1,
    ease:Power1,
    opacity:0
})








}
function locoScroll(){
    
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}

function sheryJs(){
  

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet(".shop" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.imageMasker(".shop" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: false,
  text: "Shery",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


}




loadingAnime()
vidCrsr()
sheryJs()

document.addEventListener('DOMContentLoaded', () => {
  const glitchElement = document.querySelector('.glitch');
  
  function randomGlitch() {
    const glitchDuration = Math.random() * 200 + 50;
    glitchElement.style.animation = 'none';
    void glitchElement.offsetWidth; // Trigger reflow
    glitchElement.style.animation = `glitch-anim ${glitchDuration}ms infinite linear alternate-reverse, glitch-anim-2 ${glitchDuration * 1.2}ms infinite linear alternate-reverse`;
    
    setTimeout(() => {
      glitchElement.style.animation = '';
    }, glitchDuration);
  }

  setInterval(randomGlitch, 3000);

  const neonButtons = document.querySelectorAll('.btn-neon');
  
  neonButtons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      button.style.setProperty('--x', `${x}px`);
      button.style.setProperty('--y', `${y}px`);
    });
  });
});
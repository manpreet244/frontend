var tl = gsap.timeline();

tl.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:0.4
})

tl.from("#main h1",{
    x:-500,
    opacity:0,//kyunki -500 pe invisible sa hi rkhna hai
    duration:0.8,
    stagger:0.2
})
tl.from("img",{
    x:100,
    duration:0.5,
    rotate:45,
    opacity:0,//initially
    stagger:0.6
})
//stagger means har h3 ek ek second bad ayga
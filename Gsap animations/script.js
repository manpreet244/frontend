//initial to final -->gsap.yo
//final to initial -->gsap.from
// gsap.to("#box",{
//     x:1000,
//     duration :2,
//     rotate:360,
//     backgroundColor:"blue",
//     delay:1
//     })

var tl = gsap.timeline();
tl.to("#box1",{
    x:1200,
    rotate:360,
    scale:0.5,
    duration:2,
    
})
tl.to("#box2",{
    x:1200,
    rotate:360,
    scale:0.5,
    duration:2,
    
})
tl.to("#box3",{
    x:1200,
    rotate:360,
    scale:0.5,
    duration:2,
    
})
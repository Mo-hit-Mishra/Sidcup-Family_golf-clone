var crsr = document.querySelector("#cursor")
var crsr_bg = document.querySelector("#cursor_bg")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +"px"
    crsr.style.top = dets.y+"px"
    crsr_bg.style.left = dets.x + 30 - 150 +"px"
    crsr_bg.style.top = dets.y - 150 +"px"
})

var h4all = document.querySelectorAll("#nav h4")
var h2all = document.querySelectorAll("#page4 #box h2")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid white"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #c8fc39"
        crsr.style.backgroundColor = "#c8fc39"
    })
})
h2all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid white"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #c8fc39"
        crsr.style.backgroundColor = "#c8fc39"
    })
})



gsap.to("#nav",{
    backgroundColor: "black",
    duration: 0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroll:"body",
        start:"top -15%",
        end:"top -17%",
        // markers:true,
        scrub:1
    },
});

gsap.to("#main",{
    backgroundColor: "black",
    // duration:0.5,
    scrollTrigger:{
        trigger:"#main",
        scroll:"body",
        scrub:1,
        start:"top -25%",
        end: "top -70%",
        // markers:true
    },
});

gsap.from("#about_us img,#about_text",{
    y:60,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about_us",
        scroll:"body",
        scrub:3,
        start: "top 60%",
        end:"top 55%"
    }
})

gsap.from("#card1",{
    x:-100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#card",
        scroll:"body",
        scrub:3,
        start:"top 55%",
        end:"top 50%",
    }
})

gsap.from("#card2",{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#card",
        scroll:"body",
        scrub:3,
        start:"top 55%",
        end:"top 50%",
    }
})

gsap.from("#card3",{
    x:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#card",
        scroll:"body",
        scrub:3,
        start:"top 55%",
        end:"top 50%",
    }
})

gsap.from("#green_div",{
    scale:0.5,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#green_div",
        scroll:"body",
        scrub:3,
        start:"top 75%",
        end:"top 65%",
    }
})

gsap.from("#colon1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#page3",
        scroll:"body",
        scrub:4,
        start:"top 60%",
        end:"top 45%",
    }
})

gsap.from("#colon2",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#page3",
        scroll:"body",
        scrub:4,
        start:"top 60%",
        end:"top 45%",
    }
})

gsap.from("#page4 h1",{
    y:100,
    // duration:1,
    scrollTrigger:{
        trigger:"#page4",
        scroll:"body",
        scrub: 4,
        start:"top 90%",
        end:"top 85%",
        // markers:true
    }
})
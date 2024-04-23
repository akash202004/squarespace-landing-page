var tl = gsap.timeline()

tl.from("#nav>img, #nav a, #nav h1, #nav button", {
    y: -100,
    duration: .9,
    stagger: 0.1,
})

gsap.from("#screen>h1", {
    y: 100,
    duration: .8,
    delay: 1,
    opacity: 0,
    stagger: 0.2
})

gsap.from("#one", {
    x: -300,
    delay: 1.2,
    duration: .7
})

gsap.from("#two", {
    x: -600,
    delay: 1.3,
    duration: .7
})

gsap.from("#three", {
    x: -400,
    delay: 1.5,
    duration: .7,
    opacity: 0
})

gsap.from("#four", {
    x: -400,
    delay: 1.6,
    duration: .7,
    opacity: 0
})

gsap.from("#footer-one", {
    x: -200, 
    delay: 1.6,
    duration: .8
})

gsap.from("#footer-two", {
    x: -200, 
    delay: 1.6,
    duration: .8,
    opacity: 0
})

gsap.from("#footer-three", {
    x: -200, 
    delay: 1.6,
    duration: .8,
    opacity: 0
})

gsap.to("#footer-two", {
    y: 20, 
    repeat: -1,
    delay: 2.4,
    yoyo: true,
    duartion: .7
})

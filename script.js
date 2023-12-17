var page1Content = document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")

page1Content.addEventListener("mousemove", function(ggh){
    gsap.to(cursor,{
        x:ggh.x-50,
        y:ggh.y-50
    })
})
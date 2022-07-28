const navToggle = document.querySelector(".toggle");
const nav = document.querySelector("nav")
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const slider = document.querySelectorAll(".circle");
const feedBacks = document.querySelectorAll(".feedback")

// console.log(feedBacks[0])

const navClick = () =>{
    if(open.classList != "nav-toggle"){
        open.classList.add("nav-toggle");
        close.classList.remove("nav-toggle")
        nav.classList.remove("nav-toggle");
    }
    else{
        open.classList.remove("nav-toggle");
        close.classList.add("nav-toggle");
        nav.classList.add("nav-toggle");
    }
}
navToggle.addEventListener("click", navClick)

const sliderClick = (e) =>{
    slider.forEach((slide) =>{
        slide.classList.remove('active')
    })
    e.currentTarget.classList.add("active")
  
    const sliderId = e.currentTarget.getAttribute("data-id")    


    feedBacks.forEach((feedBack) =>{
        feedBack.classList.remove("active")
        const feedBackId = feedBack.getAttribute("data-id")
        if(sliderId == feedBackId  && window.innerWidth < 1440){
            feedBack.classList.add("active")
        }
    })
   
}

slider.forEach((slide) =>{
    slide.addEventListener("click", sliderClick)
})




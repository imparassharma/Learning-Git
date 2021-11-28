/*************************************NAV-BTN-HIGHLIGHTER********************************************************/

let navigationLinks = document.querySelector('.links');
var children = navigationLinks.children;
console.log(children)

var arr = Array.from(children);

arr.forEach(function(e){
   e.addEventListener("click",function(){
       e.classList.add("active");
       arr.forEach(function(o){
           if(o!=e){
               o.classList.remove("active");
           }
       })
   })
})


/**************************************CAROUSEL-BUTTONS********************************************/
const slider_btn = document.querySelectorAll(".circle");
console.log(slider_btn)
var circles = Array.from(slider_btn);


slider_btn.forEach(function(btn){
    btn.addEventListener("click",function(){
            btn.style.backgroundColor = "blue";                        
            slider_btn.forEach(function(btn2){
                if(btn2!=btn){
                    btn2.style.backgroundColor = "transparent";
                }
            })
        });
});

const slider_btn2 = document.querySelectorAll(".circle2");
const track2 = document.querySelector(".right-sect");
const testimonials = Array.from(track2.children);
console.log(testimonials)
const carousel_btns2 = document.querySelector(".slider-control2");
const dots2 = Array.from(carousel_btns2.children);

slider_btn2.forEach(function(btn){
    btn.addEventListener("click",function(e){ 
            btn.style.backgroundColor = "white";
            slider_btn2.forEach(function(btn2){
                if(btn2!=btn){
                    btn2.style.backgroundColor = "transparent";
                }
            })
            const target_btn2 = e.target;
            const target_index2 = dots2.findIndex(dot => dot === target_btn2);
            testimonials.forEach(function(testimonial){
                current = "testimonial" + (target_index2+1) + " testimonial";
                if(testimonial.className == current){
                    testimonial.classList.add("show");
                }
                else{
                    testimonial.classList.remove("show");
                }
            })
    });
});


/*********************************************CAROUSEL********************************************/


const track = document.querySelector(".slider-section");
const slides = Array.from(track.children);
const carousel_btns = document.querySelector(".slider-control");
const dots = Array.from(carousel_btns.children);

const slides_width = slides[0].getBoundingClientRect().width;





slider_btn.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const target_btn = e.target;
        const target_index = dots.findIndex(dot => dot === target_btn);
       
        console.log(target_index)
        track.style.transform = `translateX(-${(target_index+1) * 10}%)`;
        track.addEventListener('transitionend',function(){
            track.appendChild(track.firstElementChild);
        
            track.style.transition = "none";
            track.style.transform = `translate(0)`;
        
            setTimeout(function(){
                track.style.transition = "all 0.4s";
            })
        })
        
    })
})




/*********************************************Mobile-nav********************************************/


const nav_btn = document.getElementById("nav-btn");
const mobile_nav = document.querySelector(".mobile-nav");

nav_btn.addEventListener("click",function(){
    mobile_nav.classList.toggle("display");
    if(mobile_nav.className == "mobile-nav display"){
    document.getElementById("nav-btn").src = "images/icon-close.svg";
    }
    else{
        document.getElementById("nav-btn").src = "images/icon-hamburger.svg";
    }
})






















/*carousel_btns.addEventListener("click",function(e){
    const target_btn = e.target;
    const target_index = dots.findIndex(dot => dot === target_btn);
    slides.forEach((slide,index)=>{
        slide.style.transform = `translateX(-${target_index * 100}%)`;
    }) 

    track.style.transform = 'translateX(-20%)'






})
}) */
const sections = document.querySelectorAll(".split");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.querySelector(".image").style.transform="translateX(0)";
entry.target.querySelector(".text").style.transform="translateX(0)";
entry.target.querySelector(".image").style.opacity="1";
entry.target.querySelector(".text").style.opacity="1";

}

});

},{threshold:0.3});

sections.forEach(section=>{

const image = section.querySelector(".image");
const text = section.querySelector(".text");

if(section.classList.contains("reverse")){

image.style.transform="translateX(100px)";
text.style.transform="translateX(-100px)";

}else{

image.style.transform="translateX(-100px)";
text.style.transform="translateX(100px)";

}

image.style.opacity="0";
text.style.opacity="0";

image.style.transition="1s";
text.style.transition="1s";

observer.observe(section);

});
/* NAVBAR SCROLL EFFECT */

window.addEventListener("scroll",function(){

const nav=document.querySelector("nav");

if(window.scrollY>50){
nav.classList.add("scrolled");
}else{
nav.classList.remove("scrolled");
}

});
/* SMOOTH SCROLL */

const lenis = new Lenis({
duration: 1.2,
smooth: true
})

function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
/* HERO LOAD ANIMATION */

window.addEventListener("load", () => {

const heroImg = document.querySelector(".hero img");
const heroText = document.querySelector(".hero-text");

setTimeout(() => {

heroImg.style.transform = "scale(1)";
heroImg.style.opacity = "0.4";

heroText.style.transform = "translateY(0)";
heroText.style.opacity = "1";

},200);

});
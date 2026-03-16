const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.onclick = () => {
nav.style.display = nav.style.display === "flex" ? "none" : "flex";
};

ScrollReveal().reveal('.hero-content',{
duration:1000,
origin:'bottom',
distance:'50px'
});

ScrollReveal().reveal('.food-card',{
interval:200,
origin:'bottom'
});

ScrollReveal().reveal('.gallery-grid img',{
interval:150,
scale:0.9
});

ScrollReveal().reveal('.menu-card',{
interval:100,
origin:'bottom'
});

gsap.from(".hero h1",{y:-80,opacity:0,duration:1});
gsap.from(".hero p",{opacity:0,delay:.5,duration:1});
gsap.from(".btn",{opacity:0,delay:.8,stagger:.2});
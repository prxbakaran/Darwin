// ===============================
// DARWIN NEET ACADEMY
// Premium JavaScript
// ===============================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Navbar Background on Scroll

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        nav.style.background = "rgba(53,27,110,.95)";
        nav.style.boxShadow = "0 8px 30px rgba(0,0,0,.25)";

    } else {

        nav.style.background = "rgba(78,32,145,.35)";
        nav.style.boxShadow = "none";

    }

});


// Reveal Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section,.card,.stats div").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


// Counter Animation

const counters = document.querySelectorAll(".stats h2");

let started = false;

window.addEventListener("scroll",()=>{

if(started) return;

const section = document.querySelector(".stats");

if(window.scrollY > section.offsetTop-400){

started=true;

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

let count=0;

const speed=Math.max(10,Math.floor(target/80));

const update=()=>{

count+=speed;

if(count>=target){

counter.innerText=target+"+";

}else{

counter.innerText=count+"+";

requestAnimationFrame(update);

}

};

update();

});

}

});


// Hero Fade

const hero=document.querySelector(".hero-content");

window.addEventListener("scroll",()=>{

hero.style.opacity=1-window.scrollY/700;

hero.style.transform=`translateY(${window.scrollY*0.25}px)`;

});


// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`
position:fixed;
right:25px;
bottom:25px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#FFC72C;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 10px 20px rgba(0,0,0,.2);
z-index:999;
`;

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

const menuBtn=document.getElementById("menuBtn");
const navMenu=document.getElementById("navMenu");

menuBtn.addEventListener("click",()=>{
  navMenu.classList.toggle("active");
});

document.querySelectorAll("#navMenu a").forEach(link=>{
  link.addEventListener("click",()=>navMenu.classList.remove("active"));
});

const reveal=document.querySelectorAll(".reveal");

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});

reveal.forEach(item=>observer.observe(item));

/* Scroll-based reveal: social icons/cards gently grow into view */
const animatedItems = document.querySelectorAll(".social-float a, .skill-cards>div, .project-preview");
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("in-view");
  });
},{threshold:0.28});
animatedItems.forEach(el=>revealObserver.observe(el));

window.addEventListener("DOMContentLoaded", ()=>{
     const navLinks = document.querySelectorAll(".navlink");
     navLinks[0].classList.add("active-navlink");
})

window.addEventListener("hashchange", ()=>{
     const activePage = window.location.hash;
     const navLinks = document.querySelectorAll(".navlink");

     navLinks.forEach(element => {
          // console.log(element.hash)
          if(element.hash === activePage){
               element.classList.add("active-navlink");
               console.log(element)
          }else{
               element.classList.remove("active-navlink");
          }
     });
  
})


const cursor = document.querySelector(".cursor");

document.addEventListener("mouseenter", (e)=>{

     cursor.style.display = "block";
})

document.addEventListener("mousemove", (e)=>{
     let x = e.clientX;
     let y = e.clientY;

     cursor.style.left = x + "px";
     cursor.style.top = y + "px";

})

document.addEventListener("mouseleave", (e)=>{
     cursor.style.display = "none";
})




// console.log("FEfwe")
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

// console.log("FEfwe")
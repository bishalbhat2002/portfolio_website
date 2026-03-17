import { projectsData } from "./data.js";
import { toolsData } from "./data.js";


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



// console.log(projectsData)

// Dymanically adding projects to the projects section
const projectsContainer = document.getElementById("project-showcase-container");

projectsData.forEach(project=>(
     projectsContainer.innerHTML += `<div class="project-card">
                            <div class="project-image-container">
                                <img src="${project.thumbnail}" alt="Project Image">
                            </div>
                            <div class="project-description">
                                <h3>${project?.name}</h3>
                                <p>${project?.description}</p>
                            </div>
                            <div class="project-tags-container">
                              ${
                                   project.tags?.map(tag=>(
                                        `<span class="project-tag">${tag}</span>`
                                   ))
                              }
                            </div>
                            <div class="project-options">
                              ${project?.links?.yt ? `<a href="${project.links.yt}" target="_blank">Demo video</a>` : ""}
                              ${project?.links?.website ? `<a href="${project.links.website}" target="_blank">Website</a>` : ""}
                              ${project?.links?.code ? `<a href="${project.links.code}" target="_blank">Code</a>` : ""}
                            </div>
                        </div>`
))


// Dynamically adding tools to the tools section
const sliderContainer = document.getElementById("slider-container");

const addSliderItems = (tools)=>(
          sliderContainer.innerHTML += `<ul class="slider">
                         ${tools.map(tool=>(
                              `<li>${tool}</li>`
                         ))} 
                         ${tools.map(tool=>(
                              `<li>${tool}</li>`
                         ))}
                         ${tools.map(tool=>(
                              `<li>${tool}</li>`
                         ))}
                         </ul>`
     )

     addSliderItems(toolsData);
     addSliderItems(toolsData);
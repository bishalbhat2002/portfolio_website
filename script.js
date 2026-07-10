import { projectsData } from "./data.js";
import { toolsData } from "./data.js";

/* ===== Mobile Menu ===== */
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const isActive = navToggle.classList.toggle("active");
    navList.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", isActive);
    document.body.classList.toggle("menu-open");
  });

  document.querySelectorAll(".navlink").forEach(link => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navList.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

/* ===== Active Navigation ===== */
const navLinks = document.querySelectorAll(".navlink");
const sections = document.querySelectorAll("section[id]");

navLinks[0].classList.add("active-navlink");

function setActiveNav(id) {
  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
  });
}

window.addEventListener("hashchange", () => {
  const active = window.location.hash.replace("#", "");
  if (active) setActiveNav(active);
});

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const top = section.offsetTop;
    if (scrollY >= top - 150) {
      current = section.getAttribute("id");
    }
  });
  if (current) setActiveNav(current);

  const header = document.querySelector("header");
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 50);
  }
});

/* ===== Render Projects ===== */
const projectsContainer = document.getElementById("project-showcase-container");

if (projectsContainer && projectsData) {
  projectsData.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    const tagsHtml = (project.tags || [])
      .map(tag => `<span class="project-tag">${tag}</span>`)
      .join("");

    const links = project.links || {};
    const linksHtml = [
      links.yt ? `<a href="${links.yt}" target="_blank" rel="noopener noreferrer">Demo video</a>` : "",
      links.website ? `<a href="${links.website}" target="_blank" rel="noopener noreferrer">Website</a>` : "",
      links.code ? `<a href="${links.code}" target="_blank" rel="noopener noreferrer">Code</a>` : ""
    ].filter(Boolean).join("");

    card.innerHTML = `
      <div class="project-image-container">
        <img src="${project.thumbnail || ""}" alt="${project.name || "Project"}">
      </div>
      <div class="project-description">
        <h3>${project.name || ""}</h3>
        <p>${project.description || ""}</p>
      </div>
      <div class="project-tags-container">${tagsHtml}</div>
      <div class="project-options">${linksHtml}</div>
    `;

    projectsContainer.appendChild(card);
  });
}

/* ===== Render Tools Slider ===== */
const sliderContainer = document.getElementById("slider-container");

if (sliderContainer && toolsData && toolsData.length > 0) {
  const createSlider = () => {
    const ul = document.createElement("ul");
    ul.className = "slider";
    const items = [...toolsData, ...toolsData];
    items.forEach(tool => {
      const li = document.createElement("li");
      li.textContent = tool;
      ul.appendChild(li);
    });
    sliderContainer.appendChild(ul);
  };

  for (let i = 0; i < 3; i++) {
    createSlider();
  }
}

/* ===== Scroll Reveal ===== */
const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

/* ===== Custom Cursor ===== */
const cursor = document.querySelector(".cursor");

if (cursor && window.matchMedia("(pointer: fine)").matches) {
  document.addEventListener("mouseenter", () => {
    cursor.style.display = "block";
  });

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  document.addEventListener("mouseleave", () => {
    cursor.style.display = "none";
  });
}

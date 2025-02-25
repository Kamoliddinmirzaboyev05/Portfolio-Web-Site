const static = document.querySelector(".static");
const featured = document.querySelector(".featured");
const interactive = document.querySelector(".interactive");
const api = document.querySelector(".api");
const react = document.querySelector(".react");
const staticBtn = document.querySelector(".staticBtn");
const featuredBtn = document.querySelector(".featuredBtn");
const interactiveBtn = document.querySelector(".interactiveBtn");
const apiBtn = document.querySelector(".apiBtn");
const reactBtn = document.querySelector(".reactBtn");

const portfolioDB = [
  {
    id: 1,
    type: "featured",
    title: "Weather Web Application",
    technology: "JavaScript",
    link: "https://weather-app-mkm.netlify.app/",
    github: "https://weather-app-mkm.netlify.app/",
    functions: ["Fetch API", "Search City", "Local Storage"],
  },
  {
    id: 1,
    type: "featured",
    title: "Weather Web Application",
    technology: "JavaScript",
    link: "https://weather-app-mkm.netlify.app/",
    github: "https://weather-app-mkm.netlify.app/",
    functions: ["Fetch API", "Search City", "Local Storage"],
  },
  {
    id: 1,
    type: "featured",
    title: "Weather Web Application",
    technology: "JavaScript",
    link: "https://weather-app-mkm.netlify.app/",
    github: "https://weather-app-mkm.netlify.app/",
    functions: ["Fetch API", "Search City", "Local Storage"],
  },
  {
    id: 1,
    type: "featured",
    title: "Weather Web Application",
    technology: "JavaScript",
    link: "https://weather-app-mkm.netlify.app/",
    github: "https://weather-app-mkm.netlify.app/",
    functions: ["Fetch API", "Search City", "Local Storage"],
  },
  {
    id: 1,
    type: "featured",
    title: "Weather Web Application",
    technology: "JavaScript",
    link: "https://weather-app-mkm.netlify.app/",
    github: "https://weather-app-mkm.netlify.app/",
    functions: ["Fetch API", "Search City", "Local Storage"],
  },
  {
    id: 1,
    type: "featured",
    title: "Weather Web Application",
    technology: "JavaScript",
    link: "https://weather-app-mkm.netlify.app/",
    github: "https://weather-app-mkm.netlify.app/",
    functions: ["Fetch API", "Search City", "Local Storage"],
  },
  {
    id: 1,
    type: "featured",
    title: "Weather Web Application",
    technology: "JavaScript",
    link: "https://weather-app-mkm.netlify.app/",
    github: "https://weather-app-mkm.netlify.app/",
    functions: ["Fetch API", "Search City", "Local Storage"],
  },
  {
    id: 1,
    type: "featured",
    title: "Weather Web Application",
    technology: "JavaScript",
    link: "https://weather-app-mkm.netlify.app/",
    github: "https://weather-app-mkm.netlify.app/",
    functions: ["Fetch API", "Search City", "Local Storage"],
  },
  {
    id: 1,
    type: "featured",
    title: "Weather Web Application",
    technology: "JavaScript",
    link: "https://weather-app-mkm.netlify.app/",
    github: "https://weather-app-mkm.netlify.app/",
    functions: ["Fetch API", "Search City", "Local Storage"],
  },
  {
    id: 1,
    type: "featured",
    title: "Weather Web Application",
    technology: "JavaScript",
    link: "https://weather-app-mkm.netlify.app/",
    github: "https://weather-app-mkm.netlify.app/",
    functions: ["Fetch API", "Search City", "Local Storage"],
  },
  {
    id: 1,
    type: "featured",
    title: "Weather Web Application",
    technology: "JavaScript",
    link: "https://weather-app-mkm.netlify.app/",
    github: "https://weather-app-mkm.netlify.app/",
    functions: ["Fetch API", "Search City", "Local Storage"],
  },
  {
    id: 1,
    type: "featured",
    title: "Weather Web Application",
    technology: "JavaScript",
    link: "https://weather-app-mkm.netlify.app/",
    github: "https://weather-app-mkm.netlify.app/",
    functions: ["Fetch API", "Search City", "Local Storage"],
  },
];

staticBtn.addEventListener("click", () => {
  // Btn classes
  staticBtn.classList.add("activeBtn");
  featuredBtn.classList.remove("activeBtn");
  interactiveBtn.classList.remove("activeBtn");
  apiBtn.classList.remove("activeBtn");
  reactBtn.classList.remove("activeBtn");
  //   Block classes
  static.classList.remove("hidden");
  featured.classList.add("hidden");
  interactive.classList.add("hidden");
  api.classList.add("hidden");
  react.classList.add("hidden");
});

featuredBtn.addEventListener("click", () => {
  // Btn classes
  staticBtn.classList.remove("activeBtn");
  featuredBtn.classList.add("activeBtn");
  interactiveBtn.classList.remove("activeBtn");
  apiBtn.classList.remove("activeBtn");
  reactBtn.classList.remove("activeBtn");
  //   Block classes
  static.classList.add("hidden");
  featured.classList.remove("hidden");
  interactive.classList.add("hidden");
  api.classList.add("hidden");
  react.classList.add("hidden");
});

interactiveBtn.addEventListener("click", () => {
  // Btn classes
  staticBtn.classList.remove("activeBtn");
  featuredBtn.classList.remove("activeBtn");
  interactiveBtn.classList.add("activeBtn");
  apiBtn.classList.remove("activeBtn");
  reactBtn.classList.remove("activeBtn");
  //   Block classes
  static.classList.add("hidden");
  featured.classList.add("hidden");
  interactive.classList.remove("hidden");
  api.classList.add("hidden");
  react.classList.add("hidden");
});

apiBtn.addEventListener("click", () => {
  // Btn classes
  staticBtn.classList.remove("activeBtn");
  featuredBtn.classList.remove("activeBtn");
  interactiveBtn.classList.remove("activeBtn");
  apiBtn.classList.add("activeBtn");
  reactBtn.classList.remove("activeBtn");
  //   Block classes
  static.classList.add("hidden");
  featured.classList.add("hidden");
  interactive.classList.add("hidden");
  api.classList.remove("hidden");
  react.classList.add("hidden");
});

reactBtn.addEventListener("click", () => {
  // Btn classes
  staticBtn.classList.remove("activeBtn");
  featuredBtn.classList.remove("activeBtn");
  interactiveBtn.classList.remove("activeBtn");
  apiBtn.classList.remove("activeBtn");
  reactBtn.classList.add("activeBtn");
  //   Block classes
  static.classList.add("hidden");
  featured.classList.add("hidden");
  interactive.classList.add("hidden");
  api.classList.add("hidden");
  react.classList.remove("hidden");
});

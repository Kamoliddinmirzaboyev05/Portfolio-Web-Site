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
const portfolioBlock = document.querySelector(".portfolioBlock");
const mobileLinksBack = document.querySelector(".mobileLinksBack");
const bar = document.querySelector(".bar");
const link = document.querySelectorAll(".link");

const portfolioDB = [
  {
    id: 1,
    img: "img/weather.jpg",
    type: "featured",
    title: "Weather Web Application",
    technology: "JavaScript",
    link: "https://weather-app-mkm.netlify.app/",
    github: "https://github.com/Kamoliddinmirzaboyev05/Weather-App",
    functions: ["Fetch API", "Search City", "Local Storage"],
  },
  {
    id: 2,
    img: "img/ecommerse.jpg",
    type: "featured",
    title: "eCommerse Multipage Market Site",
    technology: "JavaScript",
    link: "https://ecommerse-mkm.netlify.app/",
    github: "https://github.com/Kamoliddinmirzaboyev05/eCommerse-Big-JS-Project",
    functions: ["Fetch API", "Multi Page", "Local Storage"],
  },
  {
    id: 3,
    img: "img/taqvim.jpg",
    type: "featured",
    title: "Taqvim Web Application",
    technology: "JavaScript",
    link: "https://taqvim-mkm.netlify.app/",
    github: "https://github.com/Kamoliddinmirzaboyev05/Namoz-Vaqtlari-APP",
    functions: ["Fetch API", "Daily Times", "Local Storage"],
  },
  {
    id: 4,
    img: "img/contact.jpg",
    type: "featured",
    title: "Contact Web Application",
    technology: "JavaScript",
    link: "https://contacts-mkm.netlify.app/",
    github: "https://github.com/Kamoliddinmirzaboyev05/Weather-App",
    functions: ["Fetch API", "Search City", "Local Storage"],
  },
  {
    id: 5,
    img: "img/todolist.jpg",
    type: "featured",
    title: "To Do List",
    technology: "JavaScript",
    link: "https://todolist-mkm.netlify.app/",
    github: "https://github.com/Kamoliddinmirzaboyev05",
    functions: ["Add new task", "Complate task", "Local Storage"],
  },
  {
    id: 6,
    img: "img/countries.jpg",
    type: "featured",
    title: "Countries Data",
    technology: "JavaScript",
    link: "https://weather-app-mkm.netlify.app/",
    github: "https://github.com/Kamoliddinmirzaboyev05/Weather-App",
    functions: ["Fetch API", "Search City", "Local Storage"],
  },
];

link.forEach((item)=>{
  item.addEventListener("click", ()=>{
  mobileLinksBack.style.left = "-400px"

  })
})

bar.addEventListener("click", ()=>{
  mobileLinksBack.style.left = "0px"
})
portfolioDB.forEach((item) => {
  portfolioBlock.innerHTML += `
     <div
                class="portfolioBox"
               >
                <div class="portfolioImg">
                  <img src=${item.img} alt="" />
                </div>
                <div class="portfolioText">
                  <h3>${item.title}</h3>
                  <h4>Technology</h4>
                  <ul>
                    <li>${item.technology}</li>
                  </ul>
                  <h4>Functions</h4>
                  <ul>
                    <li>${item.functions[0]}</li>
                    <li>${item.functions[1]}</li>
                    <li>${item.functions[2]}</li>
                  </ul>
                  <div class="portfolioBtns">
                    <a
                      target="_blank"
                      href=${item.link}
                      ><button class="gotoSite">
                        Go To Site
                        <div class="toright">
                          <i class="fas fa-arrow-right"></i>
                        </div>
                      </button>
                    </a>
                    <a
                      target="_blank"
                      href=${item.github}>
                      <button class="gotoCode">
                        Go To Code
                        <div class="toright">
                          <i class="fas fa-arrow-right"></i>
                        </div>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
  `;
});

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

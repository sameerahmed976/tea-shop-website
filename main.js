const hamburgerBtn = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const date = document.querySelector(".date");
const sidebarLinks = document.querySelectorAll(".sidebar li a");
// const navLinksActive = document.querySelector(".nav-links-active");

hamburgerBtn.addEventListener("click", () => {
  //   console.log("click");

  if (!hamburgerBtn.classList.contains("hamburger-close")) {
    hamburgerBtn.classList.add("hamburger-close");
    sidebar.classList.add("sidebar-active");
    document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
  } else {
    hamburgerBtn.classList.remove("hamburger-close");
    sidebar.classList.remove("sidebar-active");
    document.body.style.backgroundColor = "";
  }
});

// remove sidebar
sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerBtn.classList.remove("hamburger-close");
    sidebar.classList.remove("sidebar-active");
    document.body.style.backgroundColor = "";
  });
});

const dateNew = new Date().getFullYear();

date.innerHTML = `${dateNew}`;

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("header nav ul li a, footer nav ul li a");
    
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
      });
    });
  });
  
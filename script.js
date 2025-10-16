document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        if (event.target.closest('.search-icon')) { 
            document.querySelector('.search-bar').classList.add('search-bar-active');
        } else if (event.target.closest('.search-cancel')) {
            document.querySelector('.search-bar').classList.remove('search-bar-active');
        }
    });
});

var swiper = new Swiper(".newline-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay:1000,
        disableOnInteraction: false,
    },
    loop:true,
  });

document.addEventListener("DOMContentLoaded", () =>{
    const questions = document.querySelectorAll(".faq-question");
    
    questions.forEach(question => {
      question.addEventListener("click", ()=> {
        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        const icon = question.querySelector(".icon");
        
        if (answer.style.display === "block") {
          answer.style.display = "none";
          icon.textContent = "+";
        } else {
          answer.style.display = "block";
          icon.textContent ="-";
        }
      });
    });
  });

  document.getElementById("phone-link").addEventListener("click", function(event) {
    event.preventDefault(); // щоб не відкривав "дзвінок" одразу
    const phoneNumber = document.getElementById("phone-number");
  
    if (phoneNumber.style.display === "none") {
      phoneNumber.style.display = "inline";
    } else {
      phoneNumber.style.display = "none";
    }
  });

  document.getElementById("category").addEventListener("change", function () {
    const selectedCategory = this.value;
    const products = document.querySelectorAll(".products-box");
  
    products.forEach(product => {
      const category = product.getAttribute("data-category");
  
      if (selectedCategory === "choose" || category === selectedCategory) {
        product.classList.remove("hidden");
        product.classList.add("visible");
      } else {
        product.classList.remove("visible");
        product.classList.add("hidden");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.getElementById("toggler");
    const navbar = document.querySelector("header .navbar");
    const navLinks = navbar.querySelectorAll("a");


    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        toggler.checked = false;
      });
    });

    document.addEventListener("click", function (e) {
      const isClickInside = navbar.contains(e.target) || e.target === toggler || e.target.classList.contains("fa-bars");
      if (!isClickInside) {
        toggler.checked = false;
      }
    });
  });

  
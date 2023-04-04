window.onload = function () {
    const menu_btn = document.querySelector(".hamburger");
    const mobile_menu = document.querySelector(".mobile-nav");
  
    // Remove no-scroll class on page load if hamburger button is not active
    if (!menu_btn.classList.contains("is-active")) {
      document.body.classList.remove("no-scroll");
    }
  
    // Event listener on hamburger button
    menu_btn.addEventListener("click", function () {
      menu_btn.classList.toggle("is-active");
      mobile_menu.classList.toggle("is-active");
  
      // Check if hamburger button is active
      if (menu_btn.classList.contains("is-active")) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    });
  
    mobile_menu.addEventListener("click", function () {
      menu_btn.classList.toggle("is-active");
      mobile_menu.classList.toggle("is-active");
      document.body.classList.remove("no-scroll");
    });
  };
  
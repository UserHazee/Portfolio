const buttonProject = document.getElementById('btnProject');
buttonProject.addEventListener('click', function(){
    
    const targetElement = document.getElementById('projects');
    targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
});


 const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-btn");
    
    // Function to open sidebar
    function openSidebar() {
      sidebar.classList.remove("translate-x-full");
      sidebar.classList.add("translate-x-0");
    }

    // Function to close sidebar
    function closeSidebar() {
      sidebar.classList.add("translate-x-full");
      sidebar.classList.remove("translate-x-0");
    }
    
    // Event listeners
    menuToggle.addEventListener("click", openSidebar);
    closeBtn.addEventListener("click", closeSidebar);


    
    document.addEventListener("click", (e) => {
      if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        closeSidebar();
      }
    });

      const myImage = document.getElementById('myImage');
    myImage.addEventListener('mouseenter', () => {
        myImage.src = 'assets/img/JUMPSCARE.webp';
    });
    myImage.addEventListener('mouseleave', () => {
        myImage.src = 'assets/img/1752798249832.webp';
    });
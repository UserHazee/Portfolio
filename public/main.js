document.addEventListener('DOMContentLoaded', () => {
  const buttonProject = document.getElementById('btnProject');
  if (buttonProject) {
    buttonProject.addEventListener('click', function(){
      const targetElement = document.getElementById('projects');
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("close-btn");
  
  if (menuToggle && sidebar && closeBtn) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.remove("translate-x-full");
      sidebar.classList.add("translate-x-0");
    });
    closeBtn.addEventListener("click", () => {
      sidebar.classList.add("translate-x-full");
      sidebar.classList.remove("translate-x-0");
    });
    document.addEventListener("click", (e) => {
      if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        sidebar.classList.add("translate-x-full");
      }
    });
  }

  const myImage = document.getElementById('myImage');
  if (myImage) {
    myImage.addEventListener('mouseenter', () => {
      myImage.src = 'assets/img/JUMPSCARE.webp';
    });
    myImage.addEventListener('mouseleave', () => {
      myImage.src = 'assets/img/1752798249832.webp';
    });
  }
});

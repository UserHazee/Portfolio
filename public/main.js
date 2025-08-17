const buttonProject = document.getElementById('btnProject');
buttonProject.addEventListener('click', function(){
    
    const targetElement = document.getElementById('projects');
    targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
});
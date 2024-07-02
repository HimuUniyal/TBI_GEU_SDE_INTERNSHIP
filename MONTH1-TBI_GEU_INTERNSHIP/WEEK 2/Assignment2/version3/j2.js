document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
              
                 document.querySelectorAll('section').forEach(section => {
                    section.classList.remove('highlighted');
                });

               
                target.classList.add('highlighted');
            }
        });
    });

    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    window.addEventListener('scroll', function () {
        const body = document.body;
        if (window.scrollY > 50) {
            body.classList.add('scrolled');
        } else {
            body.classList.remove('scrolled');
        }
    });
    
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        const stars = project.querySelectorAll('.star');

        stars.forEach(star => {
            star.addEventListener('click', function () {
                const clickedValue = parseInt(this.getAttribute('data-value'));

                
                const projectStars = project.querySelectorAll('.star');
                projectStars.forEach(projectStar => {
                    const starValue = parseInt(projectStar.getAttribute('data-value'));
                    if (starValue <= clickedValue) {
                        projectStar.classList.add('active');
                    } else {
                        projectStar.classList.remove('active');
                    }
                });
            });
        });
    });
        const thumbsUpBtns = document.querySelectorAll('.thumbs-up');
        const thumbsDownBtns = document.querySelectorAll('.thumbs-down');
        thumbsUpBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                
                alert("Project liked!");
            });
        });
    
        thumbsDownBtns.forEach(btn => {
            btn.addEventListener('click', function () {
               
                alert("Project disliked!");
            });
        });
    });
    

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onlick = () =>{
   menu.classList.toggle('bx-x');
   navbar.classList.toggle('open')

};
const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.logo',{delay:200, origin:'left'})
sr.reveal('.navbar',{delay:200, origin:'top'})
sr.reveal('.menu-btn',{delay:520, origin:'right'})

sr.reveal('.home-text span',{delay:600, origin:'top'})
sr.reveal('.home-text h1',{delay:680, origin:'left'})

sr.reveal('.home-text p',{delay:750, origin:'right'})
sr.reveal('.main-btn',{delay:860, origin:'left'})
sr.reveal('.share',{delay:950, origin:'bottom'})
sr.reveal('.home-img',{delay:1000, origin:'right'})

sr.reveal('.services h2', { delay: 200, origin: 'top' });
sr.reveal('.service-box', { delay: 300, origin: 'bottom', interval: 200 });

sr.reveal('.portfolio h2', { delay: 200, origin: 'top' });
sr.reveal('.portfolio-item', { delay: 300, origin: 'bottom', interval: 200 });

sr.reveal('.blog h2', { delay: 200, origin: 'top' });
sr.reveal('.blog-post', { delay: 300, origin: 'bottom', interval: 200 });

sr.reveal('.contact h2', { delay: 200, origin: 'top' });
sr.reveal('.contact p', { delay: 250, origin: 'bottom' });
sr.reveal('.contact form', { delay: 300, origin: 'left' });

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        let targetId = this.getAttribute('href').substring(1);
        let targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact form');
    
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            
            const name = document.querySelector('input[name="name"]').value.trim();
            const email = document.querySelector('input[name="email"]').value.trim();
            const message = document.querySelector('textarea[name="message"]').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }

            alert('Message sent successfully!');
            form.reset();
        });
    }
});

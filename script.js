// script.js

window.addEventListener('scroll', function() {
    const header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const sections = document.querySelectorAll('.section');
const options = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

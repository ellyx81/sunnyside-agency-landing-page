function updateBodyOverflow() {
    var nav = document.querySelector('.navbar-collapse');
    var body = document.body;
    var windowWidth = window.innerWidth;
    
    if (windowWidth < 768) {
        if (nav && nav.classList.contains('show')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    } else {
        body.style.overflow = 'auto';
    }
}

updateBodyOverflow();

document.querySelector('.navbar-collapse').addEventListener('shown.bs.collapse', updateBodyOverflow);
document.querySelector('.navbar-collapse').addEventListener('hidden.bs.collapse', updateBodyOverflow);

window.addEventListener('resize', updateBodyOverflow);
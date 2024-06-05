
var nav = document.querySelector('.navbar-collapse');

function updateBodyOverflow() {
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


function closeNavOnClick() {
    var anchors = document.querySelectorAll('.navbar-expand-md .nav-link');
    
    anchors.forEach(function (anchor) {
        anchor.addEventListener('click', function () {
            nav.classList.remove('show');
            updateBodyOverflow();
        });
    });
}

updateBodyOverflow();
closeNavOnClick();

AOS.init({
    startEvent: 'DOMContentLoaded',
    disable: function disable() {
      var maxWidth = 768;
      return window.innerWidth < maxWidth;
    }
});

document.querySelector('.navbar-collapse').addEventListener('shown.bs.collapse', updateBodyOverflow);
document.querySelector('.navbar-collapse').addEventListener('hidden.bs.collapse', updateBodyOverflow);

window.addEventListener('resize', updateBodyOverflow);
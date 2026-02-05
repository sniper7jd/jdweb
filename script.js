// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 250;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => links.classList.remove('active'));
            let activeLink = id === 'home'
                ? document.querySelector('header nav a[href="index.html"]')
                : document.querySelector('header nav a[href*="' + id + '"]');
            if (activeLink) activeLink.classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Modal functionality for projects
document.querySelectorAll('.project-box').forEach(box => {
    box.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'flex';
    });
});
document.querySelectorAll('.modal .close').forEach(btn => {
    btn.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});
window.addEventListener('click', function(e) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (e.target === modal) modal.style.display = 'none';
    });
});

// Cert image modal: click cert image to open full-size in modal
document.querySelectorAll('.cert-inner .cert-img').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.getElementById('cert-modal');
        const modalImg = document.getElementById('cert-modal-img');
        if (modal && modalImg) {
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            modal.style.display = 'flex';
        }
    });
});
document.querySelectorAll('.cert-modal .cert-modal-close').forEach(btn => {
    btn.addEventListener('click', function() {
        const modal = this.closest('.cert-modal');
        if (modal) modal.style.display = 'none';
    });
});
document.querySelectorAll('.cert-modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === modal) this.style.display = 'none';
    });
});
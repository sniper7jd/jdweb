function openModal(modal) {
    if (!modal) return;
    modal.hidden = false;
    modal.classList.add('is-open');
}

function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.hidden = true;
}

document.querySelectorAll('.project').forEach((project) => {
    project.addEventListener('click', () => {
        openModal(document.getElementById(project.getAttribute('data-modal')));
    });
});

document.querySelectorAll('.project-links a').forEach((link) => {
    link.addEventListener('click', (event) => event.stopPropagation());
});

document.querySelectorAll('[data-open-modal]').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        closeModal(link.closest('.modal'));
        openModal(document.getElementById(link.getAttribute('data-open-modal')));
    });
});

document.querySelectorAll('.cert-card').forEach((card) => {
    card.addEventListener('click', () => {
        const modal = document.getElementById('cert-modal');
        const image = document.getElementById('cert-modal-img');
        if (!modal || !image) return;
        image.src = card.getAttribute('data-src');
        image.alt = card.getAttribute('data-alt') || '';
        openModal(modal);
    });
});

document.querySelectorAll('.modal-close').forEach((button) => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        closeModal(button.closest('.modal'));
    });
});

document.querySelectorAll('.modal').forEach((modal) => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal(modal);
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    document.querySelectorAll('.modal.is-open').forEach(closeModal);
});

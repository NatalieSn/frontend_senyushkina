document.addEventListener('DOMContentLoaded', () => {
    const learnMoreBtn = document.getElementById('learn-more-tours');
    const modalOverlay = document.getElementById('tours-modal');
    const closeModalBtn = document.querySelector('.tours__modal-close');

    learnMoreBtn.addEventListener('click', () => {
        modalOverlay.classList.add('active');
    });

    closeModalBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });

    // Close modal when clicking outside the modal content
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });
});

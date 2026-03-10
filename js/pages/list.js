document.addEventListener('DOMContentLoaded', function() {
    const selectLabel = document.querySelector('.select-label');
    const selectBox = document.querySelector('.select-box');

    if (selectLabel && selectBox) {
        selectLabel.addEventListener('click', () => {
            selectBox.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!selectBox.contains(e.target)) {
                selectBox.classList.remove('active');
            }
        });
    }
});
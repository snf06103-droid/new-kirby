document.addEventListener('DOMContentLoaded', () => {

    const noticeBtn = document.querySelector('.notice span');
    const noticeBox = document.querySelector('.notice');

    noticeBtn.addEventListener('click', () => {
        noticeBox.classList.toggle('active');
    });


    const pageSpans = document.querySelectorAll('.paginatioin span');
    const numPages = Array.from(pageSpans).slice(1, -1); 
    const prevBtn = pageSpans[0];
    const nextBtn = pageSpans[pageSpans.length - 1];

    let currentIndex = 0; 

    function updatePage(index) {
        numPages.forEach(span => span.classList.remove('on')); 
        numPages[index].classList.add('on'); 
        currentIndex = index;
    }

    numPages.forEach((span, index) => {
        span.addEventListener('click', () => updatePage(index));
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) updatePage(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < numPages.length - 1) updatePage(currentIndex + 1);
    });

    updatePage(0);


})
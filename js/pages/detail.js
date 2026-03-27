document.addEventListener('DOMContentLoaded', () => {

    const option= document.querySelectorAll('.option-selector')
    const optionBtn= document.querySelectorAll('.option-selector button')


    optionBtn.forEach((span, index) => {
        span.addEventListener('click', () => updatePage(index));
    });



})
document.addEventListener('DOMContentLoaded', () => {
    const pcButtons = document.querySelectorAll('.none-mo .cover');
    const moButtons = document.querySelectorAll('.horizontal-scroll-list li');
    
    const targets = [".all", ".product", ".delivery", ".exchange", ".as", ".edit", ".coupon", ".other"];

    function handleFaqClick(index, btn) {
        pcButtons.forEach(b => b.classList.remove('active'));
        moButtons.forEach(b => b.classList.remove('active'));

        if(pcButtons[index]) pcButtons[index].classList.add('active');
        if(moButtons[index]) moButtons[index].classList.add('active');

        document.querySelectorAll('.faq-content').forEach(content => {
            content.classList.remove('active');
        });

        const targetClass = targets[index];
        document.querySelectorAll(targetClass).forEach(target => {
            target.classList.add('active');
        });
    }

    pcButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => handleFaqClick(index, btn));
    });

    moButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => handleFaqClick(index, btn));
    });

    if(pcButtons[0]) pcButtons[0].click();
});
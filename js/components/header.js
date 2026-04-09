// 헤더 뿌옇게 변하는 효과 
window.addEventListener('scroll', () => {
    const browserWidth = window.innerWidth;
    const header = document.querySelector('#site-header header') || document.querySelector('header');
    
    if (header) {
        if (browserWidth > 1440 && window.scrollY > 0) {
            header.classList.add('on');
        } else {
            header.classList.remove('on');
        }
    }
});




document.addEventListener('click', function(e) {
    const btnMenu = e.target.closest('.btn-menu');
    const btnClose = e.target.closest('.btn-close');
    const btnMore = e.target.closest('.btn-more'); 
    
    const menuSmart = document.querySelector('.menu-smart-hidden');

  
    if (btnMenu && menuSmart) {
        menuSmart.classList.add('on');
    }


    if (btnClose && menuSmart) {
        menuSmart.classList.remove('on');
        document.querySelectorAll(".gnb-smart > li").forEach(li => li.classList.remove("on"));
    }

    if (btnMore) {
        const parentLi = btnMore.parentElement;
        if (parentLi) {
            parentLi.classList.toggle("on");
            console.log("2뎁스 토글됨");
        }
    }
});
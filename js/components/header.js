window.addEventListener('scroll', () => {
    
    const header = document.querySelector('#site-header header') || document.querySelector('header');
    
    if (window.scrollY > 0) {
        // 1px이라도 내려가면 'on' 클래스 추가
        header.classList.add('on');
    } else {
        // 맨 위로 올라오면 다시 원래대로(불투명)
        header.classList.remove('on');
    }

     // 메뉴버튼을 누르면 header가 나오는 기능
    const btnMenu = document.querySelector('.btn-menu');
    const menuSmartHidden = document.querySelector('.menu-smart-hidden');
    const btnClose = document.querySelector(".btn-close")
    const gnbSmartList = document.querySelectorAll(".gnb-smart>li")

    btnMenu.addEventListener('click', () => {
        menuSmartHidden.classList.add('on');
    });
    btnClose.addEventListener("click",()=>{
        menuSmartHidden.classList.remove('on');
        gnbSmartList.forEach(tag=>tag.classList.remove("on"))
    })


    // 모바일에서 2뎁스 메뉴 나오는 기능
    const btnMores = document.querySelectorAll(".gnb-smart li .btn-more")
    btnMores.forEach(span=>{
        span.addEventListener('click',()=>{
            span.parentElement.classList.toggle("on")
        })
    })
});
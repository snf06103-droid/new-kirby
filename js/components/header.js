// [1] 스크롤 기능 (PC에서만 뿌예짐 효과)
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

// 

// 클릭 이벤트 통합
document.addEventListener('click', function(e) {
    const btnMenu = e.target.closest('.btn-menu');
    const btnClose = e.target.closest('.btn-close');
    const btnMore = e.target.closest('.btn-more'); // 모바일 2뎁스 버튼 클릭 타겟
    
    const menuSmart = document.querySelector('.menu-smart-hidden');

    //메뉴 열기
    if (btnMenu && menuSmart) {
        menuSmart.classList.add('on');
    }

    //메뉴 닫기
    if (btnClose && menuSmart) {
        menuSmart.classList.remove('on');
        document.querySelectorAll(".gnb-smart > li").forEach(li => li.classList.remove("on"));
    }

    //모바일 2뎁스 메뉴 토글 (이벤트 위임 방식)
    // 버튼을 클릭했을 때 바로 실행되도록 수정함
    if (btnMore) {
        // 클릭한 btn-more의 부모인 li를 찾아서 'on' 토글
        const parentLi = btnMore.parentElement;
        if (parentLi) {
            parentLi.classList.toggle("on");
            console.log("2뎁스 토글됨");
        }
    }
});
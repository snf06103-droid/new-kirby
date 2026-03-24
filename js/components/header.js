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

// [2] 클릭 이벤트 통합 (이벤트 위임 방식 - 헤더가 나중에 로드되어도 작동함)
document.addEventListener('click', function(e) {
    // 클릭한 요소의 가장 가까운 부모 중 해당 클래스가 있는지 확인
    const btnMenu = e.target.closest('.btn-menu');
    const btnClose = e.target.closest('.btn-close');
    const btnMore = e.target.closest('.btn-more'); // 모바일 2뎁스 버튼
    
    const menuSmart = document.querySelector('.menu-smart-hidden');

    // 1. 메뉴 열기
    if (btnMenu && menuSmart) {
        menuSmart.classList.add('on');
        console.log("모바일 메뉴 열림");
    }

    // 2. 메뉴 닫기
    if (btnClose && menuSmart) {
        menuSmart.classList.remove('on');
        // 닫을 때 펼쳐졌던 서브메뉴들도 초기화
        document.querySelectorAll(".gnb-smart > li").forEach(li => li.classList.remove("on"));
        console.log("모바일 메뉴 닫힘");
    }

    // 3. 모바일 2뎁스 아코디언 (btn-more 클릭 시)
    if (btnMore) {
        // 부모 li에 'on' 클래스 토글
        btnMore.parentElement.classList.toggle("on");
    }
});
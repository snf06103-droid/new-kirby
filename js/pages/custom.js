
// document.addEventListener('DOMContentLoaded', function() {
//     // 1. 모든 '.step' 버튼들을 가져옵니다.
//     const steps = document.querySelectorAll('.custom-order.none-mo .step');

//     steps.forEach(function(step) {
//         step.addEventListener('click', function() {
//             // 2. 클릭한 'step' 버튼의 바로 다음에 있는 'active-grid'를 찾습니다.
//             const targetGrid = this.nextElementSibling;
            
//             // 3. 클릭한 버튼의 부모인 'custom-menu'에 active를 넣었다 뺐다 합니다.
//             // (CSS에서 .custom-menu.active .active-grid 스타일을 조절한다고 가정)
//             const parentMenu = this.closest('.custom-menu');
//             parentMenu.classList.toggle('active');
            
//             // 만약 '하나만 열리고 나머지는 닫히게' 하고 싶다면 아래 로직을 추가하세요.
            
//             steps.forEach(otherStep => {
//                 if (otherStep !== step) {
//                     otherStep.closest('.custom-menu').classList.remove('active');
//                 }
//             });
            
//         });
//     });

//     // --- [2] 모바일용 슬라이드 기능 (새로 추가) ---
// function initMobileStepSlider() {
//     const mobileSteps = document.querySelectorAll('.custom-panel .custom-menu');
//     if (mobileSteps.length === 0) return; // 요소가 없으면 실행 안 함

//     let currentIndex = 0;

//     // 초기 상태: 1번만 보이고 나머지 숨김
//     mobileSteps.forEach((s, idx) => {
//         if(idx === 0) s.classList.add('on');
//         else s.classList.remove('on');
//     });

//     // 모든 화살표 아이콘 클릭 이벤트
//     document.querySelectorAll('.custom-panel .icon').forEach((icon) => {
//         icon.onclick = function() {
//             // 현재 화면 너비 체크 (1440 이하일 때만 작동하게 안전장치)
//             if (window.innerWidth > 950) return;

//             const imgAlt = this.querySelector('img').alt;
            
//             // 현재 스텝 숨기기
//             mobileSteps[currentIndex].classList.remove('on');

//             if (imgAlt === "왼쪽버튼") {
//                 currentIndex = (currentIndex === 0) ? mobileSteps.length - 1 : currentIndex - 1;
//             } else {
//                 currentIndex = (currentIndex === mobileSteps.length - 1) ? 0 : currentIndex + 1;
//             }

//             // 새 스텝 보여주기
//             mobileSteps[currentIndex].classList.add('on');
//          };
//         });
//         }

       
// });

document.addEventListener('DOMContentLoaded', function() {
    // [1] PC용 아코디언 기능 (기존 유지)
    const pcSteps = document.querySelectorAll('.custom-order.none-mo .step');
    pcSteps.forEach(function(step) {
        step.addEventListener('click', function() {
            const parentMenu = this.closest('.custom-menu');
            const isActive = parentMenu.classList.contains('active');
            
            // 모두 닫기
            document.querySelectorAll('.none-mo .custom-menu').forEach(m => m.classList.remove('active'));
            
            // 클릭한 것만 토글
            if (!isActive) parentMenu.classList.add('active');
        });
    });

    // --- [2] 모바일용 스텝 슬라이더 (수정 완료) ---
    function initMobileStepSlider() {
        // 모바일(.mo) 안에 있는 커스텀 메뉴들만 정확히 타겟팅
        const mobileSteps = document.querySelectorAll('.custom-order.mo .custom-menu');
        const arrows = document.querySelectorAll('.custom-order.mo .icon');
        
        if (mobileSteps.length === 0) return;

        let currentIndex = 0;

        // 초기화: 첫 번째 스텝만 'on' 클래스 부여
        mobileSteps.forEach((s, idx) => {
            if (idx === 0) s.classList.add('on');
            else s.classList.remove('on');
        });

        arrows.forEach((icon) => {
            icon.onclick = function() {
                // 1. 현재 떠 있는 스텝의 'on' 제거
                mobileSteps[currentIndex].classList.remove('on');

                // 2. 화살표 방향 판단 (img의 alt 값 기준)
                const imgAlt = this.querySelector('img').alt;

                if (imgAlt === "왼쪽버튼") {
                    // 이전으로 (0이면 마지막으로)
                    currentIndex = (currentIndex === 0) ? mobileSteps.length - 1 : currentIndex - 1;
                } else {
                    // 다음으로 (마지막이면 0으로)
                    currentIndex = (currentIndex === mobileSteps.length - 1) ? 0 : currentIndex + 1;
                }

                // 3. 새로운 인덱스의 스텝에 'on' 추가
                mobileSteps[currentIndex].classList.add('on');
                console.log("현재 스텝:", currentIndex + 1);
            };
        });
    }

    // ★ 중요: 함수를 만들었으면 여기서 실행을 시켜줘야 합니다!
    initMobileStepSlider();
});
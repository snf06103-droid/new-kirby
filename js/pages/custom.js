
document.addEventListener('DOMContentLoaded', function() {
    // 1. 모든 '.step' 버튼들을 가져옵니다.
    const steps = document.querySelectorAll('.custom-order.none-mo .step');

    steps.forEach(function(step) {
        step.addEventListener('click', function() {
            // 2. 클릭한 'step' 버튼의 바로 다음에 있는 'active-grid'를 찾습니다.
            const targetGrid = this.nextElementSibling;
            
            // 3. 클릭한 버튼의 부모인 'custom-menu'에 active를 넣었다 뺐다 합니다.
            // (CSS에서 .custom-menu.active .active-grid 스타일을 조절한다고 가정)
            const parentMenu = this.closest('.custom-menu');
            parentMenu.classList.toggle('active');
            
            // 만약 '하나만 열리고 나머지는 닫히게' 하고 싶다면 아래 로직을 추가하세요.
            
            steps.forEach(otherStep => {
                if (otherStep !== step) {
                    otherStep.closest('.custom-menu').classList.remove('active');
                }
            });
            
        });
    });

    // --- [2] 모바일용 슬라이드 기능 (새로 추가) ---
function initMobileStepSlider() {
    const mobileSteps = document.querySelectorAll('.custom-panel .custom-menu');
    if (mobileSteps.length === 0) return; // 요소가 없으면 실행 안 함

    let currentIndex = 0;

    // 초기 상태: 1번만 보이고 나머지 숨김
    mobileSteps.forEach((s, idx) => {
        if(idx === 0) s.classList.add('on');
        else s.classList.remove('on');
    });

    // 모든 화살표 아이콘 클릭 이벤트
    document.querySelectorAll('.custom-panel .icon').forEach((icon) => {
        icon.onclick = function() {
            // 현재 화면 너비 체크 (1440 이하일 때만 작동하게 안전장치)
            if (window.innerWidth > 950) return;

            const imgAlt = this.querySelector('img').alt;
            
            // 현재 스텝 숨기기
            mobileSteps[currentIndex].classList.remove('on');

            if (imgAlt === "왼쪽버튼") {
                currentIndex = (currentIndex === 0) ? mobileSteps.length - 1 : currentIndex - 1;
            } else {
                currentIndex = (currentIndex === mobileSteps.length - 1) ? 0 : currentIndex + 1;
            }

            // 새 스텝 보여주기
            mobileSteps[currentIndex].classList.add('on');
         };
        });
        }

       
});
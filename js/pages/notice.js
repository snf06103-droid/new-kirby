document.addEventListener('DOMContentLoaded', function() {
    // 1. 모든 '.step' 버튼들을 가져옵니다.
    const notices = document.querySelectorAll('.notice-text');

    notices.forEach(function(notices) {
        notices.addEventListener('click', function() {
            // 2. 클릭한 'step' 버튼의 바로 다음에 있는 'active-grid'를 찾습니다.
            const targetGrid = this.nextElementSibling;
            
            // 3. 클릭한 버튼의 부모인 'custom-menu'에 active를 넣었다 뺐다 합니다.
            // (CSS에서 .custom-menu.active .active-grid 스타일을 조절한다고 가정)
            const parentMenu = this.closest('.custom-menu');
            parentMenu.classList.toggle('active');
            
            // 만약 '하나만 열리고 나머지는 닫히게' 하고 싶다면 아래 로직을 추가하세요.
            
            notices.forEach(otherStep => {
                if (otherStep !== notices) {
                    otherStep.closest('.custom-menu').classList.remove('active');
                }
            });
            
        });
    });
});
 document.addEventListener('DOMContentLoaded', () => {
 
 
    const btnBefore = document.querySelectorAll('.download .btn.before');
    const btnAfter = document.querySelectorAll('.download .btn.after');

    // 2. 각 버튼에 대해 반복문을 돌며 이벤트를 겁니다.
    btnBefore.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // 클릭된 그 버튼(btn)에 클래스 추가
            btn.classList.add('active');
            // 같은 순서(index)에 있는 'after' 버튼에도 클래스 추가
            btnAfter[index].classList.add('active');
        });
    });

    const download = document.querySelector('.coupon-box.download')
    const mycoupon = document.querySelector('.coupon-box.mycoupon')
    const expiringSoon = document.querySelector('.coupon-box.expiring-soon')

    const btnDown = document.querySelector('.btn-cp-option .down')
    const btnMy = document.querySelector('.btn-cp-option .my')
    const btnSoon = document.querySelector('.btn-cp-option .soon')

    // [함수] 모든 액티브 초기화 (싹 다 끄기)
    function resetActive() {
        // 모든 박스에서 active 제거
        download.classList.remove('active');
        mycoupon.classList.remove('active');
        expiringSoon.classList.remove('active');

        // 모든 버튼에서 active 제거
        btnDown.classList.remove('active');
        btnMy.classList.remove('active');
        btnSoon.classList.remove('active');
    }

    // 쿠폰 다운로드 탭
    btnDown.addEventListener('click', () => {
        resetActive();
        btnDown.classList.add('active');
        download.classList.add('active');
    });

    // 내 쿠폰 탭
    btnMy.addEventListener('click', () => {
        resetActive();
        btnMy.classList.add('active');
        mycoupon.classList.add('active');
    });

    // 만료 임박 탭
    btnSoon.addEventListener('click', () => {
        resetActive();
        btnSoon.classList.add('active');
        expiringSoon.classList.add('active');
    });

    // 4. 초기값 설정 (페이지 로드 시 btnDown 클릭 상태)
    btnDown.click();

 })
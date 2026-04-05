document.addEventListener("DOMContentLoaded", function() {


    const passwordInput = document.getElementById('user-password');
    const passwordToggle = document.getElementById('password-toggle');
    const passwordIcon = document.getElementById('password-icon');
    const passwordIconClosed = document.getElementById('password-icon-closed');

    passwordToggle.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // 아이콘 이미지 변경
        if (type === 'password') {
            // 보기 모드: eye.png 보이기, eye-closed.png 숨기기
            passwordIcon.style.display = 'block';
            passwordIconClosed.style.display = 'none';
        } else {
            // 마스크 모드: eye-closed.png 보이기, eye.png 숨기기
            passwordIcon.style.display = 'none';
            passwordIconClosed.style.display = 'block';
        }
    });


    // 비밀번호 확인란 요소 가져오기
    const pwConfirmInput = document.getElementById('user-password-confirm');
    const pwConfirmToggle = document.querySelector('.password-input-container #password-toggle');
    const pwConfirmIcon = document.getElementById('password-icon');
    const pwConfirmIconClosed = document.getElementById('password-icon-closed');

    // 클릭 이벤트 추가
    if (pwConfirmToggle) {
        pwConfirmToggle.addEventListener('click', function() {
            // 현재 타입이 password면 text로, 아니면 password로 변경
            const type = pwConfirmInput.getAttribute('type') === 'password' ? 'text' : 'password';
            pwConfirmInput.setAttribute('type', type);
            
            // 아이콘 이미지 변경
            if (type === 'password') {
                // 가려진 상태: 눈 뜬 아이콘 보이기
                pwConfirmIcon.style.display = 'block';
                pwConfirmIconClosed.style.display = 'none';
            } else {
                // 보여지는 상태: 눈 감은 아이콘 보이기
                pwConfirmIcon.style.display = 'none';
                pwConfirmIconClosed.style.display = 'block';
            }
        });
    }
    
    const checkAll = document.querySelector('#check-all');
    const checkboxes = document.querySelectorAll('.normal');

    // 1. 전체 동의 클릭 시
    checkAll.addEventListener('change', () => {
        checkboxes.forEach(cb => {
            cb.checked = checkAll.checked;
        });
    });

    // 2. 개별 항목 클릭 시 전체 동의 상태 업데이트
    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            const result = Array.from(checkboxes).every(box => box.checked);
            checkAll.checked = result;
        });
    });
})
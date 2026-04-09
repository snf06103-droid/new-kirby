document.addEventListener("DOMContentLoaded", function() {


    const passwordInput = document.getElementById('user-password');
    const passwordToggle = document.getElementById('password-toggle');
    const passwordIcon = document.getElementById('password-icon');
    const passwordIconClosed = document.getElementById('password-icon-closed');

    passwordToggle.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        if (type === 'password') {
            passwordIcon.style.display = 'block';
            passwordIconClosed.style.display = 'none';
        } else {
            passwordIcon.style.display = 'none';
            passwordIconClosed.style.display = 'block';
        }
    });


    const pwConfirmInput = document.getElementById('user-password-confirm');
    const pwConfirmToggle = document.querySelector('.password-input-container #password-toggle');
    const pwConfirmIcon = document.getElementById('password-icon');
    const pwConfirmIconClosed = document.getElementById('password-icon-closed');

    if (pwConfirmToggle) {
        pwConfirmToggle.addEventListener('click', function() {
            const type = pwConfirmInput.getAttribute('type') === 'password' ? 'text' : 'password';
            pwConfirmInput.setAttribute('type', type);
            
            if (type === 'password') {
                pwConfirmIcon.style.display = 'block';
                pwConfirmIconClosed.style.display = 'none';
            } else {
                pwConfirmIcon.style.display = 'none';
                pwConfirmIconClosed.style.display = 'block';
            }
        });
    }
    
    const checkAll = document.querySelector('#check-all');
    const checkboxes = document.querySelectorAll('.normal');

    checkAll.addEventListener('change', () => {
        checkboxes.forEach(cb => {
            cb.checked = checkAll.checked;
        });
    });

    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            const result = Array.from(checkboxes).every(box => box.checked);
            checkAll.checked = result;
        });
    });
})
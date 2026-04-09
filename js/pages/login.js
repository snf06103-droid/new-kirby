document.addEventListener("DOMContentLoaded", function() {

    const style = document.createElement('style');
    style.textContent = `
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        input[type="number"] {
            -moz-appearance: textfield;
        }
    `;
    document.head.appendChild(style);

    const loginRadio = document.getElementById('login');
    const nonmemberRadio = document.getElementById('nonmember');
    const loginSection = document.querySelector('.login');
    const nomembershipSection = document.querySelector('.nomembership');
    const signupSection = document.querySelector('.sign-up');

    loginRadio.addEventListener('change', function() {
        if (this.checked) {
            loginSection.style.display = 'block';
            nomembershipSection.style.display = 'none';
            signupSection.style.display = 'block';
        }
    });

    nonmemberRadio.addEventListener('change', function() {
        if (this.checked) {
            loginSection.style.display = 'none';
            nomembershipSection.style.display = 'block';
            signupSection.style.display = 'none';
        }
    });

    nomembershipSection.style.display = 'none';
    signupSection.style.display = 'block';

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
})
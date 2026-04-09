 document.addEventListener('DOMContentLoaded', () => {
 
 
    const btnBefore = document.querySelectorAll('.download .btn.before');
    const btnAfter = document.querySelectorAll('.download .btn.after');

    btnBefore.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            btn.classList.add('active');
            btnAfter[index].classList.add('active');
        });
    });

    const download = document.querySelector('.coupon-box.download')
    const mycoupon = document.querySelector('.coupon-box.mycoupon')
    const expiringSoon = document.querySelector('.coupon-box.expiring-soon')

    const btnDown = document.querySelector('.btn-cp-option .down')
    const btnMy = document.querySelector('.btn-cp-option .my')
    const btnSoon = document.querySelector('.btn-cp-option .soon')

    function resetActive() {
        download.classList.remove('active');
        mycoupon.classList.remove('active');
        expiringSoon.classList.remove('active');

        btnDown.classList.remove('active');
        btnMy.classList.remove('active');
        btnSoon.classList.remove('active');
    }

    btnDown.addEventListener('click', () => {
        resetActive();
        btnDown.classList.add('active');
        download.classList.add('active');
    });

    btnMy.addEventListener('click', () => {
        resetActive();
        btnMy.classList.add('active');
        mycoupon.classList.add('active');
    });

    btnSoon.addEventListener('click', () => {
        resetActive();
        btnSoon.classList.add('active');
        expiringSoon.classList.add('active');
    });

    btnDown.click();

 })
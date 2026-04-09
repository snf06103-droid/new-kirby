document.addEventListener('DOMContentLoaded', function() {
    const pcSteps = document.querySelectorAll('.custom-order.none-mo .step');
    pcSteps.forEach(function(step) {
        step.addEventListener('click', function() {
            const parentMenu = this.closest('.custom-menu');
            const isActive = parentMenu.classList.contains('active');
         
            document.querySelectorAll('.none-mo .custom-menu').forEach(m => m.classList.remove('active'));
        
            if (!isActive) parentMenu.classList.add('active');
        });
    });

    function initMobileStepSlider() {
        const mobileSteps = document.querySelectorAll('.custom-order.mo .custom-menu');
        const arrows = document.querySelectorAll('.custom-order.mo .icon');
        
        if (mobileSteps.length === 0) return;

        let currentIndex = 0;

        mobileSteps.forEach((s, idx) => {
            if (idx === 0) s.classList.add('on');
            else s.classList.remove('on');
        });

        arrows.forEach((icon) => {
            icon.onclick = function() {
                mobileSteps[currentIndex].classList.remove('on');

                const imgAlt = this.querySelector('img').alt;

                if (imgAlt === "왼쪽버튼") {
                    currentIndex = (currentIndex === 0) ? mobileSteps.length - 1 : currentIndex - 1;
                } else {
                    currentIndex = (currentIndex === mobileSteps.length - 1) ? 0 : currentIndex + 1;
                }

                mobileSteps[currentIndex].classList.add('on');
                console.log("현재 스텝:", currentIndex + 1);
            };
        });
    }

    initMobileStepSlider();
});
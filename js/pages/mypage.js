document.addEventListener('DOMContentLoaded', function() {
    // 모든 '.title-box' 요소들을 가져옵니다.
    const titleBoxes = document.querySelectorAll('.text-box');

    titleBoxes.forEach(function(titleBox) {
        titleBox.addEventListener('click', function() {
            // 클릭한 title-box의 부모 .notice-text를 찾습니다.
            const parentNotice = this.closest('.service-box');
            
            // 부모에 active 클래스를 토글합니다.
            parentNotice.classList.toggle('down');
        });
    });

    const statusButton = document.querySelector('.status-button')
    const orderList = document.querySelector('.order-list')
    const view = document.querySelector('.view')
    const statusActive = document.querySelector('.status-active')
    const customerService = document.querySelector('.customer-service')
    const statusbar = document.querySelector('.status-bar .bar')
    




});
document.addEventListener('DOMContentLoaded', function() {
    // 모든 '.title-box' 요소들을 가져옵니다.

    const params = new URLSearchParams(window.location.search);
    const currentActive = params.get('cur') 
    console.log(currentActive)
    if(currentActive){
        const contentsOfStatus = document.querySelectorAll(".status-active>div")
        const statusButton = document.querySelector('.status-button')
        statusButton.classList.add("hide")
        contentsOfStatus.forEach(tag=>tag.classList.add("active"))
    }


    const titleBoxes = document.querySelectorAll('.text-box');

    titleBoxes.forEach(function(titleBox) {
        titleBox.addEventListener('click', function() {
            // 클릭한 title-box의 부모 .notice-text를 찾습니다.
            const parentNotice = this.closest('.service-box');
            
            // 부모에 active 클래스를 토글합니다.
            parentNotice.classList.toggle('down');
        });
    });

    
    const orderList = document.querySelector('.order-list')
    const mypageBack = document.querySelector('.mypage-back')

    const view = document.querySelector('.view')
    const customerService = document.querySelector('.customer-service')

    const statusbar = document.querySelector('.status-bar .bar')

    const statusDesc = document.querySelector('.status-desc')
    const statusDesc2 = document.querySelector('.status-desc2')
    const statusDesc3 = document.querySelector('.status-desc3')
    
    // 1. 제어할 요소들을 배열로 묶어줍니다 (나중에 한꺼번에 처리하기 위함)
    // const targets = [statusButton, orderList, view, customerService, statusbar, statusDesc, statusDesc2, statusDesc3, mypageBack];

    // 2. statusButton 클릭 시 active 추가
    // statusButton.addEventListener('click', () => {
    //     targets.forEach(el => {
    //         if (el) el.classList.add('active');
    //     });
    // });

    // 3. orderList 클릭 시 active 추가
    // orderList.addEventListener('click', () => {
    //     targets.forEach(el => {
    //         if (el) el.classList.add('active');
    //     });
    // });

    // 4. mypageBack 클릭 시 모든 active 제거
//     if (mypageBack) {
//     mypageBack.addEventListener('click', () => {
//         targets.forEach(el => {
//             if (el) el.classList.remove('active');
//         });
        
//         // 추가로 자기 자신(mypageBack)이나 다른 버튼들의 상태도 초기화하고 싶다면 여기에 작성
//     });
// }




});
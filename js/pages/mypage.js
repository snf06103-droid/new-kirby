document.addEventListener('DOMContentLoaded', function() {
  
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
          
            const parentNotice = this.closest('.service-box');
            
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
 




});
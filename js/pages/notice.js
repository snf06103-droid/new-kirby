document.addEventListener('DOMContentLoaded', function() {
  
    const titleBoxes = document.querySelectorAll('.title-box');

    titleBoxes.forEach(function(titleBox) {
        titleBox.addEventListener('click', function() {
           
            const parentNotice = this.closest('.notice-text');
            
          
            parentNotice.classList.toggle('active');
            
           
            document.querySelectorAll('.notice-text').forEach(function(otherNotice) {
                if (otherNotice !== parentNotice) {
                    otherNotice.classList.remove('active');
                }
            });
        });
    });
});
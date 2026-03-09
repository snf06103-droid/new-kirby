document.addEventListener('DOMContentLoaded', function() {
    // 모든 '.title-box' 요소들을 가져옵니다.
    const titleBoxes = document.querySelectorAll('.title-box');

    titleBoxes.forEach(function(titleBox) {
        titleBox.addEventListener('click', function() {
            // 클릭한 title-box의 부모 .notice-text를 찾습니다.
            const parentNotice = this.closest('.notice-text');
            
            // 부모에 active 클래스를 토글합니다.
            parentNotice.classList.toggle('active');
            
            // 다른 모든 .notice-text에서 active 클래스를 제거합니다.
            document.querySelectorAll('.notice-text').forEach(function(otherNotice) {
                if (otherNotice !== parentNotice) {
                    otherNotice.classList.remove('active');
                }
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {

    // 1. 클릭할 영역과 움직일 부모 요소를 가져옵니다.
    const noticeBtn = document.querySelector('.notice span');
    const noticeBox = document.querySelector('.notice');

    // 2. 클릭 이벤트 추가
    noticeBtn.addEventListener('click', () => {
        // noticeBox에 'active' 클래스가 있으면 빼고, 없으면 넣습니다.
        noticeBox.classList.toggle('active');
    });


    const pageSpans = document.querySelectorAll('.paginatioin span');
    // 숫자만 골라내기 (이미지가 들어있는 첫 번째와 마지막 span 제외)
    const numPages = Array.from(pageSpans).slice(1, -1); 
    const prevBtn = pageSpans[0];
    const nextBtn = pageSpans[pageSpans.length - 1];

    let currentIndex = 0; // 현재 1페이지 (인덱스 0)

    // [함수] 화면 업데이트
    function updatePage(index) {
        numPages.forEach(span => span.classList.remove('on')); // 일단 다 끄고
        numPages[index].classList.add('on'); // 해당 숫자만 켜기
        currentIndex = index;
    }

    // 1. 숫자 클릭 시 이동
    numPages.forEach((span, index) => {
        span.addEventListener('click', () => updatePage(index));
    });

    // 2. 왼쪽 화살표 클릭
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) updatePage(currentIndex - 1);
    });

    // 3. 오른쪽 화살표 클릭
    nextBtn.addEventListener('click', () => {
        if (currentIndex < numPages.length - 1) updatePage(currentIndex + 1);
    });

    // 초기 설정 (첫 페이지 활성화)
    updatePage(0);
})
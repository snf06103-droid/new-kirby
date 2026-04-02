async function loadHead() {
    try {
        const response = await fetch('head-common.html');
        const data = await response.text();
        // 현재 페이지 head의 가장 처음에 공통 태그 삽입
        document.head.insertAdjacentHTML('afterbegin', data);
    } catch (error) {
        console.error('헤더 로드 실패:', error);
    }
}

loadHead();
async function loadHead() {
    try {
        const response = await fetch('head-common.html');
        const data = await response.text();
        document.head.insertAdjacentHTML('afterbegin', data);
    } catch (error) {
        console.error('헤더 로드 실패:', error);
    }
}

loadHead();
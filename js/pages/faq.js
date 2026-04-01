document.addEventListener('DOMContentLoaded', () => {
    // 1. PC용 버튼(.none-mo 내의 cover)과 모바일용 버튼(.mo 내의 li)을 모두 가져옵니다.
    const pcButtons = document.querySelectorAll('.none-mo .cover');
    const moButtons = document.querySelectorAll('.horizontal-scroll-list li');
    
    // 2. 보여줄 내용 클래스들 (순서대로 매칭)
    const targets = [".all", ".product", ".delivery", ".exchange", ".as", ".edit", ".coupon", ".other"];

    // [함수] 클릭했을 때 실행될 공통 로직
    function handleFaqClick(index, btn) {
        // 모든 버튼(PC + 모바일)에서 active 클래스 제거
        pcButtons.forEach(b => b.classList.remove('active'));
        moButtons.forEach(b => b.classList.remove('active'));

        // 클릭한 버튼에 active 추가 (PC/모바일 둘 다 표시되게 처리)
        if(pcButtons[index]) pcButtons[index].classList.add('active');
        if(moButtons[index]) moButtons[index].classList.add('active');

        // 모든 FAQ 내용 숨기기
        document.querySelectorAll('.faq-content').forEach(content => {
            content.classList.remove('active');
        });

        // 클릭한 순서(index)에 맞는 내용만 보이기
        const targetClass = targets[index];
        document.querySelectorAll(targetClass).forEach(target => {
            target.classList.add('active');
        });
    }

    // 3. PC 버튼들에 이벤트 연결
    pcButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => handleFaqClick(index, btn));
    });

    // 4. 모바일 버튼들에 이벤트 연결 (이게 빠져있어서 안 됐던 거예요!)
    moButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => handleFaqClick(index, btn));
    });

    // 5. 처음에 '전체보기(0번)' 강제 클릭
    if(pcButtons[0]) pcButtons[0].click();
});
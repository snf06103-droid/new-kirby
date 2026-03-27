document.addEventListener('DOMContentLoaded', () => {

    // 옵션 선택창 누르면 내려오는 기능
    const optionBtn = document.querySelectorAll('.option-selector button')

    optionBtn.forEach((btn)=>{

        btn.addEventListener('click',()=>{

            const parent = btn.closest('.option-selector');
            if (parent) {
            parent.classList.toggle('active');
        }

        })

    })

    // 좋아요 버튼 눌리면 바뀌는 기능
    const heart = document.querySelector('.heart')
    const heartClick = document.querySelector('.heart-click')
    heart.addEventListener('click',()=>{
        heart.classList.toggle('active')
        heartClick.classList.toggle('active')
    })

    heartClick.addEventListener('click',()=>{
        heart.classList.toggle('active')
        heartClick.classList.toggle('active')
    })

    //상세페이지 더보기 누르면 상세페이지 늘어나는 기능 
    const detailMoreBtn = document.querySelector('.detail-more-btn')
    const imgContainer = document.querySelector('.img-container')

    detailMoreBtn.addEventListener('click',()=>{
        imgContainer.classList.add('active')
    })



    //qna눌렀을 때 답변 내려오는 기능
    // 모든 '.title-box' 요소들을 가져옵니다.
    const titleBoxes = document.querySelectorAll('.title-box');

    titleBoxes.forEach(function(titleBox) {
        titleBox.addEventListener('click', function() {
            // 클릭한 title-box의 부모 .qna-text를 찾습니다.
            const parentNotice = this.closest('.qna-text');
            
            const icon = this.querySelector('.icon');
            const iconClick = this.querySelector('.icon-click');

            // 3. 일단 다른 모든 .qna-text들에서 active를 싹 제거 (하나만 열리게)
        document.querySelectorAll('.qna-text').forEach(function(otherNotice) {
            if (otherNotice !== parentNotice) {
                otherNotice.classList.remove('active');
                // 다른 박스 안의 요소들도 같이 꺼주고 싶다면 아래처럼 처리
                otherNotice.querySelector('.title-box')?.classList.remove('active');
            }
        });
            
            // 4. 내가 클릭한 것들에만 active 토글 (껐다 켰다)
        parentNotice.classList.toggle('active');
        this.classList.toggle('active'); // titleBox 본인
        if(icon) icon.classList.toggle('active');
        if(iconClick) iconClick.classList.toggle('active');
        });
    });


    // 상세페이지 스티키 메뉴 누르면 이동하는 기능
    const btnDetail = document.querySelector('.sticky-menu-wrap .btn-detail')
    const btnReview = document.querySelector('.sticky-menu-wrap .btn-review')
    const btnQna = document.querySelector('.sticky-menu-wrap .btn-qna')
    const btnService = document.querySelector('.sticky-menu-wrap .btn-service')

    const detail = document.querySelector('.detail-caregoty-wrap .detail')
    const review = document.querySelector('.detail-caregoty-wrap .review')
    const qna = document.querySelector('.detail-caregoty-wrap .qna')
    const service = document.querySelector('.detail-caregoty-wrap .service')

    btnDetail.addEventListener('click',()=>{
        
    })


})
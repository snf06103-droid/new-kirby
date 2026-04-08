document.addEventListener('DOMContentLoaded', () => {

    






    // 1. 주소창의 ?id=50 에서 50이라는 숫자를 가져옵니다.
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    // 2. allProduct 배열에서 클릭한 id와 똑같은 상품을 찾습니다.
    const product = allProduct.find(p => String(p.id) === productId);

    // 3. 상품을 찾았다면 화면의 글자와 사진을 바꿉니다.
    if (product) {
        // [텍스트 교체]
        const nameEl = document.querySelector('.product-name');
        const categoryEl = document.querySelector('.price-container .category');
        const priceEl = document.querySelector('.final-price');
        const originalPriceEl = document.querySelector('.price .body2.light');

        if (nameEl) nameEl.innerText = product.name;
        if (categoryEl) categoryEl.innerText = `products > ${product.category}`;
        if (originalPriceEl) originalPriceEl.innerText = `${Number(product.price).toLocaleString()}원`;
        
        // 할인가 계산 (예시: 30% 할인된 금액으로 표시)
        if (priceEl) {
            const discountPrice = Math.floor(Number(product.price) * 0.7);
            priceEl.innerText = `${discountPrice.toLocaleString()}원`;
        }

        // [스와이퍼 이미지 교체]
        const swiperImgs = document.querySelectorAll('.mySwiper2 .swiper-slide img, .mySwiper .swiper-slide img');
        
        // detailImages 배열이 비어있으면 기본/호버 이미지를 대신 사용하도록 설정
        const imgList = (product.detailImages && product.detailImages.length > 0) 
                        ? product.detailImages 
                        : [product.img, product.hoverImg, product.img];

        swiperImgs.forEach((img, idx) => {
            const imgName = imgList[idx % imgList.length];
            // 만약 데이터에 .jpg가 없다면 붙여주고, 있으면 그대로 둡니다.
            const fileName = imgName.includes('.') ? imgName : `${imgName}.jpg`;
            const imagePath = (product.detailImages && product.detailImages.length > 0)
                ? `../../images/detail-page/main-swiper/${fileName}`
                : `../../images/list/all/${fileName}`;
            img.src = imagePath;
        });

        // [상세 설명 긴 이미지 교체]
        const descImg = document.querySelector('.detail .img-container img');
        if (descImg && product.descriptionImg) {
            descImg.src = `../../images/detail-page/detail/${product.descriptionImg}`;
        }
    }



    


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

    //모든 버튼과 컨텐츠의 active를 끄는 리셋 함수
    function resetTabs() {
        [btnDetail, btnReview, btnQna, btnService].forEach(btn => btn?.classList.remove('active'));
        [detail, review, qna, service].forEach(cont => cont?.classList.remove('active'));
    }

    btnDetail.addEventListener('click',function(){
        resetTabs()
        this.classList.toggle('active')
        detail.classList.toggle('active')
    })

    btnReview.addEventListener('click',function(){
        resetTabs()
        this.classList.toggle('active')
        review.classList.toggle('active')
    })

    btnQna.addEventListener('click',function(){
        resetTabs()
        this.classList.toggle('active')
        qna.classList.toggle('active')
    })

    btnService.addEventListener('click',function(){
        resetTabs()
        this.classList.toggle('active')
        service.classList.toggle('active')
    })

    // 초기 실행: 첫 로딩 시 상세페이지 활성화
    btnDetail.click()


})
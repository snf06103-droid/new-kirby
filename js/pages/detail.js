// document.addEventListener('DOMContentLoaded', () => {

    
//     const params = new URLSearchParams(window.location.search);
//     const productId = params.get('id');
//     const product = allProduct.find(p => String(p.id) === productId);

//     if (product) {

//         const nameEl = document.querySelector('.product-name');
//         const categoryEl = document.querySelector('.price-container .category');
//         const priceEl = document.querySelector('.final-price');
//         const originalPriceEl = document.querySelector('.price .body2.light');

//         if (nameEl) nameEl.innerText = product.name;
//         if (categoryEl) categoryEl.innerText = `products > ${product.category}`;
//         if (originalPriceEl) originalPriceEl.innerText = `${Number(product.price).toLocaleString()}원`;
        
//         if (priceEl) {
//             const discountPrice = Math.floor(Number(product.price) * 0.7);
//             priceEl.innerText = `${discountPrice.toLocaleString()}원`;
//         }

//         const swiperImgs = document.querySelectorAll('.mySwiper2 .swiper-slide img, .mySwiper .swiper-slide img');
        
//         const imgList = (product.detailImages && product.detailImages.length > 0) 
//                         ? product.detailImages 
//                         : [product.img, product.hoverImg, product.img];

//         swiperImgs.forEach((img, idx) => {
//             const imgName = imgList[idx % imgList.length];
//             const fileName = imgName.includes('.') ? imgName : `${imgName}.jpg`;
//             const imagePath = (product.detailImages && product.detailImages.length > 0)
//                 ? `../../images/detail-page/main-swiper/${fileName}`
//                 : `../../images/list/all/${fileName}`;
//             img.src = imagePath;
//         });

//         const descImg = document.querySelector('.detail .img-container img');
//         if (descImg && product.descriptionImg) {
//             descImg.src = `../../images/detail-page/detail/${product.descriptionImg}`;
//         }
//     }




//     const optionBtn = document.querySelectorAll('.option-selector button')

//     optionBtn.forEach((btn)=>{

//         btn.addEventListener('click',()=>{

//             const parent = btn.closest('.option-selector');
//             if (parent) {
//             parent.classList.toggle('active');
//         }

//         })

//     })

//     const heart = document.querySelector('.heart')
//     const heartClick = document.querySelector('.heart-click')
//     heart.addEventListener('click',()=>{
//         heart.classList.toggle('active')
//         heartClick.classList.toggle('active')
//     })

//     heartClick.addEventListener('click',()=>{
//         heart.classList.toggle('active')
//         heartClick.classList.toggle('active')
//     })

//     const detailMoreBtns = document.querySelectorAll('.detail-more-btn')
//     const imgContainers = document.querySelectorAll('.detail-caregoty-wrap .detail .img-container')

//     detailMoreBtns.forEach((btn, idx) => {
//         btn.addEventListener('click',()=>{
//             imgContainers[idx].classList.add('active')
//             btn.classList.toggle('active')
            
//             const textNode = btn.childNodes[0];
//             if(textNode) {
//                 textNode.textContent = btn.classList.contains('active') ? '접기 ' : '상품정보 더보기 ';
//             }
//         })
//     })



//     const titleBoxes = document.querySelectorAll('.title-box');

//     titleBoxes.forEach(function(titleBox) {
//         titleBox.addEventListener('click', function() {
//             const parentNotice = this.closest('.qna-text');
            
//             const icon = this.querySelector('.icon');
//             const iconClick = this.querySelector('.icon-click');

//         document.querySelectorAll('.qna-text').forEach(function(otherNotice) {
//             if (otherNotice !== parentNotice) {
//                 otherNotice.classList.remove('active');
//                 otherNotice.querySelector('.title-box')?.classList.remove('active');
//             }
//         });
            
//         parentNotice.classList.toggle('active');
//         this.classList.toggle('active'); 
//         if(icon) icon.classList.toggle('active');
//         if(iconClick) iconClick.classList.toggle('active');
//         });
//     });

//     const commonFrames = document.querySelectorAll('.detail-wrap > .common-frame');

//     commonFrames.forEach(frame => {
//         const btnDetail = frame.querySelector('.sticky-menu-wrap .btn-detail')
//         const btnReview = frame.querySelector('.sticky-menu-wrap .btn-review')
//         const btnQna = frame.querySelector('.sticky-menu-wrap .btn-qna')
//         const btnService = frame.querySelector('.sticky-menu-wrap .btn-service')

//         const detail = frame.querySelector('.detail-caregoty-wrap .detail')
//         const review = frame.querySelector('.detail-caregoty-wrap .review')
//         const qna = frame.querySelector('.detail-caregoty-wrap .qna')
//         const service = frame.querySelector('.detail-caregoty-wrap .service')

//         function resetTabs() {
//             [btnDetail, btnReview, btnQna, btnService].forEach(btn => btn?.classList.remove('active'));
//             [detail, review, qna, service].forEach(cont => cont?.classList.remove('active'));
//         }

//         if(btnDetail) {
//             btnDetail.addEventListener('click',function(e){
//                 e.preventDefault()
//                 resetTabs()
//                 this.classList.toggle('active')
//                 detail.classList.toggle('active')
//             })
//         }

//         if(btnReview) {
//             btnReview.addEventListener('click',function(e){
//                 e.preventDefault()
//                 resetTabs()
//                 this.classList.toggle('active')
//                 review.classList.toggle('active')
//             })
//         }

//         if(btnQna) {
//             btnQna.addEventListener('click',function(e){
//                 e.preventDefault()
//                 resetTabs()
//                 this.classList.toggle('active')
//                 qna.classList.toggle('active')
//             })
//         }

//         if(btnService) {
//             btnService.addEventListener('click',function(e){
//                 e.preventDefault()
//                 resetTabs()
//                 this.classList.toggle('active')
//                 service.classList.toggle('active')
//             })
//         }

//         if(btnDetail) btnDetail.click()
//     })


// })

document.addEventListener('DOMContentLoaded', () => {

    /* 1. 상품 상세 정보 로드 */
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    
    // allProduct 데이터가 존재하는지 확인 후 실행
    if (typeof allProduct !== 'undefined') {
        const product = allProduct.find(p => String(p.id) === productId);

        if (product) {
            const nameEl = document.querySelector('.product-name');
            const categoryEl = document.querySelector('.price-container .category');
            const priceEl = document.querySelector('.final-price');
            const originalPriceEl = document.querySelector('.price .body2.light');

            if (nameEl) nameEl.innerText = product.name;
            if (categoryEl) categoryEl.innerText = `products > ${product.category}`;
            if (originalPriceEl) originalPriceEl.innerText = `${Number(product.price).toLocaleString()}원`;
            
            if (priceEl) {
                const discountPrice = Math.floor(Number(product.price) * 0.7);
                priceEl.innerText = `${discountPrice.toLocaleString()}원`;
            }

            const swiperImgs = document.querySelectorAll('.mySwiper2 .swiper-slide img, .mySwiper .swiper-slide img');
            const imgList = (product.detailImages && product.detailImages.length > 0) 
                            ? product.detailImages 
                            : [product.img, product.hoverImg, product.img];

            swiperImgs.forEach((img, idx) => {
                const imgName = imgList[idx % imgList.length];
                if (!imgName) return; // 이미지 명이 없을 경우 방지
                const fileName = imgName.includes('.') ? imgName : `${imgName}.jpg`;
                const imagePath = (product.detailImages && product.detailImages.length > 0)
                    ? `../../images/detail-page/main-swiper/${fileName}`
                    : `../../images/list/all/${fileName}`;
                img.src = imagePath;
            });

            const descImg = document.querySelector('.detail .img-container img');
            if (descImg && product.descriptionImg) {
                descImg.src = `../../images/detail-page/detail/${product.descriptionImg}`;
            }
        }
    }

    /* 2. 옵션 선택창 토글 */
    const optionBtn = document.querySelectorAll('.option-selector button');
    optionBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            const parent = btn.closest('.option-selector');
            if (parent) {
                parent.classList.toggle('active');
            }
        });
    });

    /* 3. 찜 버튼 (모바일 대응 및 안정화) */
const heart = document.querySelector('.heart');
const heartClick = document.querySelector('.heart-click');

if (heart && heartClick) {
    // 공통 실행 함수
    const toggleHeart = (e) => {
        e.preventDefault(); // 기본 동작 방지
        e.stopPropagation(); // 이벤트 버블링 방지 (부모 요소 클릭 방지)
        
        heart.classList.toggle('active');
        heartClick.classList.toggle('active');
        
        console.log("Heart Toggled!"); // 디버깅용 (작동 확인 후 삭제 가능)
    };

    // 클릭 이벤트 등록
    heart.addEventListener('click', toggleHeart);
    heartClick.addEventListener('click', toggleHeart);

    // 모바일에서 클릭이 씹히는 경우를 대비해 touchstart 추가 (선택 사항)
    // heart.addEventListener('touchstart', toggleHeart, { passive: false });
}

    /* 4. 상세보기 더보기 버튼 */
    const detailMoreBtns = document.querySelectorAll('.detail-more-btn');
    const imgContainers = document.querySelectorAll('.detail-caregoty-wrap .detail .img-container');

    detailMoreBtns.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            if (imgContainers[idx]) {
                imgContainers[idx].classList.add('active');
            }
            btn.classList.toggle('active');
            
            const textNode = btn.childNodes[0];
            if (textNode) {
                textNode.textContent = btn.classList.contains('active') ? '접기 ' : '상품정보 더보기 ';
            }
        });
    });

    /* 5. Q&A 아코디언 */
    const titleBoxes = document.querySelectorAll('.title-box');
    titleBoxes.forEach(function(titleBox) {
        titleBox.addEventListener('click', function() {
            const parentNotice = this.closest('.qna-text');
            if (!parentNotice) return;
            
            const icon = this.querySelector('.icon');
            const iconClick = this.querySelector('.icon-click');

            document.querySelectorAll('.qna-text').forEach(function(otherNotice) {
                if (otherNotice !== parentNotice) {
                    otherNotice.classList.remove('active');
                    const otherTitle = otherNotice.querySelector('.title-box');
                    if (otherTitle) otherTitle.classList.remove('active');
                }
            });
            
            parentNotice.classList.toggle('active');
            this.classList.toggle('active'); 
            if (icon) icon.classList.toggle('active');
            if (iconClick) iconClick.classList.toggle('active');
        });
    });

    /* 6. 상세페이지 탭 메뉴 */
    const commonFrames = document.querySelectorAll('.detail-wrap > .common-frame');

    commonFrames.forEach(frame => {
        const btnDetail = frame.querySelector('.sticky-menu-wrap .btn-detail');
        const btnReview = frame.querySelector('.sticky-menu-wrap .btn-review');
        const btnQna = frame.querySelector('.sticky-menu-wrap .btn-qna');
        const btnService = frame.querySelector('.sticky-menu-wrap .btn-service');

        const detail = frame.querySelector('.detail-caregoty-wrap .detail');
        const review = frame.querySelector('.detail-caregoty-wrap .review');
        const qna = frame.querySelector('.detail-caregoty-wrap .qna');
        const service = frame.querySelector('.detail-caregoty-wrap .service');

        function resetTabs() {
            [btnDetail, btnReview, btnQna, btnService].forEach(btn => {
                if (btn) btn.classList.remove('active');
            });
            [detail, review, qna, service].forEach(cont => {
                if (cont) cont.classList.remove('active');
            });
        }

        if (btnDetail && detail) {
            btnDetail.addEventListener('click', function(e) {
                e.preventDefault();
                resetTabs();
                this.classList.add('active');
                detail.classList.add('active');
            });
        }

        if (btnReview && review) {
            btnReview.addEventListener('click', function(e) {
                e.preventDefault();
                resetTabs();
                this.classList.add('active');
                review.classList.add('active');
            });
        }

        if (btnQna && qna) {
            btnQna.addEventListener('click', function(e) {
                e.preventDefault();
                resetTabs();
                this.classList.add('active');
                qna.classList.add('active');
            });
        }

        if (btnService && service) {
            btnService.addEventListener('click', function(e) {
                e.preventDefault();
                resetTabs();
                this.classList.add('active');
                service.classList.add('active');
            });
        }

        // 초기 로드 시 상세 탭 활성화
        if (btnDetail) btnDetail.click();
    });
});
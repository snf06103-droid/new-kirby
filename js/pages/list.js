// [1] 전역 상태 변수
let currentSort = 'default'; // 기본값: 신상품순(데이터 순서)
let currentPage = 1;
const itemsPerPage = 9;
let currentCategory = 'all';

// [2] 페이지 변경 함수
function changePage(pageNumber) {
    currentPage = pageNumber;
    renderProducts();
    // window.scrollTo(0, 500); // 페이지 이동 시 리스트 시작점으로 스크롤 (선택사항)
}

// [3] 페이지네이션 버튼 생성 함수
function renderPagination(totalItems) {
    const paginationContainer = document.querySelector(".pagination-container");
    if (!paginationContainer) return;

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let paginationHtml = '';
    
    for (let i = 1; i <= totalPages; i++) {
        // 현재 페이지(currentPage)와 버튼 번호(i)가 같으면 'active' 클래스 추가
        paginationHtml += `
            <button class="page-num ${i === currentPage ? 'active' : ''}" 
                    onclick="changePage(${i})">${i}</button>
        `;
    }
    paginationContainer.innerHTML = paginationHtml;
}

// [4] 제품 리스트 및 배너 그리기 함수
function renderProducts() {
    const productGrid = document.querySelector(".product-grid");
    const banner = document.getElementById("main-banner");
    if (!productGrid) return;

    // 1. 배너 이미지 업데이트 (all일 때는 기본 chair 이미지)
    if (banner) {
        const bannerImg = currentCategory === 'all' ? 'chair' : currentCategory;
        banner.style.background = `url(../../images/list/banner/${bannerImg}.jpg) no-repeat 50% 50% / cover`;
    }

    // 2. 카테고리 필터링
    const filtered = currentCategory === 'all' 
        ? allProduct 
        : allProduct.filter(p => p.category === currentCategory);

    // 3. 페이지네이션 슬라이싱
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedProducts = filtered.slice(startIndex, endIndex);

    // 4. 상품 그리드 생성
    productGrid.innerHTML = slicedProducts.map(product => `
        <li class="product-list">
            <figure class="hover-box">
                <a href="../../pages/shop/detail.html?id=${product.id}">
                    <img src="../../images/list/all/${product.img}" class="main-img" alt="${product.name}">
                    <img src="../../images/list/all/${product.hoverImg}" class="hover-img" alt="${product.name} 호버">
                </a>
            </figure>
            <div class="product-description">
                <div class="product-name">
                    <p>${product.name}</p>
                    <h4>${Number(product.price).toLocaleString()}원</h4>
                </div>
                <div class="product-option">
                    <div class="size"><p>SIZE</p><p class="gray">맞춤제작가능</p></div>
                    <div class="color">
                         <p>COLOR</p>
                         <div class="color-box">
                             <div class="color-ball">
                                 <span><img src="../../images/list/color-ball/yellow.png" alt="노란색"></span>
                                 <span><img src="../../images/list/color-ball/navy.png" alt="네이비"></span>
                                 <span><img src="../../images/list/color-ball/green.png" alt="그린"></span>
                                 <span><img src="../../images/list/color-ball/orange.png" alt="오렌지"></span>
                                 <span><img src="../../images/list/color-ball/pink.png" alt="핑크"></span>
                             </div>
                             <figure><img src="../../assets/icons/plus2.png" alt="더보기버튼"></figure>
                         </div>
                    </div>
                </div>
            </div>
        </li>
    `).join('');

    // 5. 페이지네이션 버튼 다시 그리기
    renderPagination(filtered.length);
}

// [5] 카테고리 클릭 이벤트 초기화
function initCategoryEvents() {
    const menus = document.querySelectorAll(".product-types li");
    const labelSpan = document.querySelector('.select-label span');
    
    menus.forEach(menu => {
        menu.addEventListener("click", () => {
            // 클릭한 메뉴의 첫 번째 클래스를 카테고리로 사용
            currentCategory = menu.classList[0]; 
            currentPage = 1; 

            // 주소창 변경 (새로고침 없이)
            const newURL = `${window.location.pathname}?type=${currentCategory}`;
            window.history.pushState({ path: newURL }, '', newURL);

            // UI 활성화 (글자 진하게)
            menus.forEach(m => m.classList.remove('active'));
            menu.classList.add('active');

            // 셀렉트 박스 텍스트 변경
            if (labelSpan) labelSpan.innerText = menu.innerText;

            // 화면 갱신 (리스트 + 배너)
            renderProducts();
        });
    });
}

// [6] 실행 (DOM 로드 후)
document.addEventListener('DOMContentLoaded', function() {
    // 1. 주소창 파라미터 확인
    const params = new URLSearchParams(window.location.search);
    const urlType = params.get('type'); 

    if (urlType) {
        currentCategory = urlType;
        
        // 해당 메뉴 버튼 active 처리
        const menus = document.querySelectorAll(".product-types li");
        menus.forEach(m => {
            if(m.classList.contains(urlType)) {
                m.classList.add('active');
                // 셀렉트 박스 이름도 맞춰주기
                const labelSpan = document.querySelector('.select-label span');
                if (labelSpan) labelSpan.innerText = m.innerText;
            }
        });
    }

    // 2. 드롭다운(정렬) 로직
    const selectLabel = document.querySelector('.select-label');
    const selectBox = document.querySelector('.select-box');
    if (selectLabel && selectBox) {
        selectLabel.addEventListener('click', () => selectBox.classList.toggle('active'));
        document.addEventListener('click', (e) => {
            if (!selectBox.contains(e.target)) selectBox.classList.remove('active');
        });
    }

    // 3. 초기 실행
    initCategoryEvents(); 
    renderProducts(); 
});
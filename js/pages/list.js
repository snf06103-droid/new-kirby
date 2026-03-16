// [1] 전역 상태 변수 (파일 최상단)
let currentPage = 1;
const itemsPerPage = 9;
let currentCategory = 'all';

// [2] 페이지 변경 함수 (전역 - HTML onclick에서 접근 가능해야 함)
function changePage(pageNumber) {
    currentPage = pageNumber;
    renderProducts(); // 화면 갱신
    //window.scrollTo(0, 0); // 상단으로 스크롤
}

// [3] 페이지네이션 버튼 생성 함수
function renderPagination(totalItems) {
    const paginationContainer = document.querySelector(".pagination-container");
    if (!paginationContainer) return;

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let paginationHtml = '';
    
    // 이전 버튼이나 화살표가 필요하면 여기에 추가 가능
    for (let i = 1; i <= totalPages; i++) {
        paginationHtml += `
            <button class="page-num ${i === currentPage ? 'active' : ''}" 
                    onclick="changePage(${i})">${i}</button>
        `;
    }
    paginationContainer.innerHTML = paginationHtml;
}

// [4] 제품 리스트 화면 그리기 함수
function renderProducts() {
    const productGrid = document.querySelector(".product-grid");
    if (!productGrid) return;

    // 카테고리 필터링 (allProduct인지 allProducts인지 데이터 파일 변수명 꼭 확인!)
    const filtered = currentCategory === 'all' 
        ? allProduct 
        : allProduct.filter(p => p.category === currentCategory);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedProducts = filtered.slice(startIndex, endIndex);

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
                    <h4>${product.price}원</h4>
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

    renderPagination(filtered.length);
    console.log(`${currentCategory} 카테고리 ${currentPage}페이지 그리기 완료`);
}

// [5] 카테고리 이벤트 초기화 함수
function initCategoryEvents() {
    const menus = document.querySelectorAll(".product-types li");
    
    menus.forEach(menu => {
        menu.addEventListener("click", () => {
            // 1. 클릭한 메뉴의 클래스명을 카테고리로 저장 (예: chair, sofa)
            currentCategory = menu.classList[0]; 
            currentPage = 1; 

            // 2. ⭐ [추가된 핵심] 페이지 이동 없이 주소창 꼬리표만 살짝 변경
            // 이 줄이 있어야 새로고침해도 현재 카테고리가 유지됩니다.
            const newURL = `${window.location.pathname}?type=${currentCategory}`;
            window.history.pushState({ path: newURL }, '', newURL);

            // 3. UI 활성화 표시 (기존 코드와 동일)
            menus.forEach(m => m.classList.remove('active'));
            menu.classList.add('active');

            // 4. 상품 리스트 새로 그리기 (기존 코드와 동일)
            renderProducts();

            // 5. [추가] '전체상품'이라고 적힌 셀렉트 박스 텍스트도 바꿔주면 더 친절하겠죠?
            const labelSpan = document.querySelector('.select-label span');
            if (labelSpan) labelSpan.innerText = menu.innerText;
        });
    });
}

// [6] 실행 (DOM 로드 후)
document.addEventListener('DOMContentLoaded', function() {

    // 1. 주소창에서 카테고리 정보 읽어오기
    const params = new URLSearchParams(window.location.search);
    const urlType = params.get('type'); // 'chair', 'sofa' 등을 가져옴

    // 2. 만약 주소창에 정보가 있다면 그 카테고리를 선택, 없으면 'all'
    if (urlType) {
        currentCategory = urlType;
        
        // 메뉴 버튼들도 활성화 상태(active)로 바꿔줘야 시각적으로 일치함
        const menus = document.querySelectorAll(".product-types li");
        menus.forEach(m => {
            if(m.classList.contains(urlType)) {
                m.classList.add('active');
            } else {
                m.classList.remove('active');
            }
        });
    }

    // 3. 필터링된 결과로 화면 그리기
    renderProducts();
    
    // 4. 기존 카테고리 클릭 이벤트(리스트 페이지 내 버튼)는 그대로 유지
    initCategoryEvents();


    // 드롭다운 로직
    const selectLabel = document.querySelector('.select-label');
    const selectBox = document.querySelector('.select-box');
    if (selectLabel && selectBox) {
        selectLabel.addEventListener('click', () => selectBox.classList.toggle('active'));
        document.addEventListener('click', (e) => {
            if (!selectBox.contains(e.target)) selectBox.classList.remove('active');
        });
    }

    initCategoryEvents(); 
    renderProducts(); // 초기 화면 렌더링
});
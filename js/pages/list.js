let currentSort = 'default'; 
let currentPage = 1;
let currentCategory = 'all';

let itemsPerPage = window.innerWidth < 768 ? 6 : 9;

window.addEventListener('resize', () => {
    const newItemsPerPage = window.innerWidth < 768 ? 6 : 9;
    if (itemsPerPage !== newItemsPerPage) {
        itemsPerPage = newItemsPerPage;
        currentPage = 1; 
        renderProducts(); 
    }
});

function changePage(pageNumber) {
   
    currentPage = pageNumber;
    renderProducts(); 
  
}

function renderPagination(totalItems) {
    const paginationContainer = document.querySelector(".pagination-container");
    if (!paginationContainer) return;

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageGroupSize = 5; 
    
    const currentGroup = Math.floor((currentPage - 1) / pageGroupSize);
    
    let startPage = currentGroup * pageGroupSize + 1;
    let endPage = startPage + pageGroupSize - 1;
    
    if (endPage > totalPages) endPage = totalPages;

    let paginationHtml = '';
    
    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }


    paginationHtml += `
        <button class="page-arrow prev" ${currentPage === 1 ? 'disabled' : ''} 
                onclick="changePage(${currentPage - 1})">
            <img src="../../assets/icons/left.svg" alt="이전">
        </button>
    `;

    for (let i = startPage; i <= endPage; i++) {
        paginationHtml += `
            <button class="page-num ${i === currentPage ? 'active' : ''}" 
                    onclick="changePage(${i})">${i}</button>
        `;
    }

    paginationHtml += `
        <button class="page-arrow next" ${currentPage === totalPages ? 'disabled' : ''} 
                onclick="changePage(${currentPage + 1})">
            <img src="../../assets/icons/right.svg" alt="다음">
        </button>
    `;

    paginationContainer.innerHTML = paginationHtml;
}

function renderProducts() {
    const productGrid = document.querySelector(".product-grid");
    const banner = document.getElementById("main-banner");
    if (!productGrid) return;

    if (banner) {
       const categoryImg = currentCategory === 'all' ? 'chair' : currentCategory;

       const isMobileSize = window.innerWidth <= 768;
        const bannerImg = isMobileSize ? `${categoryImg}-mo` : categoryImg;

        banner.style.background = `url(../../images/list/banner/${bannerImg}.jpg) no-repeat 50% 50% / cover`;
    }

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

    renderPagination(filtered.length);
}

function initCategoryEvents() {
    const menus = document.querySelectorAll(".product-types li");
    const labelSpan = document.querySelector('.select-label span');
    
    menus.forEach(menu => {
        menu.addEventListener("click", () => {
        
            currentCategory = menu.classList[0]; 
            currentPage = 1; 

            const newURL = `${window.location.pathname}?type=${currentCategory}`;
            window.history.pushState({ path: newURL }, '', newURL);

            menus.forEach(m => m.classList.remove('active'));
            menu.classList.add('active');

            if (labelSpan) labelSpan.innerText = menu.innerText;

            renderProducts();
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const urlType = params.get('type'); 

    if (urlType) {
        currentCategory = urlType;
        
        const menus = document.querySelectorAll(".product-types li");
        menus.forEach(m => {
            if(m.classList.contains(urlType)) {
                m.classList.add('active');
                const labelSpan = document.querySelector('.select-label span');
                if (labelSpan) labelSpan.innerText = m.innerText;
            }
        });
    }

    const selectLabel = document.querySelector('.select-label');
    const selectBox = document.querySelector('.select-box');
    if (selectLabel && selectBox) {
        selectLabel.addEventListener('click', () => selectBox.classList.toggle('active'));
        document.addEventListener('click', (e) => {
            if (!selectBox.contains(e.target)) selectBox.classList.remove('active');
        });
    }

    initCategoryEvents(); 
    renderProducts(); 
});
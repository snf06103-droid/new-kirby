const eventDate = [
    {
        id:"1",
        title: "다시 쓰는 클래식, 2UC의 새로운 미학",
        date: "2026. 03. 10 (화) ~ 2026. 04. 10 (금)",
        img:"../../images/event/event-1.jpg",
        desc1:"2UC 가구가 지향하는 '기능적 아름다움'이 미드센추리 모던의 정수를 만나 새롭게 태어났습니다.",
        desc2:"이번 리뉴얼 오픈을 기념하여, 2UC의 시그니처인 우드 텍스처와 스틸 프레임의 조화를 가장 잘 보여주는 '2UC 헤리티지 라인'을 특별한 혜택으로 선보입니다.",
        desc3:"견고한 월넛 소재와 바우하우스의 철학이 담긴 직선적인 실루엣은 당신의 공간에 변치 않는 가치를 선사할 것입니다.",
        desc4:"지금 리뉴얼된 홈페이지에서 첫 구매를 진행하시는 모든 분께는 전 품목 15% 웰컴 할인 쿠폰과 함께 2UC의 로고가 각인된 프리미엄 가죽 트레이를 증정합니다.",
        desc5:"",
    },
    {
        id:"2",
        title:"2UC 컬러 위크",
        date:"2026. 04. 15 (수) ~ 2026. 04. 30 (목)",
        img:"../../images/event/event-2.jpg",
        desc1:"미드센추리 인테리어의 꽃은 과감한 컬러 매치에 있습니다.",
        desc2:"2UC 가구가 제안하는 '프라이머리 컬러 컬렉션'을 통해 당신의 거실을 갤러리처럼 바꿔보세요. ",
        desc3:"딥 오렌지, 선플라워 옐로우, 일렉트릭 블루 등 생동감 넘치는 컬러의 모듈 소파와 체어들이 준비되어 있습니다.",
        desc4:"이번 기획전 기간 동안 특정 컬러 가구를 구매하시는 고객님께는 공간의 채도를 맞춰줄 2UC 단독 디자인의 '체크보드 쿠션' 2종 세트를 드립니다. ",
        desc5:"단조로운 공간에 활기를 불어넣는 2UC만의 감각적인 컬러 팔레트를 지금 바로 확인하세요.",
    },
    {
        id:"3",
        title:"베스트 리뷰어 ‘2UCer’ 선정 이벤트",
        date:"2026. 05. 01 (금) ~ 2026. 05. 20 (수)",
        img:"../../images/event/event-3.jpg",
        desc1:"2UC의 가구가 고객님의 일상 속에서 어떻게 빛나고 있는지 궁금합니다.",
        desc2:"정성스러운 포토 리뷰를 남겨주시는 분들 중 매달 5분을 ‘베스트 2UCer’로 선정하여 현금처럼 사용 가능한 50,000포인트와 2UC 오리지널 머그 세트를 선물로 드립니다.",
        desc3:"2UC 제품이 놓인 미드센츄리 모던 무드의 공간 사진을 공유하고 혜택도 받아 가세요.",
        desc4:"",
        desc5:"",
    },
    {
        id:"4",
        title:"정품 인증 및 가품 주의 안내",
        date:"2026. 05. 01 (금) ~ 2026. 05. 20 (수)",
        img:"../../images/event/event-4.jpg",
        desc1:"최근 2UC의 디자인을 도용한 유사 제품이 유통되고 있어 고객님들의 각별한 주의가 필요합니다.",
        desc2:"2UC의 모든 정품 가구에는 고유 시리얼 넘버가 기재된 ‘정품 인증 카드’가 동봉됩니다.",
        desc3:"공식 홈페이지의 [정품 인증/AS] 메뉴를 통해 정품 등록을 완료하셔야만 향후 1년간의 무상 보증 및 케어 서비스를 받으실 수 있습니다. ",
        desc4:"소중한 권리 보호를 위해 반드시 공식 판매처를 이용해 주시기 바랍니다.",
        desc5:"",
    },
    {
        id:"5",
        title:"2UC 미드센추리 조명 단독전",
        date:"2026. 06. 01 (월) ~ 2026. 06. 15 (월)",
        img:"../../images/event/event-5.jpg",
        desc1:"가구 그 이상의 오브제, 빛으로 완성하는 인테리어의 마지막 퍼즐을 2UC에서 제안합니다.",
        desc2:"곡선의 미학이 돋보이는 플로어 램프부터 기하학적 형태의 테이블 단조명까지, 미드센추리 모던의 상징적인 실루엣을 담은 조명 라인업이 출시되었습니다.",
        desc3:"특히 이번 신제품 론칭 기념으로 조명 카테고리 제품을 구매하시는 모든 분께 2UC의 감성이 담긴 '빈티지 아트 포스터 1종'을 랜덤 증정합니다.",
        desc4:" 낮에는 공간을 장식하는 조각상으로, 밤에는 아늑한 분위기를 만드는 광원으로 당신의 일상을 더욱 풍요롭게 채워보시길 바랍니다.",
        desc5:"",
    },
];

const otherItems = document.querySelectorAll('.other-box li');

otherItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault(); 
        const clickedId = this.dataset.id;

        const selectedData = eventDate.find(data => data.id === clickedId);

        if (selectedData) {
            updateEventDetail(selectedData);
        }
    });
});

function updateEventDetail(data) {
    const mainImg = document.querySelector('.event-box figure img');
    const mainTitle = document.querySelector('.event-desc h1');
    const mainDate = document.querySelector('.event-desc .light'); 
    
    const mainText1 = document.querySelector('.event-text .desc1');
    const mainText2 = document.querySelector('.event-text .desc2');
    const mainText3 = document.querySelector('.event-text .desc3');
    const mainText4 = document.querySelector('.event-text .desc4');
    const mainText5 = document.querySelector('.event-text .desc5');

    if(mainImg) mainImg.src = data.img;
    if(mainTitle) mainTitle.innerText = data.title;
    if(mainDate) mainDate.innerText = data.date;

    if(mainText1) mainText1.innerText = data.desc1;
    if(mainText2) mainText2.innerText = data.desc2;
    if(mainText3) mainText3.innerText = data.desc3;
    if(mainText4) mainText4.innerText = data.desc4;
    if(mainText5) mainText5.innerText = data.desc5;

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('DOMContentLoaded', () => {

    const urlParams = new URLSearchParams(window.location.search);
    const idFromUrl = urlParams.get('id');

    if (idFromUrl) {
        const selectedData = eventDate.find(data => data.id === idFromUrl);
        
        if (selectedData) {
            updateEventDetail(selectedData);
        }
    }
});

function updateEventDetail(data) {
    const mainImg = document.querySelector('.event-box figure img');
    const mainTitle = document.querySelector('.event-desc h1');
    const mainDate = document.querySelector('.event-desc .light');
    
    const mainText1 = document.querySelector('.event-text .desc1');
    const mainText2 = document.querySelector('.event-text .desc2');
    const mainText3 = document.querySelector('.event-text .desc3');
    const mainText4 = document.querySelector('.event-text .desc4');
    const mainText5 = document.querySelector('.event-text .desc5');

    if(mainImg) mainImg.src = data.img;
    if(mainTitle) mainTitle.innerText = data.title;
    if(mainDate) mainDate.innerText = data.date;
    if(mainText1) mainText1.innerText = data.desc1;
    if(mainText2) mainText2.innerText = data.desc2;
    if(mainText3) mainText3.innerText = data.desc3;
    if(mainText4) mainText4.innerText = data.desc4;
    if(mainText5) mainText5.innerText = data.desc5;

    updateOtherList(data.id);

}

function updateOtherList(currentId) {
    const otherBox = document.querySelector('.other-box');
    
    const filteredList = eventDate.filter(item => item.id !== currentId);

    otherBox.innerHTML = filteredList.map(item => `
        <li data-id="${item.id}">
            <a href="#">
                <img src="${item.img}" alt="${item.title}">
                <p>${item.title}</p>
            </a>
        </li>
    `).join('');

    bindClickEvents();
}

function bindClickEvents() {
    const items = document.querySelectorAll('.other-box li');
    items.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const clickedId = this.dataset.id;
            const selectedData = eventDate.find(d => d.id === clickedId);
            if (selectedData) {
                updateEventDetail(selectedData); 
            }
        });
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const idFromUrl = params.get('id') || "1"; 

    const initialData = eventDate.find(d => d.id === idFromUrl);
    if (initialData) {
        updateEventDetail(initialData);
    }
});
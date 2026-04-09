

async function includeLayout() {
    const headerTarget = document.getElementById("site-header");
    const footerTarget = document.getElementById("site-footer");

    const isSubPage = window.location.pathname.includes('/pages/');
    const prefix = isSubPage ? "../../" : "./";

    if (headerTarget) {
        try {
            const response = await fetch(`${prefix}components/header.html`);
            if (!response.ok) throw new Error(`header load failed`);
            const html = await response.text();
            headerTarget.innerHTML = html;

            fixLayoutPaths(headerTarget, prefix);
            
            initHeaderScroll();
        } catch (error) {
            console.error(error);
        }
    }

    if (footerTarget) {
        try {
            const response = await fetch(`${prefix}components/footer.html`);
            if (!response.ok) throw new Error(`footer load failed`);
            const html = await response.text();
            footerTarget.innerHTML = html;

            fixLayoutPaths(footerTarget, prefix);
        } catch (error) {
            console.error(error);
        }
    }
}

function fixLayoutPaths(target, prefix) {
    const images = target.querySelectorAll('img');
    const links = target.querySelectorAll('a');

    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src && src.startsWith('/')) img.src = prefix + src.substring(1);
    });

    links.forEach(a => {
        const href = a.getAttribute('href');
        if (href && href.startsWith('/')) a.href = prefix + href.substring(1);
    });
}

function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('on');
        } else {
            header.classList.remove('on');
        }
    });
}

includeLayout();

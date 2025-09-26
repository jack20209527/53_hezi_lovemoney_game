// 图片懒加载
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('img-loading');
                
                img.onload = function() {
                    img.classList.remove('img-loading');
                };
                
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// 下载统计
function recordDownload(appId) {
    // 这里可以添加下载统计的代码
    console.log(`Recording download for app: ${appId}`);
}

// 移动端菜单
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('#mobile-menu-button');
    const mobileMenu = document.querySelector('#mobile-menu');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}); 
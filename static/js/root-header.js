    // 根据页面层级传入对应的 page_type
    // 0: 当前目录 (./)
    // 1: 上一级目录 (../)
    // 2: 上两级目录 (../../)
function getHeaderHTML(page_type = 0) {
    // 根据页面类型设置图片路径
    let imgPath = './';

    if (page_type == 0) {
        imgPath = './';
    } else if(page_type == 1) {
        imgPath = '../';
    } else if (page_type == 2) {
        imgPath = '../../';
    }

    let html = `
    <!-- 导航栏部分 -->
    <nav class="fixed w-full z-50 glass">
        <div class="mx-auto px-6 sm:px-6 lg:px-6">
            <!-- 桌面端 -->
            <div class="flex justify-start h-20 items-center">
                <!-- Logo -->
                <a href="${imgPath}" class="flex items-center space-x-3 cursor-pointer">
                    <div class="w-10 h-10 bg-gradient-to-r from-[#FF3366] to-[#9D34DA] rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.5v11m-6-4h12" />
                            <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                        </svg>
                    </div>
                    <span class="text-xl font-bold bg-gradient-to-r from-[#FF3366] to-[#9D34DA] bg-clip-text text-transparent">
                        通用标题
                    </span>
                </a>

                <!-- 右侧内容 -->
                <div class="flex items-center ml-auto space-x-4">
                    <!-- 导航链接：仅桌面端显示 -->
                    <div class="hidden md:flex items-center space-x-2">
                        <a href="${imgPath}about" id="my_record" data-lan="nav.my_work" 
                            class="px-4 py-2 rounded-md text-gray-300 hover:text-white bg-gray-800/30 hover:bg-white/20 active:bg-white shadow-none hover:shadow-sm active:shadow-inner">
                            推荐
                        </a>
                        <a href="${imgPath}list/" id="pricing-link" data-lan="nav.price" 
                            class="px-4 py-2 rounded-md text-gray-300 hover:text-white bg-gray-800/30 hover:bg-white/20 active:bg-white shadow-none hover:shadow-sm active:shadow-inner">
                            FAQ
                        </a>
                    </div>

                    <!-- 移动端菜单按钮 -->
                    <button id="mobile-menu-button" class="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>

                    <!-- 语言选择按钮：桌面端和移动端共用 -->
                    <button id="language-selector" 
                        class="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-md bg-gray-800/30 hover:bg-white/20 hover:shadow-sm active:shadow-inner">
                        <svg class="language-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            <path d="M2 12h20"></path>
                        </svg>
                        <span id="current-language" data-lan="nav.language">中文</span>
						<svg class="language-arrow language-arrow-icon w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
						</svg>
                    </button>
                </div>
            </div>

            <!-- 移动端菜单 -->
            <div id="mobile-menu" class="hidden md:hidden">
                <div class="px-2 pt-2 pb-3 space-y-1 bg-black/20 backdrop-blur-lg rounded-lg mt-2">
                    <a href="${imgPath}" id="mobile-my-record" data-lan="nav.my_works"
                        class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">
                        My TimeLines
                    </a>
                    <a href="${imgPath}list/" id="mobile-pricing" data-lan="nav.price"
                        class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">
                        Main TimeLine
                    </a>
                </div>
            </div>
        </div>
    </nav>
    `;
    return html;
}

// 渲染导航栏
function renderHeader(page_type = 0) {
    // const headerContainer = document.querySelector('header');
    // if (!headerContainer) {
    //     console.error('头部容器未找到');
    //     return;
    // }
    // headerContainer.innerHTML = getHeaderHTML(page_type);

    // 在渲染完成后初始化事件监听和下拉菜单
    // initializeHeader(page_type);
}

// 初始化导航栏的事件监听和下拉菜单
// path_name_by_level取值为./ ../ ../../   ../../../../等层级
function initializeHeader(path_name_by_level) {
    try {
        // 获取必要的DOM元素
        const languageBtn = document.querySelector('#language-selector');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        const languageArrow = document.querySelector('.language-arrow-icon');

        // 语言数据
        // 创建下拉菜单实例
        const dropdown = new Dropdown({
            trigger: languageBtn,
            width: 130,
            offset: { x: 0, y: 18 },
            position: 'bottom-right',
            itemHeight: 36,
            theme: 'dark',
            items: LANGUAGES.map(lang => ({
                content: `<span>${lang.name}</span>`,
                value: lang.code
            })),
            onSelect: (item, index) => {
                               // 这就不用设置了，因为新创建的zh页面的header里面都设置了中文或者韩文了
                // document.querySelector('#current-language').textContent = LANGUAGES[index].name;
                console.log('Selected language:', LANGUAGES[index].code);

                // 调用 language-manager.js 中的切换语言函数
                // .match(/href="([^"]*)"/)
                // .match()：这是一个 JavaScript 字符串方法，用于在字符串中查找匹配正则表达式的子字符串。
                // /href="([^"]*)"/：这是一个正则表达式，用于匹配 HTML 代码中 href 属性的值。
                // /：表示正则表达式的开始和结束。
                // href="：表示匹配字符串 "href="。
                // ([^"]*)：表示匹配一对双引号之间的任意字符（除了双引号本身）。
                // (...)：表示一个捕获组，用于提取匹配的子字符串。
                // [^"]*：表示匹配零个或多个不是双引号的字符。
                // "：表示匹配一个双引号。
                // .match(/href="([^"]*)"/)：表示在 getHeaderHTML(page_type) 返回的 HTML 字符串中查找匹配 href 属性值的子字符串，并返回一个数组。
                // 例子： 如果 getHeaderHTML(0) 返回的 HTML 字符串包含 <a href="/about">About</a>，那么 .match(/href="([^"]*)"/) 将返回 ["href=\"/about\"", "/about"]。
                // [1]

                // [1]：表示取 .match() 返回的数组中的第二个元素。
                // 由于正则表达式中包含一个捕获组，因此 .match() 返回的数组的第二个元素就是捕获组匹配的子字符串，也就是 href 属性的值。
                // 例子： 在上面的例子中，["href=\"/about\"", "/about"][1] 将返回 "/about"。
                // 例子：
                // 最后输出的就是./  ../../   或者./about
                // 如果 HTML 代码包含 <a href="/">Home</a>，正则表达式将匹配 "/"。
                // 如果 HTML 代码包含 <a href="/about">About</a>，正则表达式将匹配 "/about"。
                // 如果 HTML 代码包含 <a href="https://www.example.com">Example</a>，正则表达式将匹配 "https://www.example.com"。
                // switchLanguage(LANGUAGES[index].code, getHeaderHTML(page_type).match(/href="([^"]*)"/)[1]); 这行代码的作用是：
                // 获取用户选择的目标语言代码。
                // 获取网站根目录的路径。
                // 调用 switchLanguage 函数，切换网站的语言。
                // 正则表达式 /href="([^"]*)"/ 的作用是提取 HTML 代码中 href 属性的值。
                switchLanguage(LANGUAGES[index].code);
            },
            onOpen: () => {
                console.log('Dropdown opened');
                languageArrow.style.transition = 'transform 0.2s ease-in-out';
                languageArrow.style.transform = 'rotate(180deg)';
            },
            onClose: () => {
                console.log('Dropdown closed');
                languageArrow.style.transition = 'transform 0.2s ease-in-out';
                languageArrow.style.transform = 'rotate(0deg)';
            }
        });

        // 语言按钮点击事件
        if (languageBtn) {
            languageBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            });
        }

        // 移动端菜单按钮点击事件
        mobileMenuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
            if (dropdown && dropdown.isOpen) {
                dropdown.close();
            }
        });

        // 移动端菜单内容点击事件
        mobileMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // 点击页面任意位置关闭所有弹窗
        document.addEventListener('click', (e) => {
            if (e.target !== mobileMenuButton && !mobileMenuButton.contains(e.target) &&
                (!languageBtn || (e.target !== languageBtn && !languageBtn.contains(e.target)))) {
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
                if (dropdown && dropdown.isOpen) {
                    dropdown.close();
                }
            }
        });

        // ESC 键关闭所有弹窗
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                mobileMenu.classList.add('hidden');
                if (dropdown && dropdown.isOpen) {
                    dropdown.close();
                }
            }
        });

    } catch (error) {
        // console.error('Error initializing header:', error);
    }
}


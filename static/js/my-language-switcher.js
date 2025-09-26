class LanguageSwitcher {
    constructor() {
        this.init();
    }

    init() {
        this.createLanguageSelectors();
        this.initEventListeners();
    }

    createLanguageSelectors() {
        // 创建桌面端选择器
        this.createDesktopSelector();
        // 创建移动端选择器
        this.createMobileSelector();
    }

    createDesktopSelector() {
        const desktopNav = document.querySelector('.hidden.md\\:flex.items-center.space-x-8');
        if (!desktopNav) return;

        const container = this.createSelectorContainer('desktop');
        desktopNav.appendChild(container);
    }

    createMobileSelector() {
        const mobileMenu = document.querySelector('#mobile-menu .space-y-1');
        if (!mobileMenu) return;

        const container = this.createSelectorContainer('mobile');
        mobileMenu.appendChild(container);
    }

    createSelectorContainer(type) {
        const container = document.createElement('div');
        container.className = 'language-container relative';
        
        // 创建按钮
        const button = this.createButton(type);
        container.appendChild(button);
        
        // 创建下拉列表
        const dropdown = this.createDropdown(type);
        container.appendChild(dropdown);
        
        return container;
    }

    createButton(type) {
        const button = document.createElement('button');
        button.id = `${type}-language-btn`;
        
        const buttonClasses = type === 'desktop' 
            ? 'flex items-center space-x-2 text-gray-300 hover:text-white transition-colors'
            : 'w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 flex items-center justify-between';
        
        button.className = buttonClasses;
        
        // 使用 SVG 箭头替换 Unicode 字符
        button.innerHTML = `
            <span id="${type}-current-language" data-lan="nav.language">Language</span>
            <svg class="language-arrow w-4 h-4 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        `;
        
        return button;
    }

    createDropdown(type) {
        const dropdown = document.createElement('div');
        dropdown.id = `${type}-language-dropdown`;
        
        const dropdownClasses = type === 'desktop'
            ? 'language-dropdown hidden absolute mt-2 right-0 bg-[#1A1A1C] border border-white/10 rounded-lg overflow-hidden overflow-y-auto'
            : 'language-dropdown hidden absolute left-0 right-0 mt-1 bg-[#1A1A1C] border border-white/10 rounded-lg overflow-hidden overflow-y-auto';
        
        dropdown.className = dropdownClasses;
        dropdown.style.maxHeight = '300px'; // 设置最大高度
        
        // 创建语言选项
        LANGUAGES.forEach(lang => {
            const option = this.createLanguageOption(lang);
            dropdown.appendChild(option);
        });
        
        return dropdown;
    }

    createLanguageOption(lang) {
        const option = document.createElement('button');
        option.className = 'language-option w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10';
        option.setAttribute('data-language', lang.code);
        option.textContent = lang.name;
        return option;
    }

    initEventListeners() {
        // 获取所有必要的元素
        this.arrows = document.querySelectorAll('.language-arrow');

        // 初始化按钮点击事件
        this.initLanguageOptions();
        this.initOutsideClickHandler();
    }


    initLanguageOptions() {
        document.querySelectorAll('.language-option').forEach(button => {
            button.addEventListener('click', () => {
                const selectedLanguage = button.textContent;
                const languageCode = button.dataset.language;

                [this.desktopCurrentLang, this.mobileCurrentLang].forEach(element => {
                    if (element) element.textContent = selectedLanguage;
                });

                LanguageManager.switchLanguage(languageCode);
                this.closeAllDropdowns();
            });
        });
    }

    initOutsideClickHandler() {
        document.addEventListener('click', () => {
            this.closeAllDropdowns();
        });
    }

    toggleDropdown(dropdown) {
        if (!dropdown) return;
        
        const isCurrentDropdownHidden = dropdown.classList.contains('hidden');
        this.closeAllDropdowns();
        
        if (isCurrentDropdownHidden) {
            dropdown.classList.remove('hidden');
            this.updateArrows();
        }
    }

    closeAllDropdowns() {
        this.updateArrows();
    }

    updateArrows() {
        this.arrows.forEach(arrow => {
            const dropdown = arrow.closest('.language-container')
                .querySelector('.language-dropdown');
            // 使用 rotate 实现顺时针旋转
            arrow.style.transform = dropdown?.classList.contains('hidden') 
                ? 'rotate(0deg)' 
                : 'rotate(180deg)';
        });
    }
}

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    new LanguageSwitcher();
}); 
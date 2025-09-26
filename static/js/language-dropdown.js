class Dropdown {
    constructor(options = {}) {
        this.options = {
            trigger: null,
            items: [],
            offset: { x: 0, y: 5 },
            width: 200,
            position: 'bottom-right', // 默认改为右对齐
            itemHeight: 40,
            maxHeight: 300,
            theme: 'dark',  // 新增主题选项：'dark' 或 'light'
            onOpen: null, // 添加 onOpen 回调
            onClose: null, // 添加 onClose 回调
            ...options
        };
        
        this.dropdownEl = null;
        this.isOpen = false;
        this.init();
    }

    init() {
        // 创建下拉框元素
        this.createDropdown();
        // 绑定事件
        this.bindEvents();
    }

    createDropdown() {
        this.dropdownEl = document.createElement('div');
        this.dropdownEl.className = `custom-dropdown hidden ${this.options.theme}`;
        
        const themeStyles = this.options.theme === 'dark' ? `
            background: #1f202e;
            border: 1px solid #374151;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        ` : `
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        `;
        
        this.dropdownEl.style.cssText = `
            position: fixed;  // 改为 fixed 定位
            border-radius: 8px;
            width: ${this.options.width}px;
            overflow-y: visible;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.2s ease;
            ${themeStyles}
        `;
    
        this.renderItems();
        document.body.appendChild(this.dropdownEl);
    }

    renderItems() {
        const itemBaseStyles = `
            padding: 8px 16px;
            height: ${this.options.itemHeight}px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
            border-radius: 6px;
            margin: 4px 8px;
        `;
    
        // 根据主题设置不同的样式
        const style = document.createElement('style');
        style.textContent = `
            .dropdown-item {
                ${itemBaseStyles}
                ${this.options.theme === 'dark' ? `
                    color: rgba(229, 231, 235, 0.8);
                ` : `
                    color: rgba(55, 65, 81, 0.8);
                `}
            }
            
            .dropdown-item:hover {
                ${this.options.theme === 'dark' ? `
                    background-color: rgba(255, 255, 255, 0.1);
                    color: rgba(255, 255, 255, 1);
                ` : `
                    background-color: rgba(0, 0, 0, 0.05);
                    color: rgba(0, 0, 0, 0.95);
                `}
                cursor: pointer;
            }
        `;
        document.head.appendChild(style);
    
        this.dropdownEl.innerHTML = this.options.items.map((item, index) => `
            <div class="dropdown-item"  style="font-family: 'font_content_title_bold_small';"  data-index="${index}">
                ${item.content}
            </div>
        `).join('');
    }

    updatePosition() {
        if (!this.options.trigger) return;
        
        const triggerRect = this.options.trigger.getBoundingClientRect();
        
        // 使用 fixed 定位，但水平位置跟随触发元素
        let x = triggerRect.right - this.options.width + this.options.offset.x;
        let y = triggerRect.bottom + this.options.offset.y;
    
        // 监听窗口大小变化和滚动事件
        const updateDropdownPosition = () => {
            const newTriggerRect = this.options.trigger.getBoundingClientRect();
            this.dropdownEl.style.left = `${newTriggerRect.right - this.options.width + this.options.offset.x}px`;
        };
    
        // 添加事件监听
        window.addEventListener('resize', updateDropdownPosition);
        window.addEventListener('scroll', updateDropdownPosition, true);
    
        // 初始位置设置
        this.dropdownEl.style.left = `${x}px`;
        this.dropdownEl.style.top = `${y}px`;
    
        // 在关闭时移除事件监听
        const originalClose = this.close.bind(this);
        this.close = () => {
            window.removeEventListener('resize', updateDropdownPosition);
            window.removeEventListener('scroll', updateDropdownPosition, true);
            originalClose();
        };
    }

    bindEvents() {
        // 点击触发元素
        if (this.options.trigger) {
            this.options.trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggle();
            });
        }

        // 点击下拉项
        this.dropdownEl.addEventListener('click', (e) => {
            const item = e.target.closest('.dropdown-item');
            if (item) {
                const index = parseInt(item.dataset.index);
                this.options.onSelect?.(this.options.items[index], index);
                this.close();
            }
        });

        // 点击外部关闭
        document.addEventListener('click', () => this.close());
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        if (this.isOpen) return;
        this.isOpen = true;
        this.dropdownEl.classList.remove('hidden');
        this.updatePosition();
        requestAnimationFrame(() => {
            this.dropdownEl.style.opacity = '1';
        });
        this.options.onOpen?.(); // 调用 onOpen 回调
    }

    close() {
        if (!this.isOpen) return;
        this.isOpen = false;
        this.dropdownEl.style.opacity = '0';
        setTimeout(() => {
            this.dropdownEl.classList.add('hidden');
        }, 200);
        this.options.onClose?.(); // 调用 onClose 回调
    }

    destroy() {
        this.dropdownEl.remove();
    }
}


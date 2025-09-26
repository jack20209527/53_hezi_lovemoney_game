function render_card_grid (containerId, items, options = {}) {
    const {
        path = '',
        type = '',
        scene = '',
        showDesc = true,
        cardClass = '',
    } = options;

    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    items.forEach(item => {
        const link = `/games/${item.game_dir || ''}/`;
        const itemHtml = `
            <a href="${link}" class="block w-full group" style="text-decoration: none;">
                <div class="flex flex-col items-center rounded-lg mb-2 cursor-pointer 
                            transition-all duration-300 ease-in-out 
                            hover:scale-102 hover:-translate-y-1 hover:shadow-2xl ${cardClass}">
                    <div class="relative w-full aspect-square">
                        <img src="${item.cover_image || 'placeholder.jpg'}" 
                            alt="${item.game_title || ''}" 
                            class="w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:brightness-110">
                        <div class="absolute inset-0 rounded-lg bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 class="text-sm font-bold text-white py-2 text-center line-clamp-1 
                            transition-colors duration-300 group-hover:text-gray-300">
                        ${item.game_title || '未命名'}
                    </h3>
                </div>
            </a>
        `;
        container.insertAdjacentHTML('beforeend', itemHtml);
    });
}


/**
 * 通用卡片网格渲染函数（支持可选参数）
 *   options.type: 卡片类型（如 'game'、'app' 等）
 *   options.scene: 场景（如 'home'、'list' 等）
 *   options.showDesc: 是否显示描述，默认true
 *   options.cardClass: 卡片外层自定义class
 */
/**
// 普通用法（和原来一样）
renderCardGrid('id_grid_hot_games', demoData);

// 传递可选参数
renderCardGrid('id_grid_hot_games', demoData, {
    type: 'game',
    scene: 'home',
    showDesc: false, // 不显示描述
    cardClass: 'bg-blue-900' // 额外自定义class
});} 
 */

/*
<div class="flex flex-col items-center rounded-lg mb-2 cursor-pointer 
                        transition-all duration-300 ease-in-out 
                        hover:scale-105 hover:-translate-y-1 hover:shadow-2xl group ${cardClass}">
                <div class="relative w-full aspect-square">
                    <img src="${item.imageUrl || 'placeholder.jpg'}" 
                        alt="${item.title || ''}" 
                        class="w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:brightness-110">
                    <div class="absolute inset-0 rounded-lg bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 class="text-sm font-bold text-white py-2 text-center line-clamp-1 
                        transition-colors duration-300 group-hover:text-pink-400">
                    ${item.title || '未命名'}
                </h3>
                ${showDesc && item.description ? `
                <p class="text-gray-400 text-xs text-center line-clamp-2 mb-1">
                    ${item.description}
                </p>
                ` : ''}
                ${type ? `<div class="mt-1 text-xs text-blue-400">${type}</div>` : ''}
                ${scene ? `<div class="mt-1 text-xs text-green-400">${scene}</div>` : ''}
            </div> */
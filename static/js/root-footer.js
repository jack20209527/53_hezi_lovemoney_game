function getFooterHTML(page_type = 0) {

    let imgPath = './';
    if (page_type == 0) {
        imgPath = './';
    } else if(page_type == 1) {
        imgPath = '../';
    } else if (page_type == 2) {
        imgPath = '../../';
    }

    let html = `
 	<footer class="mt-4 bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/90 ">
		<div class="py-8">
            <!-- 主要内容区域 -->
            <div class="px-14 flex flex-col md:flex-row md:justify-between gap-8">
                <!-- Logo部分 -->
                <div class="mb-6 md:mt-10">
                    <a href='${imgPath}' class="flex items-center justify-center md:justify-start">
                    <div class="w-10 h-10 bg-gradient-to-r from-[#FF3366] to-[#9D34DA] rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.5v11m-6-4h12" />
                                <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                            </svg>
					    </div>
                        <span
						class="text-xl ml-4 font-bold bg-gradient-to-r from-[#FF3366] to-[#9D34DA] bg-clip-text text-transparent">
						History Time Line
					</span>
                    </a>
                </div>

                <!-- 链接网格部分 , 如果有三列，就修改这里的 md: colos-3 -->
				<div class="flex flex-wrap justify-end">
					<!-- Popular History 链接 -->
					<div class="flex flex-col items-end">
						<h2 class="mb-4 text-medium font-semibold uppercase text-gray-200">Popular History</h2>
						<ul class="flex flex-col items-end text-gray-400 font-medium">
							<li class="mb-2">
								<a href="${imgPath}recommend/${0}/" class="hover:text-gray-200 transition-colors duration-300" target="_blank">
									内容1</a>
							</li>
							<li class="mb-2">
								<a href="${imgPath}recommend/${7}/" class="hover:text-gray-200 transition-colors duration-300" target="_blank">
									内容2</a>
							</li>
							<li class="mb-2">
								<a href="${imgPath}recommend/${7}/" class="hover:text-gray-200 transition-colors duration-300" target="_blank">
									内容3</a>
							</li>
						</ul>
					</div>
					
					<!-- FAQ 链接 -->
					<div class="ml-6 flex flex-col items-end">
						<h2 class="mb-4 text-medium font-semibold uppercase text-gray-200">FAQ</h2>
						<ul class="flex flex-col items-end text-gray-400 font-medium">
							<li class="mb-2">
								<a href="${imgPath}about/" class="hover:text-gray-200 transition-colors duration-300" target="_blank">
									方案1</a>
							</li>
							<li class="mb-2">
								<a href="${imgPath}privacy/" class="hover:text-gray-200 transition-colors duration-300" target="_blank">
									方案2</a>
							</li>
						</ul>
					</div>

					<!-- Legal 链接 -->
					<div class="ml-6 flex flex-col items-end">
						<h2 class="mb-4 text-medium font-semibold uppercase text-gray-200">Legal</h2>
						<ul class="flex flex-col items-end text-gray-400 font-medium">
							<li class="mb-2">
								<a href="${imgPath}about/" class="hover:text-gray-200 transition-colors duration-300" target="_blank">
									About Us</a>
							</li>
							<li class="mb-2">
								<a href="${imgPath}privacy/" class="hover:text-gray-200 transition-colors duration-300" target="_blank">
									Privacy</a>
							</li>
						</ul>
					</div>
				</div>

				

            </div>

            <hr class="my-10 border-white/5" />

            <!-- 版权信息 -->
            <div class="mx-auto">
                <p class="text-center font-sans text-gray-400 text-sm">&copy; 2025 AI History Time Line. All rights reserved.</p>
            </div>
        </div>
    </footer>
`;
    return html;
}


// 渲染尾部，必须要在export添加下
function renderFooter(page_type = 0) {
    const footerContainer = document.querySelector('footer');
    if (!footerContainer) {
        console.error('头部容器未找到');
        return;
    }
    footerContainer.innerHTML = getFooterHTML(page_type);
};


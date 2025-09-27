function getFooterHTML() {

    let html = `
		<div class="py-8">
            <div class="px-14 flex flex-col md:flex-row md:justify-between gap-8">
                <div class="mb-6 md:mt-10">
                    <a href="/" class="flex items-center justify-center md:justify-start">
                        <div class="w-10 h-10 bg-[#6344f5] rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.5v11m-6-4h12" />
                                <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                            </svg>
                        </div>
                        <p class="text-2xl ml-2"
                                style="font-family: 'font_common_nav_title';" 
                                data-i18n="nav.common_title" >
                            Love Money
                        </p>
                        
                    </a>
                </div>

                <div class="flex flex-wrap justify-end">
                    <div class="ml-6 flex flex-col items-end">
                        <h2 class="mb-4 text-medium font-semibold uppercase text-gray-200" 
                            style="font-family: 'font_content_title_bold_small';"  
                            data-i18n="footer.legal">Legal</h2>

                        <ul class="flex flex-col items-end text-gray-400 font-medium">
                            <li class="mb-2">
                                <a href="/about/" 
                                    style="font-family: 'font_content_title_bold_small';"  
                                    class="hover:text-gray-200 transition-colors duration-300" target="_blank" data-i18n="nav.about">
                                    About</a>
                            </li>
                            <li class="mb-2">
                                <a href="/privacy/" 
                                    style="font-family: 'font_content_title_bold_small';"  
                                    class="hover:text-gray-200 transition-colors duration-300" target="_blank" data-i18n="nav.privacy">
                                    Privacy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr class="my-10 border-white/5" />

            <div class="mx-auto">
                <p class="text-center font-sans text-gray-400 text-sm" 
                    style="font-family: 'font_content_title_bold_small';"  
                    data-i18n="footer.copyright">&copy; 2025 Love Money .</p>
            </div>
        </div>
`;
    return html;
}


// 渲染尾部，必须要在export添加下
function initializeFooter() {
	// 在页面加载完成后将内容添加到footer标签中
	const footerElement = document.querySelector('footer');
	if (footerElement) {
		footerElement.innerHTML = getFooterHTML ();
	}

};


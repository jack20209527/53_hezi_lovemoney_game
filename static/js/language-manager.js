// 切换语言
function switchLanguage(targetLang) {
    console.log("switchLanguage: 开始切换语言，目标语言:", targetLang);

    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    const currentHash = window.location.hash;
    // currentPath 可能为: /根路径  
    console.log("switchLanguage: 当前路径:", currentPath, "，参数:", currentSearch, "，哈希:", currentHash);

    let newPath = '';
    const langPrefixes = LANGUAGES.map(lang => `/${lang.code}/`);

    if (currentPath === '/' || langPrefixes.some(prefix => currentPath === prefix)) {
        // 严格判断根路径
        newPath = targetLang === 'en' ? '/' : `/${targetLang}/`;
        console.log("switchLanguage: 当前路径为根路径，新路径:", newPath);
    } else if (langPrefixes.some(prefix => currentPath.startsWith(prefix))) {
        // 判断当前路径包含语言代码
        if (targetLang === 'en') {
            newPath = currentPath.substring(3);
            console.log("switchLanguage: 当前路径包含语言代码，切换到英语，新路径:", newPath);
        } else {
            newPath = `/${targetLang}${currentPath.substring(3)}`;
            console.log("switchLanguage: 当前路径包含语言代码，切换到其他语言，新路径:", newPath);
        }
    } else {
        // 处理其他情况
        if (targetLang === 'en') {
            const langPattern = new RegExp(`^/(${LANGUAGES.map(l => l.code).join('|')})/`);
            newPath = currentPath.replace(langPattern, '/');
            console.log("switchLanguage: 当前路径不包含语言代码，切换到英语，新路径:", newPath);
        } else {
            newPath = `/${targetLang}${currentPath}`;
            console.log("switchLanguage: 当前路径不包含语言代码，切换到其他语言，新路径:", newPath);
        }
    }

    // 保留 URL 参数和哈希
    newPath = newPath + currentSearch + currentHash;

    localStorage.setItem('userLanguage', targetLang);
    window.location.href = newPath;
    console.log("switchLanguage: 结束切换语言，跳转到:", newPath);
}






// path_name_by_level 取值为./ ../ ../../   ../../../../等层级

// function switchLanguage(targetLang, path_name_by_level) {
//     console.log("switchLanguage: 开始切换语言，目标语言:", targetLang, "，路径:", path_name_by_level); // 日志：函数开始

//     const currentPath = window.location.pathname; //  ->/ /about/  /zh/about
//     console.log("switchLanguage: 当前路径:", currentPath); // 日志：当前路径

//     let newPath = '';

//     const langPrefixes = LANGUAGES.map(lang => `/${lang.code}/`); // 生成语言代码前缀数组
//     console.log("switchLanguage: 语言代码前缀数组:", langPrefixes); // 日志：语言代码前缀数组

//     if (currentPath === path_name_by_level) {
//         newPath = targetLang === 'en' ? path_name_by_level : `/${targetLang}/`; // targetLang = zh
//         console.log("switchLanguage: 当前路径为路径，新路径:", newPath); // 日志：路径处理

//         // 循环前缀，/zh/ /ko/ /ja/ /es/ /fr/ /de/ /it/ /ru/ /zh/ /pt/ /ar/ /hi/
//         // 相当于: if (currentPath.startsWith('/zh/') || currentPath.startsWith('/ko/') || currentPath.startsWith('/ja/')
//     } else if (langPrefixes.some(prefix => currentPath.startsWith(prefix))) {
//         if (targetLang === 'en') {
//             newPath = currentPath.substring(3); // 去掉/zh   去掉/ko，留下/根路径，比如原来currentPath是/zh/about,那么newPath就是/about
//             console.log("switchLanguage: 当前路径包含语言代码，切换到英语，新路径:", newPath); // 日志：切换到英语
//         } else {
//             newPath = `/${targetLang}${currentPath.substring(3)}`; // 如果原来是/zh/about,那么newPath就是/ko/about
//             console.log("switchLanguage: 当前路径包含语言代码，切换到其他语言，新路径:", newPath); // 日志：切换到其他语言
//         }
//     } else {
//         if (targetLang === 'en') {
//             // /^(zh|ko|ja)/
//             const langPattern = new RegExp(`^/(${LANGUAGES.map(l => l.code).join('|')})/`);
//             // currentPath 表示当前网址。
//             // replace(langPattern, '/')：表示用 "/" 替换掉 currentPath 中匹配 langPattern 的部分。
//             // 例子： 如果 currentPath 是 "/zh/about"，那么 newPath 就是 "/about"。
//             // console.log("switchLanguage: 当前路径不包含语言代码，切换到英语，新路径:", newPath);
//             // 就是根路径，需要给/zh/about这样的截断，变成/about
//             newPath = currentPath.replace(langPattern, '/'); // 只要开头/，中间zh|ko|ja，结尾是/，那么就替换成/，就是为了去掉中间的字符
//             console.log("switchLanguage: 当前路径不包含语言代码，切换到英语，新路径:", newPath); // 日志：切换到英语
//         } else {
//             newPath = `/${targetLang}${currentPath}`;
//             console.log("switchLanguage: 当前路径不包含语言代码，切换到其他语言，新路径:", newPath); // 日志：切换到其他语言
//         }
//     }

//     localStorage.setItem('userLanguage', targetLang);
//     console.log("switchLanguage: 保存用户语言到本地存储:", targetLang); // 日志：保存本地存储

//     window.location.href = newPath;
//     console.log("switchLanguage: 跳转到新路径:", newPath); // 日志：跳转

//     console.log("switchLanguage: 结束切换语言"); // 日志：函数结束
// }

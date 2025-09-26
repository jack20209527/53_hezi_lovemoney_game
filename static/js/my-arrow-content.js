
// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  const lang = document.documentElement.lang;
  
  // const translations = {

  // "en": 
  
    // [
    //       {
    //         "title": "Access Arise Crossover: Beta & Codes Guide",
    //         "content": "Want early access to 'arise crossover beta' features? Learn how to find 'arise codes' and 'roblox arise crossover codes'! Watch official announcements for test invites. Once eligible, get the direct download link. Remember, slots fill fast!"
    //       },
    //       {
    //         "title": "Safe 'Codes for Arise Crossover' & Downloads",
    //         "content": "Is 'arise crossover code' download safe? Our 'arise codes' and download links are from verified sources. Always check official channels like the 'arise crossover wiki' to avoid risks. We ensure secure 'code crossover arise' downloads, so you play worry-free."
    //       },
    //       {
    //         "title": "Unlock Features: 'Arise Crossover Dungeon' & More",
    //         "content": "Explore new 'arise crossover dungeon' content! The 'arise crossover beta' shows upcoming characters, maps, and gameplay. Versions like 'arise crossover mount' previews unique features. Try 'script arise crossover' for different experiences. Get exclusive rewards for your feedback!"
    //       },
    //       {
    //         "title": "Fixing 'Roblox Arise' Install Errors",
    //         "content": "Struggling to install 'roblox arise'? Check your device's permissions first. If that fails, redownload the game file. Consult community guides for 'roblox arise codes' help. If issues persist, contact our player support for assistance."
    //       },
    //       {
    //         "title": "Your Feedback: Shaping 'Anime Crossover' Game",
    //         "content": "Share your thoughts on 'anime crossover'! We value your input during tests. Use in-game tools or forums to report bugs or ideas. Your feedback directly impacts 'anime crossover codes' and future game updates. Your insights guide improvements."
    //       },
    //       {
    //         "title": "Game Data: 'Solo Leveling' & Arise Crossover",
    //         "content": "What about your progress in 'solo leveling' inspired modes? Beta data rarely transfers to the main game. However, your feedback from 'anime crossover codes' and 'solo leveling' modes helps us. Enjoy the beta, then experience the full game at launch!"
    //       }
    //   ]
      
  // }
    
      // accordionData = translations[lang]
      const accordionContainer = document.getElementById('accordion-container');
    
      faq_list.forEach(item => {
        const accordionItem = document.createElement('div');
        accordionItem.innerHTML = `
            <div class="arrow_down_button_parent_home">
                <button class="arrow_down_button_home">
                    ${item.title}
                    <span class="arrow_down_arrow_home"></span>
                </button>
                <div class="arrow_down_panel_home">
                    <p class="arrow_down_panel_text_home">${item.content}</p>
                </div>
            </div>
        `;
        accordionContainer.appendChild(accordionItem);
      });
    

    var acc = document.getElementsByClassName("arrow_down_button_home");
        var i;
        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            var arrow = this.querySelector(".arrow_down_arrow_home"); // 获取箭头元素
            arrow.classList.toggle("active"); // 切换箭头元素的 active 类
        
            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
        }

}); 
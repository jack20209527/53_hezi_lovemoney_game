
document.addEventListener('DOMContentLoaded', () => {
    const blogData = [
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/SpeedRun_King.jpg",
            nickname: "TechGuruJake",
            playerType: "casual gamer",
            time: "2024.06.06",
            blog: "Just tried this HTML5 mini-game on my phone during lunch—super addictive! The controls are smooth, but I wish there were more levels. Still, it’s a blast for quick breaks. Def recommend it to anyone who loves simple, fun games. 😄 #HTML5Games #MiniGameFun"
        },
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/Game_MasterZack.jpg",
            nickname: "PixelNinjaSara",
            playerType: "hardcore gamer",
            time: "2024.06.06",
            blog: "As a hardcore gamer, I was skeptical about HTML5 mini-games, but this one blew me away. The graphics are surprisingly crisp, and the challenge ramps up nicely. Took me hours to beat the boss level—worth it! Only thing is, I’d love some multiplayer options. Great job, devs! 🔥 #GamingAddict #HTML5"
        },
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/Pixel_WizardDan.jpg",
            nickname: "RetroFanMike",
            playerType: "retro enthusiast",
            time: "2024.06.06",
            blog: "This HTML5 mini-game reminds me of old-school arcade games—simple, fast, and fun! Played it on my laptop, and it runs smoothly without lag. The pixel art is nostalgic, but I wish the sound effects were louder. Still, it’s a solid pick for quick gaming sessions. Loving it! 😊 #RetroGames #MiniGame"
        },
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/StrategyBoss_Alex.jpg",
            nickname: "KawaiiGamerLia",
            playerType: "casual gamer",
            time: "2024.06.06",
            blog: "OMG, this HTML5 mini-game is so cute and easy to pick up! Played it on my tablet while waiting for a friend, and it’s perfect for killing time. The characters are adorable, but I got stuck on level 5—maybe a hint system would help? Still, I’m hooked! 🥰 #CuteGames #HTML5Fun"
        },
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/RPG_FanaticWill.jpg",
            nickname: "StrategyKingTom",
            playerType: "strategy gamer",
            time: "2024.06.06",
            blog: "I’m into strategy games, but this HTML5 mini-game surprised me with its clever puzzles. It’s not super deep, but the quick rounds are perfect for my busy schedule. Ran it on my phone with no issues, though I’d love more difficulty options. Solid 8/10 for a mini-game! 👍 #StrategyGames #HTML5"
        },
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/IndieGame_FanJoe.jpg",
            nickname: "SpeedRunQueen",
            playerType: "speedrunner",
            time: "2024.06.06",
            blog: "As a speedrunner, I love how fast-paced this HTML5 mini-game is! Managed to beat my personal best in under 2 minutes, but the controls could be tighter for precision. Still, it’s a great challenge for quick sessions on my desktop. Hoping for leaderboards soon! 🚀 #SpeedRunning #MiniGame"
        },
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/Arcade_LoverEmma.jpg",
            nickname: "MMOAddictBen",
            playerType: "MMO player",
            time: "2024.06.06",
            blog: "Didn’t expect an HTML5 mini-game to be this engaging, but I played it on my break and couldn’t stop! The art style is clean, and the gameplay loops are fun. Not as complex as my usual MMOs, but it’s a nice change. Could use more content, though. Great for casual play! 😄 #MMOGamer #HTML5"
        },
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/KawaiiPlayer_Mia.jpg",
            nickname: "BattleFanAlex",
            playerType: "competitive gamer",
            time: "2024.06.06",
            blog: "This HTML5 mini-game’s battle system is surprisingly fun for a small title. Played it on my phone while waiting for a match, and the PVP mode is intense! Controls are decent, but I’d love more rewards for wins. Still, it’s a chill way to prep for bigger games. Solid vibes! 🏆 #CompetitiveGaming #HTML5"
        }
    ];

    const blogContainer = document.getElementById('blog-grid'); // 使用 ID 获取元素

    blogData.forEach(item => {
      const blogItem = document.createElement('div');
      var real_blog_content = item.blog
      if (real_blog_content.length > 60) {
        real_blog_content = real_blog_content.substring(0, 100) + "..."
      }

      blogItem.className = "rounded-lg border bg-[#1f202f] shadow-sm h-full bg-card border-none";
      blogItem.innerHTML = `
          <div class="p-4  h-full flex flex-col justify-between
               cursor-pointer bg-[#1f202f] rounded-xl shadow-md hover:bg-gradient-to-br
                hover:from-[#3a3a4a] hover:to-[#1e1e2f] hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out
          ">
              <div class="">
                <h3 class="font-semibold tracking-tight text-base md:text-lg">${item.nickname}</h3>
                <div class="">
                  <p class="mt-2 text-muted text-sm md:text-base">${real_blog_content}</p>
                </div>
             </div>
              <div class="flex justify-between">
                <p class="mt-4 text-left text-muted text-sm md:text-base">${item.time}</p>
                <p class="mt-4 text-right text-muted text-sm md:text-base"> Read More </p>
              </div>
          </div>
      `;
      blogContainer.appendChild(blogItem);
    });
  });


{/* <p class="text-muted-foreground text-xs md:text-sm">${item.playerType}</p> */}


//   <section class="mx-auto mt-6">
//   <h2 class="text-xl md:text-3xl font-bold text-center mb-6 md:mb-12">Play blogs</h2> 
//   <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4"> 
//    <div class="rounded-lg border bg-[#1f202f] shadow-sm h-full bg-card border-none">
//     <div class="flex flex-col space-y-1.5 md:p-4 p-2">
//      <div class="flex items-center gap-2 md:gap-4">
//       <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 md:w-10 md:h-10">
//           <img class="aspect-square h-full w-full" alt="GamerXtreme" src="https://api.randomx.ai/avatar/GamerXtreme.png" />
//       </span>
//       <div>
//        <h3 class="font-semibold tracking-tight text-base md:text-lg">GamerXtreme GamerXtremeGamerXtreme</h3>
//        <p class="text-muted-foreground text-xs md:text-sm">player</p>
//       </div>
//      </div>
//     </div>
//     <div class="md:p-4 p-2">
//      <p class="text-muted text-sm md:text-base">OMG! Just . &#55357;&#56846;
//      </p>
//     </div>
//    </div>
//    <div class="rounded-lg border bg-[#1f202f] shadow-sm h-full bg-card border-none">
//     <div class="flex flex-col space-y-1.5 md:p-4 p-2">
//      <div class="flex items-center gap-2 md:gap-4">
//       <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 md:w-10 md:h-10">
//           <img class="aspect-square h-full w-full" alt="RPGFanatic22" src="https://api.randomx.ai/avatar/RPGFanatic22.png" /></span>
//       <div>
//        <h3 class="font-semibold tracking-tight text-base md:text-lg">RPGFanatic22</h3>
//        <p class="text-muted-foreground text-xs md:text-sm">player</p>
//       </div>
//      </div>
//     </div>
//     <div class="md:p-4 p-2">
//      <p class="text-muted text-sm md:text-base">. &#55357;&#56490;</p>
//     </div>
//    </div>
//    <div class="rounded-lg border bg-[#1f202f] shadow-sm h-full bg-card border-none">
//     <div class="flex flex-col space-y-1.5 md:p-4 p-2">
//      <div class="flex items-center gap-2 md:gap-4">
//       <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 md:w-10 md:h-10"><img class="aspect-square h-full w-full" alt="RobloxLover101" src="https://api.randomx.ai/avatar/RobloxLover101.png" /></span>
//       <div>
//        <h3 class="font-semibold tracking-tight text-base md:text-lg">RobloxLover101</h3>
//        <p class="text-muted-foreground text-xs md:text-sm">player</p>
//       </div>
//      </div>
//     </div>
//     <div class="md:p-4 p-2">
//      <p class="text-muted text-sm md:text-base"> . &#55358;&#56617;</p>
//     </div>
//    </div>
//    <div class="rounded-lg border bg-[#1f202f] shadow-sm h-full bg-card border-none">
//     <div class="flex flex-col space-y-1.5 md:p-4 p-2">
//      <div class="flex items-center gap-2 md:gap-4">
//       <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 md:w-10 md:h-10"><img class="aspect-square h-full w-full" alt="AnimeGamerGal" src="https://api.randomx.ai/avatar/AnimeGamerGal.png" /></span>
//       <div>
//        <h3 class="font-semibold tracking-tight text-base md:text-lg">AnimeGamerGal</h3>
//        <p class="text-muted-foreground text-xs md:text-sm">player</p>
//       </div>
//      </div>
//     </div>
//     <div class="md:p-4 p-2">
//      <p class="text-muted text-sm md:text-base">gameplay. &#55357;&#56860;</p>
//     </div>
//    </div>
//    <div class="rounded-lg border bg-[#1f202f] shadow-sm h-full bg-card border-none">
//     <div class="flex flex-col space-y-1.5 md:p-4 p-2">
//      <div class="flex items-center gap-2 md:gap-4">
//       <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 md:w-10 md:h-10"><img class="aspect-square h-full w-full" alt="SorcererPlayer99" src="https://api.randomx.ai/avatar/SorcererPlayer99.png" /></span>
//       <div>
//        <h3 class="font-semibold tracking-tight text-base md:text-lg">SorcererPlayer99</h3>
//        <p class="text-muted-foreground text-xs md:text-sm">player</p>
//       </div>
//      </div>
//     </div>
//     <div class="md:p-4 p-2">
//      <p class="text-muted text-sm md:text-base">more. &#55358;&#56691;</p>
//     </div>
//    </div>
//    <div class="rounded-lg border bg-[#1f202f] shadow-sm h-full bg-card border-none">
//     <div class="flex flex-col space-y-1.5 md:p-4 p-2">
//      <div class="flex items-center gap-2 md:gap-4">
//       <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 md:w-10 md:h-10"><img class="aspect-square h-full w-full" alt="LevelUpPro" src="https://api.randomx.ai/avatar/LevelUpPro.png" /></span>
//       <div>
//        <h3 class="font-semibold tracking-tight text-base md:text-lg">LevelUpPro</h3>
//        <p class="text-muted-foreground text-xs md:text-sm">player</p>
//       </div>
//      </div>
//     </div>
//     <div class="md:p-4 p-2">
//      <p class="text-muted text-sm md:text-base">. &#55357;&#56397;</p>
//     </div>
//    </div>
//    <div class="rounded-lg border bg-[#1f202f] shadow-sm h-full bg-card border-none">
//     <div class="flex flex-col space-y-1.5 md:p-4 p-2">
//      <div class="flex items-center gap-2 md:gap-4">
//       <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 md:w-10 md:h-10"><img class="aspect-square h-full w-full" alt="MMORPGMaster" src="https://api.randomx.ai/avatar/MMORPGMaster.png" /></span>
//       <div>
//        <h3 class="font-semibold tracking-tight text-base md:text-lg">MMORPGMaster</h3>
//        <p class="text-muted-foreground text-xs md:text-sm">player</p>
//       </div>
//      </div>
//     </div>
//     <div class="md:p-4 p-2">
//      <p class="text-muted text-sm md:text-base">vs! &#55357;&#56399;</p>
//     </div>
//    </div>
//    <div class="rounded-lg border bg-[#1f202f] shadow-sm h-full bg-card border-none">
//     <div class="flex flex-col space-y-1.5 md:p-4 p-2">
//      <div class="flex items-center gap-2 md:gap-4">
//       <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 md:w-10 md:h-10"><img class="aspect-square h-full w-full" alt="BattleRoyaleGuy" src="https://api.randomx.ai/avatar/BattleRoyaleGuy.png" /></span>
//       <div>
//        <h3 class="font-semibold tracking-tight text-base md:text-lg">BattleRoyaleGuy</h3>
//        <p class="text-muted-foreground text-xs md:text-sm">player</p>
//       </div>
//      </div>
//     </div>
//     <div class="md:p-4 p-2">
//      <p class="text-muted text-sm md:text-base">for XP is actually enjoyable. &#55358;&#56601;</p>
//     </div>
//    </div>
//   </div>
//  </section> 

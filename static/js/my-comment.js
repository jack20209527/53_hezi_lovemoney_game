
document.addEventListener('DOMContentLoaded', () => {

    const commentContainer = document.getElementById('comment-grid'); // 使用 ID 获取元素
    const titleElement = document.getElementById('comment-title');

    // 设置标题
    titleElement.textContent = "玩家评论"; // 可以根据需要修改

    commentData.forEach(item => {
      const commentItem = document.createElement('div');
      commentItem.className = "rounded-lg border bg-[#1f202f] shadow-sm h-full bg-card border-none";
      commentItem.innerHTML = `
        <div class="flex flex-col space-y-1.5 md:p-4 p-2">
          <div class="flex items-center gap-2 md:gap-4">
            <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 md:w-10 md:h-10">
              <img class="aspect-square h-full w-full" alt="${item.nickname}" src="${item.avatar}" />
            </span>
            <div>
              <h3 class="font-semibold tracking-tight text-base md:text-lg">${item.nickname}</h3>
              <p class="text-muted-foreground text-xs md:text-sm">${item.playerType}</p>
            </div>
          </div>
        </div>
        <div class="md:p-4 p-2">
          <p class="text-muted text-sm md:text-base">${item.comment}</p>
        </div>
      `;
      commentContainer.appendChild(commentItem);
    });
  });





//   <section class="mx-auto mt-6">
//   <h2 class="text-xl md:text-3xl font-bold text-center mb-6 md:mb-12">Play Comments</h2> 
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


class ClickUtil {
  /**
   * 添加点击事件
   * @param {string} elementId - 元素ID
   * @param {Function} callback - 点击回调函数
   */
  static onClick(elementId, callback) {
      const element = document.getElementById(elementId);
      if (element) {
          element.addEventListener('click', callback);
      } else {
          console.error(`[ClickUtil] 未找到ID为"${elementId}"的元素`);
      }
  }
}




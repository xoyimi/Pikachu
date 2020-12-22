/**
 * 防抖函数
 * @param callback {function} 需要防抖的函数
 * @param delay {number} 延时秒速 单位ms
 *
 * */

function debounce(callback, delay=1000) {
  let timerID = null
  return function () {
    if (timerID) clearTimeout(timerID)
    timerID = setTimeout(() => {
      callback()
    }, delay)
  }
}

export {debounce}
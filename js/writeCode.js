/**
 * @param {object} element 要插入的元素选择器
 * @param {string} code 代码字符
 * @param {number}  speed 控制速度，单位ms
 *
 * */
export function writeCode(element, code, speed = 50) {
  let n = 0;
  let styleTag = document.createElement('style');
  document.querySelector('head').append(styleTag)

  ;(function helper() {
    setTimeout(() => {
      if (n < code.length) {
        if (code[n] === '\n') {
          element.scrollTo(0, element.offsetHeight)
        }
        element.innerHTML = Prism.highlight(code.slice(0, n), Prism.languages.css, 'css')
        styleTag.innerHTML += code[n]
        n++
        setTimeout(helper, speed)
      }

    }, speed)
  })()
}
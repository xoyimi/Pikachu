/**
 * @param {object} element 要插入的元素选择器
 * @param {string} code 代码字符
 * @param {number}  speed 控制速度，单位ms
 *
 * */




export function writeCode(element, code, speed = 50) {
  return new Promise(resolve => {
    let n = 0;
    let styleTag = document.createElement('style');
    document.querySelector('head').append(styleTag)

    //代码速度控制 使用时间代理
    document.querySelector('.btn-wrapper').addEventListener('click', (e) => {
      if (e.target['nodeName'] === 'BUTTON') {
        speed = Number(e.target['dataset']['speed'])
      }
    })

    ;(function helper() {
      setTimeout(() => {
        if (n < code.length) {
          element.scrollTo(0, element.scrollHeight)
          element.innerHTML = Prism.highlight(code.slice(0, n), Prism.languages.css, 'css')
          styleTag.innerHTML += code[n]
          n++
          setTimeout(helper, speed)
        } else {
          resolve()
        }

      }, speed)
    })()
  })
}
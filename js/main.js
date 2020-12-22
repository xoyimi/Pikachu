import {debounce} from "./utils.js";
import {writeCode} from "./writeCode.js"

window.addEventListener('resize', debounce(() => {
  let elem = document.querySelector('.code')
  elem.scrollTo(0, elem.offsetHeight)
}, 100))

const code = `/*
  *{
    transition:all 2s;
  }
  /*代码也要好看的背景色*/
  .code{
    background-image: linear-gradient(25deg, #dcb9bb, #dfcac7, #e1dbd4, #e2ece0);
    /*字体大一些*/
    font-size:14px;
    padding:10px;
  }
  /*我需要一些更好看的字体*/
.code{
    font-family: "PingFang SC","Helvetica","Arial",sans-serif;
}
    /*
    *我需要一张白纸
    */
    .paper{
    height:100px;
    width:100px;
    background-color:red;
    }
    `

// writeCode(document.querySelector('.code'), code, 10)
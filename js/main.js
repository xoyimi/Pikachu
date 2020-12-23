import {debounce} from "./utils.js";
import {writeCode} from "./writeCode.js"

window.addEventListener('resize', debounce(() => {
  let elem = document.querySelector('.code')
  elem.scrollTo(0, elem.offsetHeight)
}, 100))

const code = `/*欢迎来到代码的世界~
*我是小明同学，
*初次见面，
*送一只卡哇伊的皮卡丘送给你们~
*/

/*先给背景调个舒服的渐变色*/
.code {
  background-image: linear-gradient(25deg, #dcb9bb, #dfcac7, #e1dbd4, #e2ece0);
  /*字体再大一些*/
  font-size: 14px;
  /*似乎有点挤*/
  padding: 10px;
}
/*我需要一些更好看的字体*/
.code {
  font-family: "Helvetica", "Arial", sans-serif;
}
/*加入代码高亮吧*/
.code .comment： {
  color: #708090;
}

.code .selector {
  color: #690;
}

.code .punctuation {
  color: #999;
}

.code .property {
  color: #905;
}

.code .function {
  color: #dd4a68;
}
.code .sting {
  color: #690;
}
  /*嗯，好看~可以开始画画咯~*/

  /*先画皮卡丘的头部轮廓*/
.pikachu-head {
  position: relative;
  z-index: 1;
  animation: idle 1.5s infinite;
}

.pikachu-face {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.pikachu-chin {
  position: absolute;
  bottom: 0;
  left: calc(50% - 50px);
  width: 100px;
  height: 75%;
  transform: scaleX(1.05);
  border-radius: 50%;
  border-bottom: 1px solid #000;
}
/*然后是两个小眼睛*/
.pikachu-eye-right,
.pikachu-eye-left {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #000;
}

.pikachu-eye-right {
  top: 30px;
  right: 20px;
}

.pikachu-eye-right::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #fff;

}

.pikachu-eye-left {
  top: 30px;
  left: 20px;
}

.pikachu-eye-left::before {
  content: "";
  position: absolute;
  top: 2px;
  right: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #fff;
}
/*红彤彤的脸颊*/
.pikachu-cheek-right,
.pikachu-cheek-left {
  position: absolute;
  top: 52px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #ff2e2b;
}

.pikachu-cheek-right {
  right: 5px;
}

.pikachu-cheek-left {
  left: 5px;
}

/*小鼻子~*/
.pikachu-nose {
  position: absolute;
  top: 55px;
  left: calc(50% - 2px);
  width: 4px;
  height: 2px;
  background-color: #000;
  border-radius: 50%;
}
/*小嘴巴*/
.pikachu-mouth {
  position: absolute;
  top: 55px;
  left: 50%;
}

.pikachu-mouth::before,
.pikachu-mouth::after {
  content: "";
  position: absolute;
  width: 12px;
  height: 15px;
  border-bottom: 1px solid #000;
  border-radius: 40%;
  background-color: #f4ce42;
}

.pikachu-mouth::before {
  left: -12px;
}

.pikachu-mouth::after {
  right: -12px;
}

/*哦，还有两个小耳朵~~*/
.pikachu-ear-right,
.pikachu-ear-left {
  width: 20px;
  height: 20px;
  border-radius: 30px;
  position: absolute;
  top: 0px;
  transform-origin: bottom;
  border-top: 4px solid #000;
}

.pikachu-ear-left {
  left: 10px;
  transform: rotate(-40deg) scaleY(4);
}

.pikachu-ear-right {
  right: 10px;
  transform: rotate(40deg) scaleY(4);
}
/* 下面画身体部分*/
.pikachu-torso {
  position: relative;
  top: -30px;
  left: 1px;
  width: 100px;
  height: 80px;
  border-radius: 50% 50% 40% 40%;
  border: 1px solid #000;
  transform: scaleY(1.2);
}

.pikachu-body {
  position: relative;
}
/*两个手臂*/
.pikachu-arm-right,
.pikachu-arm-left {
  width: 20px;
  height: 40px;
  position: absolute;
  top: -5px;
  border-width: 0 1px 2px 1px;
  border-style: solid;
  border-color: #000;
  border-radius: 20% 20% 40% 40%;
}

.pikachu-arm-right {
  left: 10px;
  transform: rotateZ(-20deg);
}

.pikachu-arm-left {
  right: 10px;
  transform: rotateZ(30deg);
}
/*两只小jio*/
.pikachu-foot-right,
.pikachu-foot-left {
  width: 18px;
  height: 30px;
  position: absolute;
  bottom: 5px;
  border-radius: 10% 10% 50% 50%;
  border: 1px solid #000;
}

.pikachu-foot-right {
  right: 10px;
  transform: rotate(-30deg);
}

.pikachu-foot-left {
  left: 10px;
  transform: rotate(30deg);
}

/*长长的尾巴~*/
.pikachu-tail-part {
  position: absolute;
}

.pikachu-tail-part.part-one {
  width: 15px;
  bottom: 20px;
  left: 80px;
  height: 70px;
  transform: rotate(70deg);
  border-radius: 20% 20% 0 0;
}

.pikachu-tail-part.part-two {
  width: 15px;
  bottom: 62px;
  left: 108px;
  height: 30px;
  transform: rotate(-15deg);
  border-radius: 0 0 30% 30%;
}

.pikachu-tail-part.part-three {
  width: 15px;
  bottom: 78px;
  left: 118px;
  height: 50px;
  transform: rotate(55deg) scaleX(1.8) skewY(60deg);
  border-radius: 0 0 50% 50%;
}

/*尾巴摇动起来*/

.pikachu-tail {
  animation: shakeTail 2s infinite;
  position: absolute;
  bottom: 0;
}

/*可爱的精灵球*/
.pikachu-pokeball {
  position: absolute;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background-color: red;
  top: 12px;
  left: 35px;
  border: 1px solid black;
  box-shadow: 0 0 10px 3px rgba(255, 255, 255, 1);
}

.pikachu-pokeball::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border-top: 13px solid #ff2e2b;
  border-bottom: 13px solid white;

}

.pikachu-pokeball::after {
  content: '';
  position: absolute;
  height: 4px;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  background-color: black;
}

.pikachu-pokeball-inner {
  position: absolute;
  height: 12px;
  width: 12px;
  background-color: white;
  border: 2px solid #000000;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%) ;
  z-index: 1;
}

.pikachu-pokeball-inner::before {
  content: '';
  position: absolute;
  height: 6px;
  width: 6px;
  border: 1px solid #000000;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(63deg, #0b16e8, #516eec, #5bb6ed, #32ffec);
}
.pikachu-pokeball {
  animation: pokeballRotate 4s ease infinite;
}`

writeCode(document.querySelector('.code'), code, 10)
    .then(() => {
      document.querySelector('.name').style.visibility = 'visible'
    })


//音乐控制
let bgmBtn = document.querySelector('#bgmButton')

setTimeout(() => {
  document.querySelector('.audio').addEventListener('playing', () => {
    bgmBtn.style.animationPlayState = 'running'
  })
}, 100)
bgmBtn.addEventListener('click', function () {
  let bgm = document.querySelector('audio')
  if (bgm.paused) {
    bgm.play().then(() => {
      this.style.animationPlayState = 'running'
    })
  } else {
    bgm.pause()
    this.style.animationPlayState = 'paused'
  }
})


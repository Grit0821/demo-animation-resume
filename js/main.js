//把code写到#code和style标签里
function writeCode(prefix,code,fn){
  let domCode = document.querySelector('#code')
  let n = 0
  let id = setInterval(()=>{
    n += 1
    domCode.innerHTML = Prism.highlight(  prefix +code.substring(0,n), Prism.languages.css, 'css')
    styleTag.innerHTML = prefix + code.substring(0,n)
    domCode.scrollTop = domCode.scrollHeight
    if(n >= code.length){
      window.clearInterval(id)
      fn.call()
    }
  },10)
}



function writeMarkdown(markdown,fn){
  let domPaper = document.querySelector('#paper>.content')
  let n = 0
  let id = setInterval(()=>{
    n += 1
    domPaper.innerHTML =  markdown.substring(0,n)
    domPaper.scrollTop = domPaper.scrollHeight
    if(n >= markdown.length){
      window.clearInterval(id)
      fn.call()
    }
  },10)
}





var result = `/*
 *面试官你好，我是王毅
 *我将以动画的形式来介绍我自己
 *只用文字介绍太单调了
 *我就用代码来介绍吧
 *首先准备一些样式
 */
*{
 transition: all 1s;
 }
html{
  background: rgb(222,222,222);
  font-size: 16px;
}
#code{
  border: 2px solid #aaa;
  padding: 16px;
}
/*我需要一点代码高亮*/

.token.selector{
  color: #690;
}
.token.property{
  color: #905;
}
.token.function{
  color: #dd4a68;
}

/* 加点3D效果 */
#code{
  transform: rotate(360deg);
}
/* 不玩了，我来介绍一下自己 */
/* 我需要一张白纸 */
#code{
  position: fixed;
  left: 0;
  width: 50%;
  height: 100%;
}
#paper{
  position: fixed;
  right: 0;
  width: 50%;
  height: 100%;
  background:black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
}
#paper > .content{
  background: white;
  height: 100%;
  width: 100%;
}
`
var result2 = `
  #paper{
  }
  /*
  * 接下来把 Markdown 变成 Html - marked.js
  */
  /*
  *接下来给 HTML 加样式
  */
  /*
  *这就是我会动的简历
  *谢谢观看！
  */
`
var md = `
  # 自我介绍
  
  我叫王毅
  1995 年 8 月出生
  大连理工大学毕业
  自学前端半年
  希望应聘前端开发岗位

  #技能介绍

  熟悉 JavaScript CSS

  #项目介绍

  1. 苹果风格轮播
  2. XXX简历
  3. Canvas画板

  #联系方式

  QQ 592699945
  email xxxxxxx
  手机 xxxxxxx
`



writeCode('',result,()=>{
  createPaper(()=>{
    writeCode(result,result2,()=>{
      writeMarkdown(md)
    })
  })
})

function createPaper(fn){
  var paper = document.createElement('div')
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn.call()
}


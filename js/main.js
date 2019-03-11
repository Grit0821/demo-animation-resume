//把code写到#code和style标签里
function writeCss(prefix,code,fn){
  let domCode = document.querySelector('#code')
  let n = 0
  let id = setInterval(()=>{
    n += 1
    domCode.innerHTML = Prism.highlight(prefix +code.substring(0,n), Prism.languages.css, 'css')
    styleTag.innerHTML = prefix + code.substring(0,n)
    domCode.scrollTop = domCode.scrollHeight
    if(n >= code.length){
      window.clearInterval(id)
      fn.call()
    }
  },5)
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
  },5)
}

var css1 = `/*
 * 面试官你好，我是王毅 
 * 我将以动画的形式来介绍我自己 
 * 只用文字介绍太单调了
 * 我就用代码来介绍吧
 */

/* 首先给所有元素加上过渡效果 */
*{
 transition: all 1s;
 }
 /* 加上背景 */
html{
  background: rgb(0,43,54);
  color: #808080; 
  font-size: 16px;
}
/* 加上边框 */
#code{
  border: 2px solid #aaa;
  padding: 16px;
}
/* 代码高亮 */
.token.selector{
  color: #690;
}
.token.property{
  color: #905;
}
.token.function{
  color: #dd4a68;
}


/* 现在我来介绍一下自己 */
/* 准备一个编辑器 */

#code-wrapper{
  width: 50%; left: 0; position: fixed; 
  height: 100%;
}
#paper > .content {
 display: block;
}


/* 于是我可以在白纸上写字了，请看右边*/ 
`

var md = `
# 自我介绍

我叫 王毅 
1995 年 8 月出生
大连理工 学校毕业
希望应聘前端开发岗位

# 技能介绍

熟悉 JavaScript CSS HTML

# 项目介绍

1. XXX 轮播
2. XXX 简历
3. XXX 画板

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
`
var css2 = `
/* 接下来用一个优秀的库 marked.js
 * 把 Markdown 变成 HTML
 */

`

var css3 = `
/*
 * 会动的简历播放完了
 * 谢谢观看!(>▽<)
 */
`
writeCss('',css1,()=>{
  createPaper(()=>{
    writeMarkdown(md,()=>{
      writeCss(css1,css2,()=>{
        markdownToHtml(()=>{
          writeCss(css1 + css2,css3,()=>{
            console.log('完成')
          })
        })
      })
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


function markdownToHtml(fn){
  var div = document.createElement('div')  
  div.className = 'html markdown-body' // 两个class，中间用空格隔开，注意区分
  div.innerHTML = marked(md)
  let domPaper = document.querySelector('#paper > .content')
  domPaper.replaceWith(div)
  fn.call()
}


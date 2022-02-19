// 指this是指包含它的函数作为方法被调用时所属的对象
// function foo(fn, duration) {
//   fn.call('lhw')
// }
// foo(function () {
//   console.log(this)

// }, 3000)
// let obj = {
//   name:'lhw',
//   baz: bar
// }
// function bar(){
//   setTimeout(() => {
//     console.log(this)
//   }, 1000);
// }
// obj.baz()
var boxHtml = document.querySelector('.box')
boxHtml.onclick = function() {
  console.log(this)
}
boxHtml.onclick = function() {
  console.log(this)
}
// boxHtml.onclick()
boxHtml.addEventListener('click',function(){
  console.log(this)
})
boxHtml.addEventListener('click',function(){
  console.log(this)
})
boxHtml.addEventListener('click',function(){
  console.log(this)
})
var arr = ['abc','lhw','nba']
arr.forEach(function(item){
  console.log(this,item)  

},'lhw')
arr.map(function(item){
  console.log(this,item)
},'nba')

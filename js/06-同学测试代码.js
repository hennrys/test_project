function foo(el) {
  console.log(el, this.id)
}
var obj = {
  id: 'lhw'
};
// var num = [1,2,3] 
// num.forEach(foo, obj)
[1, 2, 3].forEach(foo, obj)

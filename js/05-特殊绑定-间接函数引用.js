var obj = {
  name: 'coderwhy',
  foo(){
    console.log(this)
  }
}
var obj2 = {
  name:'lhw',
};
// obj2.bar = obj.foo
// obj2.bar()
console.log(obj2.bar = obj.foo);
(obj2.bar = obj.foo)()

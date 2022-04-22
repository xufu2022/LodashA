import * as _ from "lodash";

const log=(fun:any): void=>console.log(fun);
const header=(title: string): void=>log(`************************* ${title} ************************`)

header('function')
//return array of function name
const vechile={drive:()=>{},break:()=>{}}
log(_.functions(vechile)) //[ 'drive', 'break' ]

header('functionsIn')
//return array of function of the specified object, create array of all the property names at that's all functions, not only in the object iteself, but also inherited function
log(_.functionsIn(vechile))
// it will display the protostype that we generated, but functions will not display it

header('get') 
// will get the value of an object at a given path
log(_.get({a:1,b:{c:2,d:3},e:[1,2,3]},'a'))
log(_.get({a:1,b:{c:2,d:3},e:[1,2,3]},'b'))
log(_.get({a:1,b:{c:2,d:3},e:[1,2,3]},'b.c'))
log(_.get({a:1,b:{c:2,d:3},e:[1,2,3]},'e'))
log(_.get({a:1,b:{c:2,d:3},e:[1,2,3]},'e[1]'))
log(_.get({a:1,b:{c:2,d:3},e:[1,2,3]},'e.1'))

header('has') 
// check whether it has property
log(_.get({a:1,b:{c:2,d:3},e:[1,2,3]},'a'))
log(_.has({a:1,b:{c:2,d:3},e:[1,2,3]},'a')) 
log(_.has({a:1,b:{c:2,d:3},e:[1,2,3]},'b.c')) 
log(_.has({a:1,b:{c:2,d:3},e:[1,2,3]},'e.1')) 
log(_.has({a:1,b:{c:2,d:3},e:[1,2,3]},'e.3')) 

header('hasIn')

// path is either a direct or inherited property of the object
//vehicle.prototype.Material='metal'
header('at')
log(_.at({a:1,b:{c:2,d:3},e:[1,2,3]},'a')) //[1]
log(_.at({a:1,b:{c:2,d:3},e:[1,2,3]},['a','b'])) //[1,{c:2,d:3}]
log(_.get({a:1,b:{c:2,d:3},e:[1,2,3]},'a')) //1
log(_.at({a:1,b:{c:2,d:3},e:[1,2,3]},['e.0','e.1'])) //[ 1, 2 ]
log(_.at({a:1,b:{c:2,d:3},e:[1,2,3]},'e.0','e.1')) //[ 1, 2 ]

header('set')
let setObject={a:1,b:{c:2,d:3},e:[1,2,3]};
log(_.set(setObject,'a',2));
log(_.set(setObject,'e.0',0));
log(_.set(setObject,'e.4',99));
log(_.set(setObject,'e.10',99));
log(_.set(setObject,'z',-2));
//log(_.set(setObject,'x.a.e')); not supported in typescript

header('setwith')
let swith={};
log(_.set(swith,['x','0'],99))
swith={}; // support key value
log(_.setWith(swith,['x','0'],99,Object))

header('unset')
// removed the property from objects, but not recursive
let unst={
    a: 2,
    b: { c: 2, d: 3 },
    e: [ 0, 2, 3, , 99,,,,,, 99 ],
    z: -2
  }
  log(_.unset(unst,'z'))
  log(_.unset(unst,'a'))
log(unst)

header('update')
//value that is being set rather than just being given the value itself
let upObject={a:1,b:{c:2,d:3},e:[1,2,3]};
log(_.set(upObject,'a',99))
log(_.update(upObject,'a',i=>i *2))
log(_.update(upObject,'b.c',i=>i *3))

let user={name: 'barney', age:36, active: false};
//log(_.update(user,'active',i=>i.active=true)) //not working
log(_.set(user,'active',true)) 

header('updateWith')
//provide custom function to produce the objects for the given path
let upObject1={};
log(_.update(upObject1,['x','0'],_.constant(5)))
upObject1={};
log(_.updateWith(upObject1,['x','0'],_.constant(5),Object))

header('assign')
//copy the property to another object
const ass1={a:1,b:2}
log(_.assign({c:3},ass1))
log(_.assign(ass1,{c:3})) //{ a: 1, b: 2, c: 3 }

header('assignIn')
// it will assign any inherited properties as well
// Vehicle.prototype.Material='metal'
// _.assignIn({make:'volva'},new Vehicle)
header('assignWith')
// use customized function to determine how the values are assigned
function customizer(obj1 : any,srcVal :any){
  return _.isUndefined(obj1)?[srcVal]:obj1;}
log(_.assignWith({a:23},{a:99},customizer)); //{ a: 23 }

header('assignInWith')
//question on assignInWith vs extendWith
// _.assignInWith({a:10}, new Foo, new Bar, customizer)
//_.extendWith({}, new Foo, new Bar, customizer)

//v17
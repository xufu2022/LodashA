import * as _ from "lodash";
const log = (fun: any): void => console.log(fun);
const header = (title: string): void => log(`************************* ${title} ************************`)

header('before after')
log(_.before(5, () => _.random(20))()) // only 4 time for real, then repeat from the 4th time
log(_.after(5, () => _.random(20))()) // wait until 5th time to do the work

header('delay')
//function will be invoked after the delay
log(_.delay(function (m, e) { console.log(`${m} error ${e}`) }, 2000, 'eoe', 'err'))
log(_.delay((m, e) => console.log(`${m} error ${e}`), 2000, 'eoe', 'err'))

header('defer')
//wait js core to clear before executing the function provide
log(_.defer((test) => console.log(test), "hello"))

header('flip')
//return a new function and invoke the given function with parameter in reverse
const f1 = (a: any, b: any) => console.log(a, b);
const f1a = (...args: any) => console.log(args);
var f2 = _.flip(f1);
log(f2([1, 2, 3], 'hello')) //hello [ 1, 2, 3 ]
var f2a = _.flip(f1a);
log(f2a([1, 2, 3], 'hello')) //hello [ 1, 2, 3 ]

header('memoize')
//keep the same result when call it
let me1 = { a: 10, b: 9 }
_.values(me1);
const mem = _.memoize(_.values);
log(mem(me1));
me1.a = 15
log(mem(me1));
mem.cache.set(me1, [15, 20])
log(mem(me1));

header('rearg')
// with arguments rearranged according to the specified index given
let f = _.rearg((a: any, b, c) => { return [a, b, c] }, [1, 0, 2])
log(f(1, 2, 3)) //[ 2, 1, 3 ]

header('once')
// onto the function once, so this functon, will call a given function once, further call will return first result
const o1=()=>_.random(10)
const ons=_.once(o1)
log(ons())
log(ons())
log(ons())

header('throttle')
//call the functon in millisecond, will not be invoke until time specifed
const acton=()=>console.log('my acton')
const tf=_.throttle(acton,10000)

setTimeout(tf,1000);
setTimeout(tf,1000);
setTimeout(tf,1000);
setTimeout(tf,1000);
setTimeout(tf,1000);

header('debounce')
// prevent action be executed too many times in quick recession
// debouce wll wait for the period again before invoking
//debounce calls a function when a user hasn't carried out an event in a specific amount of time, while throttle calls a function at intervals of a specified amount of time while the user is carrying out an event
//Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called. As in “execute this function only if 100 milliseconds have passed without it being called.”
//Throttling enforces a maximum number of times a function can be called over time. As in “execute this function at most once every 100 milliseconds.
const dbounce=_.debounce(acton,5000);
setTimeout(dbounce,1000);
setTimeout(dbounce,1000);

header('negate')
//return opposite result
const neg1=(j:number)=>j%2===0;
log(_.map([5,10,15,20],neg1))
log(_.map([5,10,15,20],_.negate(neg1)))

header('rest')
const res=(...arg: any)=>console.log(arg);
log(res(1,2,3))
const res1=_.rest(res);
log(res1(1,2,3,4,5,6))

header('unary')
//will call the function with only 1 parameter, others will be ignored
const ur11=(a:any,b:any)=>console.log(a,b);
ur11(10,20)
const url2=_.unary(ur11);
log(url2(10))

//15
header('ary')
//return a function that invokes the given function up to a specified a number of parameter, additional one ignored
const ary1=(a:any,b:any)=>{if(a && b)console.log(a,b);else{console.log(a)}}
log(ary1(10,20))
const ary=_.ary(ary1,1);
const ary2=_.ary(ary1,2);
log(ary(15))
log(ary(15,10))
log(ary2(2,15))
// unary only accept 1 parameter, ary can accept number of parameter specififed

header('bind bindkeys')
// const b1={x:5, y:10}
// const b2={x:4, y:11}
// const bprint=(c: any)=>console.log(c.x,c.y);
//const bprint=(c: any)=>console.log(this.x,this.y);
//override this to fix
// const c1=_.bind(bprint,b1)
// const c2=_.bind(bprint,b2)


//var suer={age:42}
//function yeartoleft(){return 67-this.age}
// var myFunc=_.bindKey(suer, 'yeartoleft')
// log(c1)
// log(c2())
//myFunc()

header('spread')
// invoke function with this binding, and that's accompanied by a seriers of arguments, very similar to spread operator in js
var calculator=_.spread((a,b,c,d,e)=>a+b+c+d+e)
log(calculator([5,4,7,8,3]))
log(calculator([5,4,7,8]))

header('wrap')
var square=(n:number)=>n*n
var squareNum=_.wrap(6,square)
log(squareNum())
var wrapdiv=_.wrap(_.escape,(func,value: any)=>'<div>'+ func(value) + '</div>')
log(wrapdiv('bq store'));

header('curry')
//create new function that will accept arguments of the given functon

var character=(name: any,type: any,stamina: any,attack: any)=>console.log(name,type,stamina,attack)
character('darnak','wizard',6,8)

let charactercurry=(name: any)=>(type: any)=>(stamina: any)=>(attack: any)=>console.log(name,type,stamina,attack)
//charactercurry('darnak')
var f1cu=charactercurry('darnak');
var f2cu=f1cu('wizard');
var f3cu=f2cu(6);
f3cu(8);

let curried=_.curry(character)
curried('darnak')('wizard')(6)(8)
curried('darnak','wizard',6,8)

header('curryright')
var xyz=(x:any,y:any,z:any)=>[x,y,z]
var curried1=_.curry(xyz)
var curryRight=_.curryRight(xyz);
log(curried1(1)(2)(3))
log(curryRight(1)(2)(3))

header('partial')
//partial fill in one of parameter that specified
var add=(a:number,b:number)=>a+b
log(add(2,3))
var add2=_.partial(add,2)
log(add2(3))

var userdetail=(name:any,language:any,country:any)=>console.log(name,language,country)
var ukdetail=_.partial(userdetail,'english','gb')
var usdetail=_.partial(userdetail,'english','us')
ukdetail('john')
usdetail('peter')
var fulluserdetials=(name:any,age:any,gender:any,language:any,country:any)=>console.log(name,age,gender,language,country)
var fullukuserdetails=_.partial(fulluserdetials,_,_,'english','gb') //underscore should be the placeholder, rather than lodash as currently processed
var fullususerdetails=_.partial(fulluserdetials,_,_,'english','us')
log(fullukuserdetails('tom'))
log(fullususerdetails('sarah'))

header('partialright')
//pass from right to left
var part=_.partial(xyz,1)
var part2=_.partialRight(xyz,1)
log(part(2,3))
log(part2(2,3))

header('overargs')
const cube=(n:number)=>n*n*n;
const triple=(n:number)=>n* 3;
var foverargs=_.overArgs((a,b)=>[a,b],[cube,triple])
log(foverargs(3,5))
log(foverargs(10,20))
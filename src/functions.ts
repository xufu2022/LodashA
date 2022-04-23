import { url } from "inspector";
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
const ur1=(a:any,b:any)=>console.log(a,b);
ur1(10,20)
const url2=_.unary(url);
log(url2(10))

//15
header('ary')
//return a function that invokes the given function up to a specified a number of parameter, additional one ignored
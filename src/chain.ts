import _ from "lodash";

const log=(fun:any): void=>console.log(fun);
const header=(title: string): void=>log(`************************* ${title} ************************`)


header('wrapped')
var array=[1,2,3];
log(_.join(array,':'))
log(_(array).join(':')) //functional style
log(_.head(array))

log(_(array).concat([4,5,6])) //lodash wrapper#

header('unwrapper')
// the reason for wrapp is that some of the function can be chained together
log(_(array).concat([4,5,6])) //lodash wrapper#

header('value, valueof tojson')
log(_(array).concat([4,5,6]).value())
log(_(array).concat([4,5,6]).valueOf())
log(_(array).concat([4,5,6]).toJSON())

header('first chain')

var arr1=[10,20,30,40]
var arr2=[20,30,40,50]
var arr3=_.concat(arr1,arr2);
var arr4=_.filter(arr3,x=>x%20===10 ||x %10==4)
log(arr4)
var arr5=_.uniq(arr4)
var arr6=_.map(arr5,x=>x /2)
log(arr6)

var arr6=_.map(_.uniq(_.filter(_.concat(arr1,arr2),x=>x%20===10 ||x %10==4)),x=>x/2)
log(_.map(_.uniq(_.filter(_.concat(arr1,arr2),x=>x%20===10 ||x %10==4)),x=>x/2))

// chaining 
var result=_(arr1).concat(arr2).filter(x=>x %20 ===10 || x % 10===5).uniq().map(x=>x/2)
log(result.value())

header('chaining work')

header('implicit chain vs explicit chain')

var numbs=[1,2,3,4,5]
_(numbs).filter(x=>x % 2===0).map(x=>x *x).sum() // reeturn primitive value, otherwise return wrapped value
console.log(_(numbs).filter(x=>x % 2===0).map(x=>x *x).sum())

log(_.chain(numbs).filter(x=>x % 2===0).map(x=>x *x).sum().value())
log(_(numbs).chain().filter(x=>x % 2===0).map(x=>x *x).sum().value())

header('tap')
log(_([1,2,3,,4,5]).reverse().first())
log(_([1,2,3,,4,5]).tap(function(array){array.pop()}).reverse().first())
log(_([1,2,3,,4,5]).tap(x=>x.pop()).reverse().first())
log(_([1,2,3,,4,5]).tap(x=>x.push(6)).reverse().first())

header('thru')
// overwrite value been passed down the chain
log(_([1,2,3,,4,5]).thru((_)=>[4,5,6]).reverse().value()) //[6,5,4]
log(_([1,2,3,,4,5]).reverse().thru((_)=>[4,5,6]).value()) //[4,5,6]

header('wrapped reverse')
log(_([1,2,3]).reverse())
log(_([1,2,3]).reverse().value())
log(_.reverse([1,2,3]))

header('commit')
//execute the chain and then it will return the wrapper
var array=[1,2,3]
var wrapper=_(array).push(4).push(5).push(6)
log(wrapper)
wrapper.commit() // all the functions get evaluated and we can see the array now holds for wrapper array 4,5 and 6
log(array) //[ 1, 2, 3, 4, 5, 6 ]

header('at')
var object={a:1,b:{c:[2,3]}};
log(_.at(object,['a']))
log(_.at(object,['a','b']))
log(_.at(object,['a','b.c']))
//log(_(object).at(['a','b.c']).value()) 

header('symbol')
//var wrapped=_([1,2,3,,4,5])
//log(wrapped[Symbol.iterator]()===wrapped)
//Array.from(wrapped)

header('plant')
var arr1=[10,20,30,40]
var arr2=[20,30,40,50]
var result=_(arr1).concat(arr2)
log(result.value())
var result2=result.plant([40,20,85,34])  //substitued array with array1 [10,20,30,40] with [40,20,85,34]
log(result2.value())

header('next')
// enumerate value in the array object
var wrapped=_([1,2,3,,4,5])
log(wrapped)
//wrapped.next()
var wrapped2=_({name:'fred',age:26})
log(wrapped2)
//wrapped.next()


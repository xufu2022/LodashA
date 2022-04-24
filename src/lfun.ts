import * as _ from "lodash";
const log = (fun: any): void => console.log(fun);
const header = (title: string): void => log(`************************* ${title} ************************`)

header('eq isequal')
log(_.eq('a','a'))
log(_.eq({a:1},{a:2}))
log(_.eq({a:1},{a:1}))

// isequal to deep comparsion
log(_.isEqual({a:1},{a:1}))
var array=[1,2,3]
var array2=[1,2,3]
log(_.isEqual(array,array2))

header('isequalWith')
var array=[1,2,3]
var array2=[2,4,6]
var compare=function(obj1:Array<number>,obj2: Array<number>){
    console.log(obj1,obj2)
    var v1=_.reduce(obj1,(sum,m)=>sum + m,0);
    var v2=_.reduce(obj2,(sum,m)=>sum + m,0);
    return v1 %2===0 && v2 %2===0
}
log(_.isEqualWith(array,array2,compare))

header('gt, lt, gte')
log(_.gt(2,1))
log(_.lt(2,1))
log(_.gte(2,2))

header('isargument')
log(_.isArguments([]))
log(_.isArguments((x:number)=>x*x))
log(_.isArguments(function(x:number){return x}(1)))
log(_.isArguments(function(){return arguments}()))

header('isArray isArrayLike isArrayLikeObject')
log(_.isArray([1,2,3]))
log(_.isArray(1))
// if has length property and not function
log(_.isArrayLike([1,2,3]))
log(_.isArrayLike('abc')) //'abc'.length
var docment={children:[]};
log(_.isArrayLike(docment.children))

//isArrayLikeObject return true if the given object looks a bit like array
log(_.isArrayLikeObject([1,2,3]))
log(_.isArrayLikeObject('abc'))
log(_.isArrayLikeObject({}))

header('isBoolean isString')
log(_.isBoolean(true))
log(_.isBoolean(false))
log(_.isBoolean(0))

log(_.isString('dfjie'))

header('isdate')
log(_.isDate(new Date))
log(_.isDate('2007-06-01'))
log(_.isDate(new Date('2007-06-01')))

header('isElement')
//check if it is dom element
header('isError')
log(_.isError(Error()))
log(_.isError(new Error))

header('isempty')
//length of zero
log(_.isEmpty(null))
log(_.isEmpty({a:1}))
log(_.isEmpty({}))

header('isFuncton')
log(_.isFunction(_))
log(_.isFunction(()=>console.log('4')))
function test(){return true}
log(_.isFunction(test))
log(_.isFunction(test()))

// stop 15

import * as _ from "lodash";

const log = (fun: any): void => console.log(fun);
const header = (title: string): void => log(`************************* ${title} ************************`)

header('function')
//return array of function name
const vechile = { drive: () => { }, break: () => { } }
log(_.functions(vechile)) //[ 'drive', 'break' ]

header('functionsIn')
//return array of function of the specified object, create array of all the property names at that's all functions, not only in the object iteself, but also inherited function
log(_.functionsIn(vechile))
// it will display the protostype that we generated, but functions will not display it

header('get')
// will get the value of an object at a given path
log(_.get({ a: 1, b: { c: 2, d: 3 }, e: [1, 2, 3] }, 'a'))
log(_.get({ a: 1, b: { c: 2, d: 3 }, e: [1, 2, 3] }, 'b'))
log(_.get({ a: 1, b: { c: 2, d: 3 }, e: [1, 2, 3] }, 'b.c'))
log(_.get({ a: 1, b: { c: 2, d: 3 }, e: [1, 2, 3] }, 'e'))
log(_.get({ a: 1, b: { c: 2, d: 3 }, e: [1, 2, 3] }, 'e[1]'))
log(_.get({ a: 1, b: { c: 2, d: 3 }, e: [1, 2, 3] }, 'e.1'))

header('has')
// check whether it has property
log(_.get({ a: 1, b: { c: 2, d: 3 }, e: [1, 2, 3] }, 'a'))
log(_.has({ a: 1, b: { c: 2, d: 3 }, e: [1, 2, 3] }, 'a'))
log(_.has({ a: 1, b: { c: 2, d: 3 }, e: [1, 2, 3] }, 'b.c'))
log(_.has({ a: 1, b: { c: 2, d: 3 }, e: [1, 2, 3] }, 'e.1'))
log(_.has({ a: 1, b: { c: 2, d: 3 }, e: [1, 2, 3] }, 'e.3'))

header('hasIn')

// path is either a direct or inherited property of the object
//vehicle.prototype.Material='metal'
header('at')
log(_.at({ a: 1, b: { c: 2, d: 3 }, e: [1, 2, 3] }, 'a')) //[1]
log(_.at({ a: 1, b: { c: 2, d: 3 }, e: [1, 2, 3] }, ['a', 'b'])) //[1,{c:2,d:3}]
log(_.get({ a: 1, b: { c: 2, d: 3 }, e: [1, 2, 3] }, 'a')) //1
log(_.at({ a: 1, b: { c: 2, d: 3 }, e: [1, 2, 3] }, ['e.0', 'e.1'])) //[ 1, 2 ]
log(_.at({ a: 1, b: { c: 2, d: 3 }, e: [1, 2, 3] }, 'e.0', 'e.1')) //[ 1, 2 ]

header('set')
let setObject = { a: 1, b: { c: 2, d: 3 }, e: [1, 2, 3] };
log(_.set(setObject, 'a', 2));
log(_.set(setObject, 'e.0', 0));
log(_.set(setObject, 'e.4', 99));
log(_.set(setObject, 'e.10', 99));
log(_.set(setObject, 'z', -2));
//log(_.set(setObject,'x.a.e')); not supported in typescript

header('setwith')
let swith = {};
log(_.set(swith, ['x', '0'], 99))
swith = {}; // support key value
log(_.setWith(swith, ['x', '0'], 99, Object))

header('unset')
// removed the property from objects, but not recursive
let unst = {
  a: 2,
  b: { c: 2, d: 3 },
  e: [0, 2, 3, , 99, , , , , , 99],
  z: -2
}
log(_.unset(unst, 'z'))
log(_.unset(unst, 'a'))
log(unst)

header('update')
//value that is being set rather than just being given the value itself
let upObject = { a: 1, b: { c: 2, d: 3 }, e: [1, 2, 3] };
log(_.set(upObject, 'a', 99))
log(_.update(upObject, 'a', i => i * 2))
log(_.update(upObject, 'b.c', i => i * 3))

let user = { name: 'barney', age: 36, active: false };
//log(_.update(user,'active',i=>i.active=true)) //not working
log(_.set(user, 'active', true))

header('updateWith')
//provide custom function to produce the objects for the given path
let upObject1 = {};
log(_.update(upObject1, ['x', '0'], _.constant(5)))
upObject1 = {};
log(_.updateWith(upObject1, ['x', '0'], _.constant(5), Object))

header('assign')
//copy the property to another object
const ass1 = { a: 1, b: 2 }
log(_.assign({ c: 3 }, ass1))
log(_.assign(ass1, { c: 3 })) //{ a: 1, b: 2, c: 3 }

header('assignIn')
// it will assign any inherited properties as well
// Vehicle.prototype.Material='metal'
// _.assignIn({make:'volva'},new Vehicle)
header('assignWith')
// use customized function to determine how the values are assigned
function customizer(obj1: any, srcVal: any) {
  return _.isUndefined(obj1) ? [srcVal] : obj1;
}
log(_.assignWith({ a: 23 }, { a: 99 }, customizer)); //{ a: 23 }

header('assignInWith')
//question on assignInWith vs extendWith
// _.assignInWith({a:10}, new Foo, new Bar, customizer)
//_.extendWith({}, new Foo, new Bar, customizer)

header('invertby')
//not mutated
const invb = { a: 1, b: 2, c: 2 }
log(_.invert(invb)) //{ a: 1, b: 2, c: 2 }
log(_.invertBy(invb)) //{ '1': [ 'a' ], '2': [ 'b', 'c' ] }
log(_.invertBy(invb, i => 'group' + i)) //{ group1: [ 'a' ], group2: [ 'b', 'c' ] }

header('keys and values')
const key1 = { a: 1, b: 2, c: 3 };
const keyvechile = { wheel: 4, manufactor: '', model: 3 }
log(_.keys(key1))
log(_.keys(keyvechile))
log(_.values(keyvechile))
log(_.values(key1))

header('keyin and valuesin')
log(_.valuesIn(keyvechile)) //[ 4, '', 3 ]
// it will output prototype property key/value

header('ToPairsIn EntriesIn')
//holding enumerated string, key value paris on object and any inherited key value pairs higher up the inherited tree
const pairi = { a: 1, b: 2 } // prototype
log(_.entriesIn(pairi)); //[ [ 'a', 1 ], [ 'b', 2 ] ]
log(_.toPairsIn(pairi)); //[ [ 'a', 1 ], [ 'b', 2 ] ]

header('mapkeys mapvalues')
//create object with the same values as the given object andd that objects will ahve the keys generated by running each of key through a given function
const mk1 = { a: 1, b: 2 }
log(_.mapKeys(mk1, (value, key) => key + value)) //{ a1: 1, b2: 2 }
log(_.mapValues(mk1, (value, key) => key + value)) //{ a: 'a1', b: 'b2' }
let users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebble', age: 41, active: false },
]
log(_.mapValues(users, i => i))
//js support _.mapValues(users,i=>i.age) // {'0': 36, '1': 40 ,'2': 41}

header('omit')
// create new object
const omit1 = { a: 1, b: 2, c: 3 }
log(_.omit(omit1, 'a')) //{ b: 2, c: 3 }
log(_.omit(omit1, 'b', 'c')) //{ a:1 }
log(_.omit(omit1, ['b', 'c'])) //{ a:1 }

header('omitby')
log(_.omitBy(omit1, _.isNumber))
log(_.omitBy(omit1, !_.isNumber))
const omitb = { a: 1, b: 2, c: 3, d: 'd' }
log(_.omitBy(omitb, _.isNumber))
log(_.omitBy(omitb, !_.isNumber))

header('entries')
log(_.entries(omit1)) //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

header('findkey findlastkey')
const users2 = {
  barney: { age: 36, active: true },
  fred: { age: 40, active: false },
  pebble: { age: 1, active: false }
}
log(_.find(users2, i => i.age < 40)) //{ age: 36, active: true }
log(_.findKey(users2, i => i.age < 40)) //barney
log(_.findLastKey(users2, i => i.age < 40)) //pebble

header('defaults and defaultsDeep')
// the object will be mutated
const default1 = { a: 1, b: undefined }
log(_.defaults(default1, { a: 2, b: 3 })) //{ a: 1, b: 3 }
log(_.defaults(default1, { a: 2, b: 3, c: 10 })) //{ a: 1, b: 3, c:10 }

const defaultd = { a: 1, b: { c: { d: undefined } } }
log(_.defaultsDeep(defaultd, { b: { c: { d: 2 } } })) //{ a: 1, b: { c: { d: 2 } } }

header('invoke')
const inv = { a: [{ b: { c: [1, 2, 3, 4] } }] }
log(_.invoke(inv, 'a[0].b.c.slice', 1, 3)) //[ 2, 3 ]
log(_.get(inv, 'a[0]'))
log(_.get(inv, 'a[0].b'))

header('result')
//similiar to get
const geto = { a: _.constant(1), b: { c: 2, d: 3 }, f: () => 5 }
log(_.result(geto, 'a')) //1
log(_.get(geto, 'a')) //[Function (anonymous)]
log(_.result(geto, 'f')) //5

header('pick pickby')
const pk1 = { a: 1, b: 2, c: 3, d: 'dd' }
log(_.pick(pk1, 'a', 'b')) //{ a: 1, b: 2 }
log(_.pick(pk1, ['a', 'b'])) //{ a: 1, b: 2 }
log(_.pickBy(pk1, _.isNumber)) //{ a: 1, b: 2, c: 3 }

header('forown forownRight')
const fo = { a: 1, b: 2, c: 3 }
log(_.forOwn(fo, (value, key) => console.log(key, value))) //{a:1,b:2,c:3}
let fosum = 0
_.forOwn(fo, (value) => fosum += value * _.random(10))
console.log(fosum)

log(_.forOwnRight(fo, (value, key) => console.log(key, value)))

header('forin forinright')
//support prototype enumeration
log(_.forIn(fo, (value, key) => console.log(key, value)))
log(_.forInRight(fo, (value, key) => console.log(key, value)))
//forOwn donot enumerate inherited 


header('create')
//sample
// function vechile(){
//   this.wheel=4;
//   this.speed=0;
// }

// function car(){
//   vechile.call(this);
// }

// var a =new car
// a instanceof car //true
// a instanceof vechile //false

// //to fix it
// car.prototype=_.create(vechile.prototype,{'constructor': vechile});

header('merge mergeWith')
//similiar to assign, it is smarter
const om1 = { a: 1, b: 2 }
log(_.merge(om1, { b: undefined })); //{ a: 1, b: 2 }
log(_.merge(om1, { b: 99 })); //{ a: 1, b: 99 }
// if destination object already have value, will not touch it
log(_.assign(om1, { b: undefined })); //{ a: 1, b: undefined }

// mergewith support a method
const omw = { a: [1], b: [2] }
function customizer2(obv: any, srv: any): any {
  if (_.isArray(obv)) {
    return obv.concat(srv)
  }
}
log(_.mergeWith(omw,{ a: [3], b: [4] },customizer2)) //{ a: [ 1, 3 ], b: [ 2, 4 ] }

header('transform')
// similar to reduce function, accumlatior passed to call back as reference
log(_.transform([1,2,3],function(acc,v,i){ acc[i]=v + 10})) //[ 11, 12, 13 ]
log(_.transform([1,2,3],(acc,v,i)=>acc[i]=v + 10)) //[ 11, 12, 13 ]
const t2={a:'-+test1+-',b:'-+test2+-'}
log(_.transform(t2,(acc,v,i)=>acc[i]=_.trim(v,'-+'))) //{ a: 'test1', b: 'test2' }


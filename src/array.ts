import * as _ from "lodash";

const log=(fun:any): void=>console.log(fun);
const header=(title: string): void=>log(`************************* ${title} ************************`)

const object3=[
    {year:2016,month:3},
    {year:2017,month:4},
    {year:2018,month:1},
    {year:2015,month:8},
    {year:2014,month:2},
    {year:2013,month:3},
    {year:2012,month:3},
    {year:2011,month:3},
];

let users=[
    {user: 'barney', age:36, active: true},
    {user: 'fred', age:40, active: false},
    {user: 'pebble', age:41, active: false},
]

let totalSales=[
    {year:2013,total:100},
    {year:2014,total:120},
    {year:2015,total:180},
    {year:2016,total:200},
]


header('findIndex')
console.log(_.findIndex(object3,function(o){return o.year==2014}))
console.log(_.findIndex(object3,function(o){return o.year>2014}))
console.log(_.findIndex(object3,function(o){return o.year>2014},1))
console.log(_.findIndex(object3,o=>o.year>2014,3))
console.log(_.findIndex(object3,['year',2014]))

header('findLastIndex, IndexOf and LastIndexOf')
console.log(_.findLastIndex(object3,['year',2012]))

console.log(_.indexOf([1,2,1,2],2))
console.log(_.indexOf([1,2,1,2],2,2))
console.log(_.lastIndexOf([1,2,1,2],2))
console.log(_.lastIndexOf([1,2,1,2],2,2))

header('SortedIndex and SortedLastIndex')
console.log(_.sortedIndexOf([1,2,2,2,3],2))
console.log(_.sortedIndexOf([1,2,2,2,3],3))
console.log(_.sortedLastIndexOf([1,2,2,2,3],3))
console.log(_.sortedLastIndexOf([1,2,2,2,3],2))

header('concat')
console.log(_.concat([],1,2,3,4))
console.log(_.concat([0,1],2,3,4))
console.log(_.concat([0,1],2,3,4,[5]))
console.log(_.concat([0,1],2,3,4,[5,6,7]))
console.log(_.concat(['a'],'b',['c']))

header('join')
console.log(_.join([1,2,3,4,5]))
console.log(_.join([1,2,3,4,5],'-'))
console.log(_.join([1,2,3,4,5],'++'))
console.log(_.join(['a','b','c'],' '))

header('Drop and DropRigh')
console.log(_.drop([1,2,3,4,5]))
console.log(_.drop([1,2,3,4,5],2))
console.log(_.drop([1,2,3,4,5],0)) // do not drop anything at all
console.log(_.drop([1,2,3,4,5],10)) 

console.log(_.dropRight([1,2,3,4,5]))
console.log(_.dropRight([1,2,3,4,5],2)) //drop last two from array
console.log(_.dropRight([1,2,3,4,5],10))

//*****************************Question and careful on this**************************************** */
header('DropWhile and DropRightWhile') //create a new array , with the elements dropped from the begining of the given collection while the predicate function returns a trusty condition
log(_.dropWhile(users,i=> ! i.active))
log(_.dropWhile(users,i=> i.active !==false)) // if the first is not active, stop enumerating throught the collection, so solution will be from the end to drop using dropRightWhile
log(_.dropRightWhile(users,i=> i.active !==false))
log(_.dropWhile(totalSales,i=>i.total<200))
log(_.dropWhile(totalSales,i=>i.total>=200)) // not working
log(_.dropRightWhile(totalSales,i=>i.total>=200)) // working
log(_.dropRightWhile(users,i=>i.age<=40)) // working



header('fill')
console.log(_.fill([1,2,3,4,5],'*'))
console.log(_.fill([1,2,3,4,5],'++'))
console.log(_.fill(Array(5),'++'))
console.log(_.fill(Array(5),'*',1,3))
console.log(_.fill([1,2,3,4,5],'*',1,3))

header('intersection')
console.log(_.intersection([1,2,3,4,5],[3,4,5]))

header('IntersectionBy && IntersectionWith') 
// IntersectionBy except the intersection by function takes an additional paraemeter where you supply a function which determines how the elements are compared
log(_.intersectionBy([2,4,6,8],[4,8,10], i=>i/2)) // return [4]
// IntersectionWith accepts a comparator method which is used to compare the elements of the array
const isw1=[{a:1,b:2},{a:2,b:3}]
const isw2=[{a:1,b:1},{a:1,b:2}]
log(_.intersectionWith(isw1,isw2, _.isEqual)) // return [{a:1,b:2}]


header('pull  & pullAll pullAt')
const array0=[1,2,3]
console.log(_.pull(array0,1))
console.log(_.pull(array0,1,2))
console.log(_.pull(['a','b','c'],'b'))

console.log(_.pullAll([1,2,3,4,5],[1,2]))
console.log(_.pull([1,2,3,4,5],1,2))

console.log(_.pullAt([1,2,3,4,5],[1,2])) // poistion 1 and 2
console.log(_.pullAt(object3,[2,5,7])) // poistion 

header('PullAllBy && PullAllWith')
//PullAllBy accept function which determine how values are compared
let pab=[{a:1},{a:2},{a:3}]
log(_.pullAllBy(pab,[{a:3}],'a'))  // check all elements of a value and returns the ones not matched [{a:1},{a:2}], it will mutate existing array as well
pab=[{a:1},{a:2},{a:3}] //reset
log(_.pullAllBy(pab,[{a:1},{a:2}],'a'))  //[{a:3}]

//PullAllWith similar with pullAll, except that it can receive a function to determine the values that need to be removed
let paw=[{a:1,b:2},{a:3,b:4},{a:5,b:6}]
log(_.pullAllWith(paw,[{a:3,b:4}],_.isEqual)) //[{a:1,b:2},{a:5,b:6}]


header('union all arrays, uniq only first array')
console.log(_.union([1,2,2,3]))
console.log(_.union([1,2,2,3],[2,2,3,4]))
console.log(_.uniq([1,2,2,3]))

header('UnionBy && UnionWith')
//UnionBy return an array of unique values from the given arrays that is uses and its variety function to determine how the uniqueness of the array is decided
log(_.unionBy([1.2,1.3,1.4],[2.1,2.2,2.3],Math.floor)) //[1.2,2.1] --1.3 and 1.4 has the same floor as 1.2
//unionwith can accept a function to determine how the elements are compared with each other
let uw1=[{a:1,b:2},{a:2,b:1}]
let uw2=[{a:1,b:1},{a:1,b:2}]
log(_.unionWith(uw1,uw2, _.isEqual)) //[{a:1,b:2},{a:2,b:1},{a:1,b:1}]

header('first or .head nth')
let numbers=[1,2,3,4,5]
let letters=['a','b','c','d','e']

console.log(_.first(letters))
console.log(_.first(object3))
console.log(_.head(object3))
console.log(_.last(numbers))

//nth(3), nth(-2) from the end, the last one is -1 rather than 0
console.log(_.nth(numbers))
console.log(_.nth(numbers,2))
console.log(_.nth(letters,4))
console.log(_.nth(letters,-4))

header('reverse number been changed, not mutated')
console.log(_.reverse(numbers))
console.log(_.reverse(numbers))

header('Initial and Tail')
// tail read all the values apart from first
console.log(_.tail(numbers))
console.log(_.tail(letters))

// initial is the opposite of tail, ignore the last one
console.log(_.initial(numbers))
console.log(_.initial(letters))

header('take, take right')
console.log(_.take(letters,2))
console.log(_.take(letters,100))
console.log(_.take(letters))  // return first one by default
console.log(_.takeRight(letters))  // return first one by default
console.log(_.takeRight(letters,2))  // return first one by default
console.log(_.takeRight(numbers,3))  // return first one by default

header('TakeWhile and TakeRightWhile')
//TakeWhile will create a slice of array taken from the begining, while the predicate function returns a falsy value
log(_.takeWhile(users,i=>i.active)) //[] when the first one failed, will exit out of the iterations
log(_.takeWhile(users,i=>! i.active)) // [{user: 'fred', age:40, active: false},{user: 'pebble', age:41, active: false}]  
log(_.takeWhile(users,['active',false])) // same as above
log(_.takeWhile(users,{active:false})) // same as above
//TakeRightWhile start from the end of array
log(_.takeRightWhile(users,{active:false})) //[]
log(_.takeRightWhile(users,{active:true})) //[{user: 'barney', age:36, active: true}]
log(_.takeRightWhile(users,i=>i.active)) //same as above

header('slice')
console.log(_.slice(letters,0,2))
console.log(_.slice(letters,1,4))
console.log(_.slice(letters,1))

header('zip, unzip (length controlled by)')
console.log(_.zip(letters)) //[ [ 'a' ], [ 'b' ], [ 'c' ], [ 'd' ], [ 'e' ] ]
console.log(_.zip(letters,numbers)) //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ], [ 'e', 5 ] ]
console.log(_.zip(letters,numbers,object3))
console.log(_.zip([1,4],[10,20,30,40],[4,40,8]))
console.log(_.zip([1,2,3,4],[10,20,30,40],[2,4,6,8]))

console.log(_.unzip(letters))
console.log(_.unzip([ [ 1, 10, 2 ], [ 2, 20, 4 ], [ 3, 30, 6 ], [ 4, 40, 8 ] ]))
console.log(_.unzip([
    [ 1, 10, 4 ],
    [ 4, 20, 40 ],
    [ undefined, 30, 8 ],
    [ undefined, 40, undefined ]
  ]))

header('Chunk')
//will create an array of elements which are splited into groups with the length specified
log(_.chunk(['a','b','c','d','e'],2)) // [['a','b','c'],['d','e']]
log(_.chunk(['a','b','c','d','e'],6)) //[['a','b','c','d','e']]
log(_.chunk(['a','b','c','d','e'],1)) 


header('Compact')
//return array with falsy value removed, falsy values means anything loos like it could be false
//The values false, null, 0, “”, undefined, and NaN are falsey.
log(_.compact([1,2,3]))
log(_.compact([0,1,2,3])) //[1,2,3]

header('Remove') 
//remove where predicate function returns a truth value, it is a mutated function
log(_.remove([1,2,3],i=>i %2===0))

header(' Uniq and UniqBy and UniqWith')
log(_.uniq([1,2,2,3,4,5,5])) //[1,2,3,4,5]
// uniqby supply a function which is invoked for each element and that is used to determine the uniqueness is computed
log(_.uniqBy(object3,x=>x.month))
log(_.uniqBy(object3,x=>x.year))

let uniw1=[{a:1,b:2},{a:2,b:1}]
let uniw2=[{a:1,b:1},{a:1,b:2}]
log(_.uniqWith([uniw1,uniw2],_.isEqual))
// UniqWith supply a function for compare with each other

header('SortedUniq and SortedUniqBy')
log(_.sortedUniq([1,2,1,3,3,2,4]))
log(_.sortedUniqBy([1.1,1.2,1.4,1.3,3,2,4],Math.floor))


header('Xor')
//return unique value in the given array
log(_.xor([1,2],[1,3])) //[1,3]

header('XorBy and XorWith')
//xorby use function so elements are compared with each other
log(_.xorBy([2.1,1.2],[2.3,3.4],Math.floor))  // [1.2,3.4]
//xorwith use comparable function to determine how to compare with each other
let xow1=[{a:1,b:2},{a:2,b:1}]
let xow2=[{a:1,b:1},{a:1,b:2}]
log(_.xorWith(xow1,xow2,_.isEqual)) //[{a:2,b:1},{a:1,b:1}]


header('Without')
//create array from original without specified values
// without create new array
// pull mutate the original array
log(_.without([1,2,3,4,5],1,2)) //[3,4,5]
log(_.pull([1,2,3,4,5],1,2))

header('Difference , DifferenceBy and DifferenceWith')
//output new array which contains elements in first array but not in second array
log(_.difference([1,2,3,4,5],[1,2])) //[3,4,5]
// DifferenceBy accept function which executed for each element and used to decide how the comparsion is perfomred
log(_.differenceBy([1.2,2.1],[2.3,3.4],Math.floor)) //[1.2]
log(_.differenceBy([{a:1},{a:2}],[{a:1}],'a')) //[{a:2}]
// DifferenceWith accept function which used to determine how to compare with each other
const dw1=[{a:1,b:2},{a:2,b:1}]
const dw2=[{a:1,b:1},{a:1,b:2}]
log(_.differenceWith(dw1,dw2,_.isEqual)) //[{a:1,b:2}]


header('Flatten, FlattenDeep, FlattenDepth')
//flatten array by 1 level
log(_.flatten([1,[2,3,4],5])) //[1,2,3,4,5]
log(_.flatten([1,[2,3,4],5,6,[7,8,9]])) //[1,2,3,4,5,6,7,8,9]
log(_.flatten([1,[[2,3,4],5,6,[7,8,9]]])) //[1,[2,3,4],5,6,[7,8,9]]
log(_.flattenDeep([1,[[2,3,4],5,6,[7,8,9]]])) //[1,2,3,4,5,6,7,8,9]
log(_.flattenDepth([1,[[2,3,4],5,6,[7,8,9]]])) //default 1 level
log(_.flattenDepth([1,[[2,3,4],5,6,[7,8,9]]],2)) //[1,2,3,4,5,6,7,8,9]

header('FromPairs')
//create new objects using key value pairs
log(_.fromPairs([['a',1],['b',2]])) //{a:1,b:2}
log(_.fromPairs([['name','fred'],['age',10]])) //{name:'fred',age:10}

header('ZipObject')
//create object where first array is the name of the properties of the object and the second array has the value of those properties
log(_.zipObject(['a','b','c'],[1,2,3])) // {1:1,b:2,c:3}
log(_.zipObject(['wheel','drive','brake'],[4,()=>{},()=>{}])) // {wheel:4,drive:[Functon],brake:[Functon]}

header('ZipObjectDeep')
log(_.zipObjectDeep(['a.b'],[1])) // {a:{b:1}}
log(_.zipObjectDeep(['a.b','a[0].c'],[1,2])) // {a:{'0':{c:2},b:1}}
log(_.zipObjectDeep(['a.b','a.b.c','a.b[0].c[2]','a[0].b'],[1,2,3,4])) // { a: { '0': { b: 4 }, b: { '0': [Object], c: 2 } } }

header('ZipWith')
log(_.zipWith([1,2,3],[10,20,30],(a,b)=>a+b))  //[ 11, 22, 33 ]
log(_.zipWith([1,2,3],[10,20,30],[20,30,40],(a,b,c)=>a+b+c))  //[ 31, 52, 73 ]


header('UnzipWith') 
// not well supported in typescript
let zipped=_.zip([1,2,3,4],[10,20,30,40],[2,3,6,8]) //[ [ 1, 10, 2 ], [ 2, 20, 3 ], [ 3, 30, 6 ], [ 4, 40, 8 ] ]
log(zipped)
// log(_.unzipWith(zipped,_.add))
// var zipped_arr = _.zip([15, 7], [185, 20], [478, 123]);
// let gfg = _.unzipWith(zipped_arr, _.subtract);






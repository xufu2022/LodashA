import * as _ from "lodash";

const object3=[
    {year:2016,month:3},
    {year:2017,month:4},
    {year:2018,month:2},
    {year:2015,month:3},
    {year:2014,month:3},
    {year:2013,month:3},
    {year:2012,month:3},
    {year:2011,month:3},
];


console.log(_.findIndex(object3,function(o){return o.year==2014}))
console.log(_.findIndex(object3,function(o){return o.year>2014}))
console.log(_.findIndex(object3,function(o){return o.year>2014},1))
console.log(_.findIndex(object3,o=>o.year>2014,3))
console.log(_.findIndex(object3,['year',2014]))

// find last index
console.log(_.findLastIndex(object3,['year',2012]))

console.log(_.indexOf([1,2,1,2],2))
console.log(_.indexOf([1,2,1,2],2,2))
console.log(_.lastIndexOf([1,2,1,2],2))
console.log(_.lastIndexOf([1,2,1,2],2,2))

console.log(_.sortedIndexOf([1,2,2,2,3],2))
console.log(_.sortedIndexOf([1,2,2,2,3],3))
console.log(_.sortedLastIndexOf([1,2,2,2,3],3))
console.log(_.sortedLastIndexOf([1,2,2,2,3],2))

console.log(_.concat([],1,2,3,4))
console.log(_.concat([0,1],2,3,4))
console.log(_.concat([0,1],2,3,4,[5]))
console.log(_.concat([0,1],2,3,4,[5,6,7]))
console.log(_.concat(['a'],'b',['c']))

//join
console.log(_.join([1,2,3,4,5]))
console.log(_.join([1,2,3,4,5],'-'))
console.log(_.join([1,2,3,4,5],'++'))
console.log(_.join(['a','b','c'],' '))


console.log(_.drop([1,2,3,4,5]))
console.log(_.drop([1,2,3,4,5],2))
console.log(_.drop([1,2,3,4,5],0)) // do not drop anything at all
console.log(_.drop([1,2,3,4,5],10)) 

console.log(_.dropRight([1,2,3,4,5]))
console.log(_.dropRight([1,2,3,4,5],2)) //drop last two from array
console.log(_.dropRight([1,2,3,4,5],10))

console.log(_.fill([1,2,3,4,5],'*'))
console.log(_.fill([1,2,3,4,5],'++'))
console.log(_.fill(Array(5),'++'))
console.log(_.fill(Array(5),'*',1,3))
console.log(_.fill([1,2,3,4,5],'*',1,3))

//intersection
console.log(_.intersection([1,2,3,4,5],[3,4,5]))

//pull  & pullAll pullAt
const array0=[1,2,3]
console.log(_.pull(array0,1))
console.log(_.pull(array0,1,2))
console.log(_.pull(['a','b','c'],'b'))

console.log(_.pullAll([1,2,3,4,5],[1,2]))
console.log(_.pull([1,2,3,4,5],1,2))

console.log(_.pullAt([1,2,3,4,5],[1,2])) // poistion 1 and 2
console.log(_.pullAt(object3,[2,5,7])) // poistion 

// union all arrays, uniq only first array
console.log(_.union([1,2,2,3]))
console.log(_.union([1,2,2,3],[2,2,3,4]))
console.log(_.uniq([1,2,2,3]))

// .first or .head
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

// reverse number been changed, not mutated
console.log(_.reverse(numbers))
console.log(_.reverse(numbers))

// tail read all the values apart from first
console.log(_.tail(numbers))
console.log(_.tail(letters))

// initial is the opposite of tail, ignore the last one
console.log(_.initial(numbers))
console.log(_.initial(letters))

//take, take right
console.log(_.take(letters,2))
console.log(_.take(letters,100))
console.log(_.take(letters))  // return first one by default
console.log(_.takeRight(letters))  // return first one by default
console.log(_.takeRight(letters,2))  // return first one by default
console.log(_.takeRight(numbers,3))  // return first one by default

//slice
console.log(_.slice(letters,0,2))
console.log(_.slice(letters,1,4))
console.log(_.slice(letters,1))

//zip, unzip (length controlled by)
console.log(_.zip(letters))
console.log(_.zip(letters,numbers))
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















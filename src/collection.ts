import * as _ from "lodash";

//forEach/each
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

let users=[
    {user: 'barney', age:36, active: true},
    {user: 'fred', age:40, active: false},
    {user: 'pebble', age:41, active: false},
]
let totalSales=[
    {year: 2013, total:100},
    {year: 2014, total:120},
    {year: 2015, total:180},
    {year: 2016, total:200},
]
let sum=0
console.log(_.each(users,i=>i.user))
_.forEach(totalSales,function(i){sum+=i.total})
console.log(sum)

// filter
console.log(_.filter(totalSales,i=>i.total>100))
console.log(_.filter(totalSales,i=>i.total>150))
console.log(_.filter(users,i=>i.active))

// map
console.log(_.map(totalSales,i=>i.total * i.total))

//reject similar to filter, but return not truthy value
console.log(_.reject(users,i=>i.active))

// find return first value from collection
console.log(_.find([1,2,3,4],i=>i % 2 ===0))
console.log(_.findIndex([1,2,3,4],i=>i % 2 ===0))
console.log(_.findLast([1,2,3,4],i=>i % 2 ===0))
console.log(_.findLast(object3,i=>i.month <6))

// includes
console.log(_.includes([1,2,3,4,5,6],10))
console.log(_.includes([1,2,3,4,5,6],5))
console.log(_.includes([1,2,3,4,5,6],5,5))
console.log(_.includes([1,2,3,4,5,6],5,2))

// order by default ascending
console.log(_.orderBy(object3,x=>x.year))
console.log(_.orderBy(object3,x=>x.year,'desc'))
console.log(_.orderBy(object3,['year','month'],'desc'))
console.log(_.orderBy(object3,['year','month'],['asc','desc']))
console.log(_.orderBy(object3,[x=>x.year,x=>x.month],['asc','desc']))

// sort do not have direction control
console.log(_.sortBy(object3,x=>x.year))
console.log(_.sortBy(object3,'year'))
console.log(_.sortBy(object3,['year','month']))

// groupby
console.log(_.groupBy(object3,x=>x.year))
console.log(_.groupBy(object3,x=>x.month))

//size
console.log(_.size(object3))
console.log(_.size('hello world'))

// invert crate new object inverted from given object
var object={a:1,b:2,c:3}
console.log(_.invert(object));
var object2={a:1,b:2,c:2} // same value override the item before
console.log(_.invert(object2));


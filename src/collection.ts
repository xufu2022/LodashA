import * as _ from "lodash";

//forEach/each
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
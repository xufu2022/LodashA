import * as _ from "lodash";
const log=(fun:any): void=>console.log(fun);
const header=(title: string): void=>log(`************************* ${title} ************************`)

let totalSales=[
    {year: 2013, total:100},
    {year: 2014, total:120},
    {year: 2015, total:180},
    {year: 2016, total:200},
]

header(' SumBy and MeanBy')
log(_.sum([10,20,30]))
log(_.sumBy(totalSales,function(item){return item.total}))
log(_.meanBy(totalSales,function(item){return item.total}))

header(' Clamp')
//prevent a given number from falling outstide the range that specified within a lower bound and upper bound
log(_.clamp(10,15,20))
log(_.clamp(22,15,20))
log(_.clamp(16,15,20))

header(' InRange') 
//check number in range of value given
log(_.inRange(3,2,4))
log(_.inRange(3,5,4))
log(_.inRange(3,3,4))
log(_.inRange(4,3,4)) // not include upper bound, but lower bound ok
log(_.inRange(1,2)) // start from 0
log(_.inRange(2,2)) // not include upper bound, but 0 ok
log(_.inRange(0,2)) // not include upper bound, but 0 ok
log(_.inRange(3,4,2)) // start and end will be swapped
log(_.inRange(4,4,2)) // start and end will be swapped,  not include upper bound

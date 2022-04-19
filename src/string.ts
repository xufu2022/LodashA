 import * as _ from "lodash";

/// string function

console.log(_.toUpper('foobar'))
console.log(_.toLower('DDD'))
console.log(_.lowerCase('DDD'))
console.log(_.upperCase('fooBar'))
console.log(_.upperCase('_foo_bar'))
console.log(_.upperCase('_foo+bar*'))

// lower case do the same

console.log(_.upperFirst('foo+bar*'))
console.log(_.lowerFirst('Foo+bar*'))
console.log(_.capitalize('foo Bar*'))
console.log(_.startCase('foobar*'))
console.log(_.startCase('foo bar*'))
console.log(_.startCase('foo--bar*'))
console.log(_.startCase('foO**bar'))

console.log(_.pad('abc',9))
console.log(_.pad('abc',10))
console.log(_.pad('abc',10, '-'))
console.log(_.pad('abc',10, '+-'))
console.log(_.pad('abc',20, '+-#'))

console.log(_.padStart('abc',20, '+-#'))
console.log(_.padStart('abc',2))
console.log(_.padEnd('abc',9, '-'))

console.log(_.trim(' abc '))
console.log(_.trim('++abc+ + ','+'))
console.log(_.trim('+-+abc +-+ ',' +-'))
console.log(_.trim('+-+abc+-+ ','+-')) // means + or -
console.log(_.trim('+-**??+abc+-**??+ ','+-*?')) // means + or -

const list=_.map([' hello ', ' bye '], _.trim)
console.log(list);

console.log(_.trimStart(' hello '))
console.log(_.trimEnd(' hello '))
console.log(_.trimEnd('++hello++','+'))

console.log(_.parseInt('8'))
console.log(_.parseInt('08'))
console.log(_.parseInt(' 8'))
console.log(_.parseInt('    8'))
console.log(_.parseInt('8  '))
console.log(_.parseInt('8.8'))

console.log(_.parseInt('10'))
console.log(_.parseInt('10',2))
console.log(_.parseInt('101',2))
console.log(_.parseInt('101',16))
console.log(_.parseInt('AA',16))

console.log(_.repeat('abc',5))
console.log(_.repeat('*',5))
console.log(_.repeat('*',0))

console.log(_.replace('hello there','the', '*'))
console.log(_.replace('hello there',/(.*)/, '*'))
console.log(_.replace('hello there',/(.)/, '*'))

console.log(_.split('hello lodash',' '))
console.log(_.split('hello-lodash','-'))
console.log(_.split('hello lodash','/\s/'))

console.log(_.endsWith('foobar','r'))
console.log(_.endsWith('foobar','r',1))
console.log(_.endsWith('foobar','r',0))
console.log(_.endsWith('foobar','g'))

console.log(_.startsWith('foobar','f'))
console.log(_.startsWith('foobar','f',1))
console.log(_.startsWith('foobar','f',0))
console.log(_.startsWith('foobar','g'))






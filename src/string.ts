import * as _ from "lodash";

const log=(fun:any): void=>console.log(fun);
const header=(title: string): void=>log(`************************* ${title} ************************`)


header("ToUpper && ToLower && UpperCase && LowerCase")

console.log(_.toUpper('foobar'))
console.log(_.toLower('DDD'))
console.log(_.lowerCase('DDD'))
console.log(_.upperCase('fooBar'))
console.log(_.upperCase('_foo_bar'))
console.log(_.upperCase('_foo+bar*'))

header("UpperFirst and LowerFirst && Capitalize, StartCase")

console.log(_.upperFirst('foo+bar*'))
console.log(_.lowerFirst('Foo+bar*'))
console.log(_.capitalize('foo Bar*'))
console.log(_.startCase('foobar*'))
console.log(_.startCase('foo bar*'))
console.log(_.startCase('foo--bar*'))
console.log(_.startCase('foO**bar'))

header("Pad, PadStart and PadEnd")

console.log(_.pad('abc',9))
console.log(_.pad('abc',10))
console.log(_.pad('abc',10, '-'))
console.log(_.pad('abc',10, '+-'))
console.log(_.pad('abc',20, '+-#'))

console.log(_.padStart('abc',20, '+-#'))
console.log(_.padStart('abc',2))
console.log(_.padEnd('abc',9, '-'))

header("Trim, TrimStart and TrimEnd")

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

header("ParseInt")

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

header("Repeat")

console.log(_.repeat('abc',5))
console.log(_.repeat('*',5))
console.log(_.repeat('*',0))

header("Replace")

console.log(_.replace('hello there','the', '*'))
console.log(_.replace('hello there',/(.*)/, '*'))
console.log(_.replace('hello there',/(.)/, '*'))

header("Split")

console.log(_.split('hello lodash',' '))
console.log(_.split('hello-lodash','-'))
console.log(_.split('hello lodash','/\s/'))

header("StartsWith and EndsWith")

console.log(_.endsWith('foobar','r'))
console.log(_.endsWith('foobar','r',1))
console.log(_.endsWith('foobar','r',0))
console.log(_.endsWith('foobar','g'))

console.log(_.startsWith('foobar','f'))
console.log(_.startsWith('foobar','f',1))
console.log(_.startsWith('foobar','f',0))
console.log(_.startsWith('foobar','g'))

header("CamelCase, SnakeCase, KebabCase")

log(_.camelCase('Foo bar lodash'))
log(_.camelCase('I love oranges and bananas'))
log(_.camelCase('I-love*oranges-and)bananas'))
log(_.snakeCase('I love oranges and bananas'))
log(_.kebabCase('I love oranges and bananas'))
log(_.kebabCase('I love* oranges and bananas'))

header("Deburr")

log(_.deburr("ÀÄÅÆÇÈÉ"))
log(_.deburr("ãäåæçè"))

header("Escape")

log(_.escape('this & string'))
log(_.escape('this <h1> string </h1>'))
log(_.escape('this \'string\''))
log(_.escape('this "string"'))

header("Unescape")
log(_.unescape('this &lt;h1&gt; string &lt;/h1&gt;'))
log(_.unescape('this &quot;string&quot;'))

header("EscapeRegExp -- The _.escapeRegExp() method is used to escape the Regular Expression special characters “^”, “$”, “”, “.”, “*”, “+”, “?”, “(“, “)”, “[“, “]”, “{“, “}”, and “|” in string.")
log(_.escapeRegExp('https://www.geeksforgeeks.org/'))
log(_.escapeRegExp('"/geeks/"'))
log(_.escapeRegExp('"\*?????{}."'))

header("Truncate")
log(_.truncate('GeeksforGeeks is a computer science portal.',{length: 10}))
log(_.truncate('GeeksforGeeks is a computer science portal.',{length: 10, omission:'***'}))
log(_.truncate('Gee is a computer science portal.',{length: 10, separator:' '}))
log(_.truncate('Gee is a computer science portal.',{length: 10, separator:/,? +/})) // comma or space
log(_.truncate('Gee is a computer science portal.',{length: 10}))

header("Words")
log(_.words('i love programming'))
log(_.words('i love   programming .'))
log(_.words('i love***  programming .'))

header("Template")

const template1=_.template('greeting <%=name%> you are <%=age%> years old')
const template1a=_.template('greeting ${name} you are ${age} years old')
const template2=_.template('<% print("greeting " + name); %>')
const template3=_.template('<b><%-value%></b>')

log(template1({name:'fred', age: 10}))
log(template1a({name:'fred', age: 10}))
log(template2({name:'fred'}))
log(template2({name:'fred', age: 10}))
log(template3({value:'<script>'}))




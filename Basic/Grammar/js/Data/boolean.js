// boolean : true of false

// 1. declaration

const pass = true
const fail = false

console.log(typeof(pass)) // boolean

// 2. type Change

// 2.1 use Boolean object

// ! default false
console.log(
    Boolean(false),
    Boolean(0), 
    Boolean(''),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN)
)
// return 1, 2 , 4
if('0') console.log('1')
if('hello') console.log('2')
if(0) console.log('3')
if(true) console.log('4')
if(null) console.log('5') 

// * Boolean to number

console.log(+false)
console.log(+true)
console.log(+'')
console.log(+[])

// ! Boolean to number : NaN
console.log(+{})
console.log(+[1,2,3])
console.log(+undefined)



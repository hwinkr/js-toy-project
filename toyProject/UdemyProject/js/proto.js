// what is prototype?


// * js 배열(객체) 에 내장된 메서드는 우리가 배열을 선언할때 정의 해주지 않아도 바로 사용할 수 있다. 
// * ex) forEach, map, filter , etc...그 이유는 new 연산자를 사용해서 객체를 생성하는 시점에 이미 메서드가 정의되어 있기때문. 이때 이미 정의되어있는 메서드가 바로 prototype

// ? 그렇다면 new 연산자는 무엇인가? -> 객체를 생성하면 this를 통해서 인스턴스 변수, 메서드에 접근하게 되는데 이 this의 주인을 결정해줌 + 생성된 객체를 자동으로 반환


// * oop

// * 1. 팩토리 함수

const makeColor = (r, g, b) => {
    return {
        r,
        g,
        b,
        // arrow function에서의 this는 무조건 window객체를 참조하기 때문에 일반 function을 사용해야함
        rgb: function () {
            const { r, g, b } = this
            return `rgb(${r}, ${g}, ${b})`
        },
        hex: function () {
            const { r, g, b } = this
            return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        }
    }
}

const red = makeColor(255, 0, 0)
console.log(red)
console.log(red.rgb())
console.log(red.hex())

const amber = makeColor(255, 191, 0)
console.log(amber)
console.log(amber.rgb())
console.log(amber.hex())

// js 함수는 원시타입이 아닌 참조타입, 그래서 논리연산자에서 각 객체들이 같은 함수를 참조하고 있는지 판단한다
// 팩토리 함수를 사용해서 객체를 생성하면 메서드가 prototype 형태가 아닌 그냥 일반함수형태가 되기 때문에 객체를 생성할때마다 이름만 같고 참조를 다르게하는 메서드가 계속 생겨나게된다
// false
console.log(amber.rgb === red.rgb)

const arr = [1, 2, 3]
const str = ["h", "i"]
// true , push -> prototype
console.log(arr.push === str.push)

// * 2. 생성자 함수 

function Color(r, g, b) {
    this.r = r
    this.g = g
    this.b = b
}
// prototype method를 생성하기 떄문에 Color 생성자 함수를 사용해서 생성되는 모든 객체는 같은 method를 참조하게 됨
Color.prototype.rgb = function () {
    const { r, g, b } = this
    return `rgb(${r}, ${g}, ${b})`
}

Color.prototype.hex = function () {
    const { r, g, b } = this
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const black = new Color(0, 0, 0)
const white = new Color(255, 255, 255)
// true
console.log(black.hex === white.hex)

// * 3. class

class newColor {
    // 생성자 함수
    constructor(r, g, b, name) {
        this.r = r
        this.g = g
        this.b = b
        this.name = name
        this.white()
    }

    rgbNum() {
        const { r, g, b } = this
        return `${r}, ${g}, ${b}`
    }

    rgb() {
        return `rgb(${this.rgbNum()})`
    }

    rgba(a) {
        return `rgb(${this.rgbNum()}, ${a})`
    }

    hex() {
        const { r, g, b } = this
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    white() {
        const p = 255
        this.p = p
    }

    rgbWhite() {
        const { p } = this
        return `${p}, ${p}, ${p}`
    }

    backWhite() {
        return `rgb(${this.rgbWhite()})`
    }
}

const tomato = new newColor(255, 99, 71, 'tomato')


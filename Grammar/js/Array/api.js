// Q1. make a string 
{
    const fruits = ["banana" , "apple" , "orange"]
    const result = fruits.join("")
    console.log(result)
}

// Q2. make a array out of string
{
    const fruits = "apple , banana , orange , fig"
    // *  split(separator: string | RegExp, limit?: number): string[];
    const result = fruits.split("," , 3)
    console.log(result) 
}

// Q3. reverse Array
{
    const numArr = [1, 2, 3, 4, 5]
    const result = numArr.reverse()
    console.log(result)
    console.log(numArr) // origin array also reverse
}

// Q4. make new array without the first two elements
{
    const numArr = [1, 2, 3, 4, 5]
    // a. shift
    numArr.shift()
    numArr.shift()
    const result = numArr
    console.log(result)
    // b. slice
    const numArr2 = [1, 2, 3, 4, 5]
    const result2 = numArr2.slice(2 , numArr2.length)
    console.log(result2)
    console.log(numArr2) // origin array doesn't slice
    // c. splice
    const numArr3 = [1, 2, 3, 4, 5]
    const result3 = numArr3.splice(0 , 2)
    console.log(result3)
    console.log(numArr3) // origin array also splice
}

class Student{
    constructor(name , age , enrolled , score){
        this.name = name
        this.age = age
        this.enrolled = enrolled
        this.score = score
    }
}

const students = [
    new Student("A" , 29 , true , 45),
    new Student("B" , 28 , false , 80),
    new Student("C" , 30 , true , 90),
    new Student("D" , 40 , false , 66),
    new Student("E" , 18 , true , 88),
]

// Q5. find student who score is 90
{
    // a. filter
    const result = students.filter((student) => student.score === 90)
    console.log(result)
    // b. find
    // * immediately returns that element value. Otherwise, find returns undefined.
    // * use true or false
    const result2 = students.find((student) => student.score === 90)
    console.log(result2)
}

// Q6. make array of enrolled student
{
    // filter : 배열의 각 요소들에서 조건에 만족하는 요소들을 반환
    const result = students.filter((student) => student.enrolled === true)
    console.log(result)
    
}
// Q7. make array containing only the student's score
{
    // 각 요소를 정의한 callback Function 의 조건에 맞게 재정의 sudent(object) -> student.score(number)
    let result = []
    students.map((student) => result.push(student.score))
    console.log(result)

    const result2 = students.map((student) => student.score)
    console.log(result2)
    
}
// Q8. if there is a student with the score lower than 50
{
    // * some : Determines whether the specified callback function returns true for any element of an array.
    const result = students.some((student) => student.score <= 50)
    console.log(result)

    const result2 = students.every((student) => student.score >= 50)
    console.log(result2) // false
}
// Q9. compute student's average score
{
    let sum = 0
    students.forEach((student) => sum += student.score)
    console.log(sum / students.length)
    // reduce
    // * reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    // * T means reduce must have return value
    const result = students.reduce((prev, curr) =>{
        console.log("-----------")
        console.log(prev)
        console.log(curr)
        return prev + curr.score; // return value is in next call function  , prev argument
    }, 0)
    console.log(result)

    const result2 = students.reduce((prev , curr) => prev + curr.score , 0)
    console.log(result2 / students.length)
}
// Q10. make a string containing all scores
{
    // 함수 API 묶어서 사용 -> 함수형 프로그래밍
    let result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join()
    console.log(result)
}


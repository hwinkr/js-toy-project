// AJAX : asynchronous javascript and XML

// js 의 요청 처리: url 검색해서 페이지 이동 , 새로고침

// 보통의 요청 : 링크를 클릭해서 페이지 이동하기 , 폼을 제출해서 서버에 요청하기 => 서버는 그에따른 응답으로 html , css , js에 데이터를 보내고 웹 페이지를 만들어서 사용자에게 보여줌
// 페이지가 로딩된 후 요청 처리 : ex) 인스타그램에서 유저 검색
// 페이지가 로딩되기 전 요청 처리 : ex) 검색을 완료하기 전에 검색어를 입력하면 검색어 추천및 자동완성 

// html , css , js를 모두 사용하지 않고 js 로만 작업해서 요청하는 경우 데이터가 필요
// 실시간으로 가격이 변동되는 주식 ui를 만들거나 검색어 추천 기능은 링크를 클릭해서 페이지를 이동하거나 , 새로고침 하는 경우가 아니기 때문에 타임아웃을 설정해서 그 시간에 맞게 계속 api에 요청을 해야함 긴 코드가 필요한것이 아닌 업데이트 되는 데이터만 필요 웹페이지 전체를 받는것이 아니라 업데이트 되는 데이터만 받아서 웹페이지를 재구성함

// api : 컴퓨터가 여러 소프트웨어와 상호작용하는 광범위한 범위의 용어
// web api : http 에서 동작하는 인터페이스 -> 다른 소프트웨어 , 데이터베이스로 갈수 있는 입구 , 서버에 존재하는 데이터 객체(세트)나 정보에 접근하게 해주는 통로 , 서버는 json 형태로 데이터를 반환해주는데(그냥 아무것도 꾸며지지 않은 txt 형태의 문서라고 생각하면 편하다) 이것을 다시 html , css, js를 통해 dom을 활용해서 innerText 를 변경하는 식으로 ui를 리렌더링 한다.

// 어떤 데이터만 필요한 상황이 있다고 가정해보면, 그 데이터 자체에는 아무런 스타일링과 동작이 필요하지 않음. 오직 데이터만 필요, 그래서 api를 사용하는것

// js 를 사용한 서버와 클라이언트 사이의 데이터 포맷 : XML , JSON

// JSON : javascript object notation
// 서버는 항상 json 형태로 데이터를 받고 보냄

// 요청하기 : 헤더 , 상태코드(200 ,404 , 400 ...) , 쿼리
// http 동사 : post , get , put , delete


// query string : 서버단에 요청을 전달할때 디테일한 요청을 가능하게함 , 기본 url 뒤에 추가로 검색하는것이 무엇인지 제공
// 쿼리문자열 ? 뒤에 추가로 검색할것이 무엇인지 작성
// url의 일부분이자 서버에게 제공해야할 우리가 입력하는 정보
// tv 프로그램 api , 날씨 api
// http://www.youtube.com/result
// http://api.tvmaze.com/search/shows/?q=avatar

// 1. use xml obj req , res
// js 초기의 xml 객체를 활용한 http 요청방식
// 정말 초기 방식이라서 그런지 arrow function 지원 X , 코드의 복잡도가 높다. 

const xmlReq = new XMLHttpRequest()

const url = 'http://api.tvmaze.com/search/shows/?q=avatar'

xmlReq.onload = function () {
    console.log('req success!!')
    const res = JSON.parse(this.responseText)
    console.log(res)
}
xmlReq.onerror = function () {
    console.log('req error!!')
    console.log(this)
}

xmlReq.open('GET', url)
xmlReq.send()

// 2. use fetch api 
// fetch : js 의 내장 함수로서 데이터를 저장하고 있는 서버의 url 주소를 입력하면 그에 맞는 promise를 반환해준다. then, catch 활용 가능

fetch(url)
    .then((res) => {
        console.log(res)
        // 서버가 전달해주는 데이터의 형태를 json 으로 변경
        // res.json()도 promise를 반환해줌
        return res.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })

// 2-1. use async function with await

const fetchReq = async () => {
    // await : promise 의 상태가 resolve가 될때까지 기다린다.
    try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
    } catch (err) {
        alert(err)
    }
}
fetchReq()

// 3. axios : node.js , client 측 모두에서 같은 구문으로 같은 로직을 짤수 있다


// *** fetch vs axios
// 1. fetch
// 반환하는 promise 의 형태가 완전한 객체가 아닌 response, 바로 사용할수 없기 때문에 js 환경에서 사용할 수 있게 해주는 객체를 반환해주는 promise 인 res.json() 를 한번더 사용해야함
// ! [[PromiseResult]]: Response
console.log(fetch(url))

// 2. axios
// fetch 와는 달리 모든 promise가 돌아오고 필요한 데이터 포맷형식 setting이 완료 된후, promise의 상태가 resolve가 된다.
// 첫번째 요청에 응답해주는 응답객체 자체가 js환경에서 바로 사용할 수 있는 파싱된 객체이기 때문에 추가로 promise 호출할 필요가 없다
// ! [[PromiseResult]]: Object
console.log(axios.get(url))

axios.get(url)
    .then((res) => console.log(res))
    .catch((err) => alert(err))

const axiosReq = async () => {
    try {
        // ! await를 사용하지 않으면 axios가 반환하는 promise가 resolved 상태가 될때까지 기다리지 않는다, 따라서 필요한 데이터를 얻지 못함
        const res = await axios.get(url)
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}
axiosReq()

// 서버로부터 전달받는 데이터의 형태 지정하기 , header
// 서버에서 전달해주는 데이터의 형태가 항상 json이 아니기 때문에 headers 를 application/json 형태로 바꿔야함

const jokes = document.querySelector('.joke')
const jokeBtn = document.querySelector('.jokeBtn')
const addJoke = async () => {
    try {
        const jokeText = await jokeReq()
        const li = document.createElement('LI')
        li.innerText = jokeText
        jokes.appendChild(li)
    } catch (err) {
        console.log(err)
    }
}
const jokeReq = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }
        const res = await axios.get('http://icanhazdadjoke.com/', config)
        // 비동기 함수이기 때문에 자동으로 promise를 반환함, 원하는 데이터는 resolve 상태의 데이터이기 때문에 resolve 될때까지 기다리기 위해서 반드시 await 키워드를 사용해야함
        return res.data.joke
    } catch (err) {
        console.log(err)
        return 'no joke...sory :('
    }

}
jokeBtn.addEventListener('click', addJoke)

// 서버에 추가적인 요청을 하는 쿼리 문자열 사용하기

const searchTitle = document.querySelector('.searchTitle')
const searchForm = document.querySelector('.searchForm')
const searchBtn = document.querySelector('.searchBtn')
const movieList = document.querySelector('.movieList')

const submitForm = async (e) => {
    // TODO : 다른 키워드 검색시, 표시된 ui 지우고 새로운 ui 생성하기
    try {
        while (movieList.hasChildNodes()) {
            movieList.removeChild(movieList.firstChild)
        }
        e.preventDefault()
        const keyword = searchTitle.value
        searchTitle.value = ''
        const url = `http://api.tvmaze.com/search/shows/?q=${keyword}`
        // promise 상태가 resolve 될때마가 기다림
        const res = await axios.get(url)
        const result = res.data.map((item) => item.show)
        makeList(result)
    } catch (err) {
        console.log(err)
    }
}

const makeList = (list) => {
    list.forEach((content) => {
        const title = document.createElement('h1')
        title.innerText = content.name

        const img = document.createElement('img')
        if (content.image.medium) {
            img.src = content.image.medium
        }

        const date = document.createElement('span')
        date.innerText = content.premiered

        const div = document.createElement('div')
        div.appendChild(title)
        div.appendChild(img)
        div.appendChild(date)

        const link = document.createElement('a')
        link.href = `${content.url}`
        link.appendChild(div)

        const li = document.createElement('li')
        li.appendChild(link)
        movieList.appendChild(li)
    })
}

searchForm.addEventListener('submit', (e) => {
    submitForm(e)
})


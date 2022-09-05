// 서버 생성하고 실행하기!
const express = require('express')

// express 객체 실행해서 가져오기
const app = express()

// 요청이 들어오면 콜백 실행
// 사용자가 서버에 요청을 보낼때 마다 실행
// 사용자의 요청에 어떤 콘텐츠로 응답을 해야함
// ! http 요청 (get , post, put, delete) 는 js 객체가 아님 텍스트 이고 어떤 프로그래밍 언어도 아니지만 express 가 그걸 파싱해서 js객체로 변환함 그 후, 콜백함수 use에 첫번째 인수로 넘김

// 요청객체와 응답객체
// res.send , res.status
// ! app.use 는 모든 요청을 대신해서 하나의 응답을 생성하기 때문에, 서버에 여러 요청을 보내는 경우에는 사용하지 않는것이 좋다
// app.use((req, res) => {
//     console.log('we got a new request!')
//     // 응답을 js 객체 형식으로 보내면 express가 자동으로 json 형식으로 파싱해줌 데이터 포맷을 따로 수정해줘야할 필요가 없다
//     res.send('<h1>THIS IS MY WEB!</h1>')
// })


// 서버 열기, listen method
// localhost인 내 컴퓨터 안에서만 적용되는 서버
// 한마디로 서버의 출입문 만들기
app.listen(8080, () => {
    console.log('hi this is 8080 server!!')
})

// express 라우팅 : 서버 경로 만들기

// home route => '/'
// name => 'woong'
// age => 24

app.get('/', (req, res) => {
    res.send('<h1> welcome to my server!</h1>');
})

// ! 같은 서버 주소를 가지더라도, 어떤 http 요청인가에 따라 다른 응답이 나타남
app.get('/name', (req, res) => {
    res.send('<h1> my name is Woong! </h1>');
})
app.post('/name', (req, res) => {
    res.send('<h1>what you are name?!! </h1>')
})

app.get('/age', (req, res) => {
    res.send('<h1> my age is 24! </h1>');
})


// * 존재하지 않는 서버 주소에 요청을 했을경우의 , 응답 일반화 하기
// app.get('*', (req, res) => {
//     res.send('<h1>this is not in server address!,, please check sever address...')
// })

// 라우팅에 패턴 적용하기 , 경로 매개변수
// /p/SOMETHING

// * express routing 에서 콜론(:)은 reddit/ 다음에 오는 값을 하나의 경로변수로 만들어준다
// * 사용자가 경로에 입력한 주소가 하나의 변수가 되서 서버 주소에 전달된다
// req의 모든 객체를 생성하고 params라는 특성을 추가함 params : 경로 변수

app.get('/reddit/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1> this is our subreddit, ${subreddit} </h1>`);
})

// ! 하나의 서버 주소에 여러가지 경로 변수를 만들어서 적용할 수 있다
// post/new, post/hot, post/loved

app.get('/reddit/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1> ${postId} in ${subreddit} , searching.... </h1>`);
})

// 쿼리 문자열 사용하는 api 만들기
// 쿼리 문자열로 만든 요청에 대한 응답을 객체 형태로 전달함
// ! 쿼리 문자열로 서버에 대한 요청을 하는 경우는, 사용자가 url 주소에 직접 입력하는 경우가 아니라 링크를 클릭하거나 (ex) 특정 글쓴이가 쓴 글만 보려고 하는 경우에 post?user=${userId} 이런 경우에 주로 사용함)
// ! express가 req.qurey 객체로 파싱해서 사용하기 쉽게 만들어준다
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('<h1> NOTHIN FOUNDED, IF NOTHING SEARCHED..</h1>')
    } else {
        res.send(`<h1> i'm now Search result for : ${q} please wating a moment...</h1>`)
    }
})



// 코드에 변경사항이 있을때, 그 변경사항을 저장하면 자동으로 서버가 재시작될수 있도록 하는 nodemon
// ^C 로 서버를 끄고 변경된 파일을 저장하고 다시 서버를 키는 일련의 과정을 저장 한번으로 대체해줌
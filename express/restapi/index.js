// 본격적인 client server communication
// * REST : 클라이언트와 서버가 어떻게 소통해야 하는지에 대한 가이드라인
// * RESTful : rest를 사용하면서 지켜야하는 규칙 RESTful을 고려하는 api, route 만들기
// ! REST를 사용함으로써 최종적으로 만들어야 하는 기능 : url + http method로 http 에 완벽한 crud operation 생성하기
// 그렇다면 어디서 crud 작업을 하나요? : resource

// TODO
// 1. get/comments = show all comments , get/comments/:id : choose one comments for some user
// 2. post/comments = create a new comments
// 3. patch/comments/:id = update one comment
// 4. delete/comments/:id = delete one comment

// 서버 생성하고 실행하기! express 객체 실행해서 가져오기
const express = require('express');
const path = require('path')
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override')

const app = express()
// 서버 출입문 만들기, 서버 열렸습니다~
app.listen(8080, () => {
    console.log('8080 server open');
})
// HTTP 요청 : get, delete, patch(put), post
// 요청이 들어오면 콜백 실행, 사용자가 서버에 요청을 보낼때 마다 실행, 사용자의 요청에 어떤 콘텐츠로 응답을 해야함
// ! http 환경에서 하는 요청은 js 객체가 아닌 텍스트이고 어떤 프로그래밍 언어도 아니다, 하지만 express가 그 응답이나 요청을 js 객체로 파싱해준다

// 내장분석 미들웨어 사용하기
// 사용자의 요청에는 여러 포맷이 존재함. json or text or form
// 그 포맷마다 express가 데이터를 분석할 수 있도록 미들웨어를 선언 해줘야 한다!
// ! 사용자의 요청 포맷을 분석하지 않고 req.body에 전달하게 되면 undefined
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// html이 사용할수 있는 method 확장하기
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let comments = [
    {
        id: uuid(),
        username: 'woong',
        comment: 'js is so funny',
    },
    {
        id: uuid(),
        username: 'miho',
        comment: 'python is so surprise!😉'
    },
    {
        id: uuid(),
        username: 'jay park',
        comment: 'my body is so sexy'
    },
    {
        id: uuid(),
        username: 'pray',
        comment: 'lol is always funny😉'
    },
]

// home server
app.get('/', (req, res) => {
    res.render('comments/home')
})

// r
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })

})
// create a new comment
app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})
app.post('/comments', (req, res) => {
    // 서버에 데이터를 전송하고 그 데이터를 db에 추가
    const { username, comment } = req.body
    comments.push({ username, comment, id: uuid() })
    // 추가후, comments 경로로 가서 리스트 확인
    res.redirect('/comments')
})
// show specific comment
// * express routing 에서 콜론(:)은 reddit/ 다음에 오는 값을 하나의 경로변수로 만들어준다, 사용자가 경로에 입력한 주소가 하나의 변수가 되서 서버 주소에 전달된다.
app.get('/comments/:id', (req, res) => {
    const { id } = req.params
    const c = comments.find(c => c.id === id)
    res.render('comments/show', { c })
})
// update : put vs patch
// put : update all 
// patch : update new change 

app.patch('/comments/:id', (req, res) => {
    // patch 에서의 req : 변경하고자 하는 내용이 req.body 에 담김
    // post 에서의 req : 작성하고자 하는 내용이 req.body 에 담김
    const { id } = req.params;
    const currentComment = comments.find((c) => c.id === id)
    const newComment = req.body.comment
    currentComment.comment = newComment
    res.redirect('/comments')
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params
    const c = comments.find((c) => c.id === id)
    res.render('comments/edit', { c });
})

app.delete('/comments/:id', (req, res) => {
    // ? 왜 confirm , alert 사용이 안되묘?
    const { id } = req.params;
    comments = comments.filter((c) => c.id !== id);
    res.redirect('/comments')

})

// * 존재하지 않는 서버 주소에 요청을 했을경우의 , 응답 일반화 하기
// app.get('*', (req, res) => {
//     res.send('<h1>this is not in server address!,, please check sever address...')
// })

// method 를 구분해서 작성하면 같은 server url 주소여도 다른 기능을 수행함 
app.get('/tacos', (req, res) => {
    res.send("GET/ tacos response")
    console.log(req.body)
})

app.post('/tacos', (req, res) => {
    res.send("POST/ tacos response")
    // * req.body에 form 이나 다른 형식을 통해서 서버에 제출된 데이터를 key-value 형태로 저장
    // * req.body에 어떤 데이터포맷을 넣을것인지 명시적으로 적어야함(text, json, form-data)
    // .urlencoded() : form 형태의 데이터 해석
    // .json() : json 형태의 데이터를 해석
    const { type, qty } = req.body
    console.log(`Ok, this is your order ${type} : ${qty}`)
})







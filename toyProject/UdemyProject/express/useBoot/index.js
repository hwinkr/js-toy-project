const express = require('express');
const path = require('path')
const app = express()
const redditData = require("./data.json")
console.log(redditData);

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.listen(8080, () => {
    console.log('THIS IS 8080 SERVER');
})

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/r/:subreddit', (req, res) => {
    // ! 변수를 경로에서 직접 가져가서 렌더링할때 전달하지 않고, 이 변수를 db에서 데이터를 가져오는데 사용하고, 가져온 데이터를 res.render로 전달한다.
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { subreddit, ...data })
    } else {
        res.render('notfound', { subreddit })
    }

})


// * 1. 템플릿 렌더링에 조건 걸기
const returnMsg = (num) => {
    if (num % 2 == 0) {
        return 'even'
    } else {
        return 'odd'
    }
}
app.get('/rand', (req, res) => {
    //res.render() => 바뀐 view를 리렌더링 하고 그 HTML 문자열을 다시 사용자에게 보냄
    // view engine을 ejs로 설정

    // 리렌더링 할때, 서버측에서 변수 만들어서 템플레이팅 html로 넘겨주기
    const randomNum = Math.floor(Math.random() * 10);
    const msg = returnMsg(randomNum)

    res.render('random', {
        num: randomNum,
        msg: msg
    })
})


// * 2. 템플릿 반복해서 렌더링 하기
app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Miho', 'Goomi', 'Muiji', 'Mango'
    ]
    res.render('cats', { cats })
})

// * 복잡한 템플릿 렌더링하기
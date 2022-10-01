const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')
const path = require('path')
const app = express()

const Gym = require('./models/gym')

// db 이름 뭐로하지..
mongoose.connect('mongodb://localhost:27017/gyms', {
    useNewUrlParser : true, 
    useUnifiedTopology : true})
.then(() => console.log("MONGO CONNECTED!"))
.catch((err) => {
    console.log("MONGO CONNECTING ERROR!")
    console.log(err)
})

app.listen(8080, () => {
    console.log('server open!')
})

// ejs 파일을 실행하거나, 파싱할 때 쓰이는 엔진은 여러가지가 있음, 디폴트 엔진말고 ejs-mate로 실행하기
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(methodOverride('_method'))
// 이 코드를 실행한 이후, 모든 http 요청의 fom 형태의 body를 js 객체로 파싱한다
// use() 메서드도 미들웨어 함수, 요청-응답의 생명주기내에서 실행
app.use(express.urlencoded({extended : true}))

app.get('/', (req, res) => {
    res.render('home')
})

// 헬스장 리스트 보여주는 라우터
app.get('/gymlist', async(req, res) => {
    const gyms = await Gym.find({})
    res.render('gyms/index', {gyms})
})
// 헬스장 추가 양식 보여주는 라우터
app.get('/gymlist/new', (req, res) => {
    res.render('gyms/new')
})
// 헬스장 등록 로직
app.post('/gymlist', async (req, res) => {
    const newGym = new Gym(req.body)
    await newGym.save()
    res.redirect(`gymlist/${newGym._id}`,)
})
// 유저가 선택한 헬스장 하나 보여주는 라우터
app.get('/gymlist/:id', async (req, res) => {
    const {id} = req.params;
    const foundGym = await Gym.findById(id)
    res.render('gyms/show' , {foundGym})
})
// 수정 페이지 열어주는 라우터 
app.get('/gymlist/:id/edit', async (req, res) => {
    const {id} = req.params
    const foundGym = await Gym.findById(id)
    res.render('gyms/edit', {foundGym})
})
// 헬스장 수정 로직
app.put('/gymlist/:id', async (req, res) => {
    const {id} = req.params
    await Gym.findByIdAndUpdate(id, req.body, {runValidators : true, new : true})
    res.redirect(`/gymlist/${id}`)
})
// 헬스장 삭제 로직
app.delete('/gymlist/:id', async (req, res) => {
    const {id} = req.params
    await Gym.findByIdAndDelete(id)
    res.redirect('/gymlist')
})
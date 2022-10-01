const mongoose = require('mongoose')
const Gym = require('../models/gym')

const cities = require('./cities')
const {places, descriptors} = require('./seedHelpers')
 
// db 이름 뭐로하지..
mongoose.connect('mongodb://localhost:27017/gyms', {
    useNewUrlParser : true, 
    useUnifiedTopology : true})
.then(() => console.log("MONGO CONNECTED!"))
.catch((err) => {
    console.log("MONGO CONNECTING ERROR!")
    console.log(err)
})

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]

// js 비동기 함수는 무조건 Promise를 반환하는 함수이다 
// await 키워드 사용해서 Promise 무조건 resolve 상태가 될때까지 기다리기
const seedDB = async () => {
    await Gym.deleteMany({})
    for(let i = 0; i < 50; i++){
        const randomNum = Math.floor(Math.random() * 1000)
        const gymSeed = new Gym({
            title : `${sample(places)} ${sample(descriptors)}`,
            location : `${cities[randomNum].city} ${cities[randomNum].state}`,
            price : `${Math.floor(Math.random() * 100)}`,
            image: 'https://source.unsplash.com/featured/?{gym}',
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maxime id excepturi sunt, necessitatibus accusamus magni alias sed eligendi sit, veniam dolores. Totam excepturi accusamus, impedit quis distinctio facere pariatur!'
        })
        await gymSeed.save()
    }
}
seedDB().then(() => {
    console.log("send success!")
    mongoose.connection.close()
})



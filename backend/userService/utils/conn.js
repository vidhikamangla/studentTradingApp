const mongoose=require('mongoose')

mongoose.connect(process.env.MONGO_URL)
mongoose.Promise= global.Promise
const db=mongoose.connection
db.on('error',console.error.bind(console,'DB ERROR: '))
module.exports= {db,mongoose}
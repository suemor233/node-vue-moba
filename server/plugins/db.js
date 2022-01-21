module.exports = app =>{
    const mongoose = require("mongoose")
    mongoose.connect('mongodb://101.35.165.220:27017/node-vue-moba',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    
}
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const JokeSchema = new mongoose.Schema({
    setup:{
        type:String,
        required:[true,"you need to tell a joke"],
        minLength:[10, 'your joke has to be at least 10 characters']
    },
    punchline:{
        type:String,
        required:[true,"whats the joke"],
        minLength:[3, 'Try that again']
    }
})

const Joke = mongoose.model("Joke",JokeSchema)

module.exports = Joke


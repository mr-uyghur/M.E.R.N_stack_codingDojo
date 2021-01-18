const Joke = require('../models/joke.model')

// CRUD commands

// read all jokes 
module.exports.findAllJokes = (req, res) =>{
    Joke.find()
    .then(alljokes => res.json({ jokes: alljokes }))
    .catch(err => res.json({message:'You bombed your joke', error: err}))
}

// read one joke 
module.exports.findOneJokes = (req, res) =>{
    // find that one joke with id parameter
    Joke.find({_id:req.params._id})
    .then(onejoke => res.json({ jokes: onejoke }))
    .catch(err => res.json({message:'You bombed your joke', error: err}))
}

// create a new joke 
module.exports.createJoke = (req, res) =>{
    // create joke with whatever value passed into req.body
    Joke.create(req.body)
    .then(newJoke => res.json({ jokes: newJoke }))
    .catch(err => res.status(400).json({ err}))
}

// update a joke 
module.exports.updateJoke = (req, res) =>{
    Joke.updateOne({_id:req.params._id},{
        $set:{
            setup:req.body.setup,
            punchline: req.body.punchline
        }
    })
    .then(oneJoke => res.json({joke:oneJoke}))
    .catch(err => res.status(400).json(err))
}

// delete a joke 
module.exports.deleteJoke = (req, res) =>{
    // remove jokes by id
    Joke.remove({_id:req.params._id})
        .then(deleteJoke => res.json({ message: 'deleted your joke'}))
        .catch(err => res.json({message:'You bombed your joke', error: err}))
}

// read a random joke 
// if i get myself a random index i can access a random joke 
module.exports.findRandomJoke = (req, res) =>{
    // get my array of jokes  
    // get a random index num 
    // pass the joke with random index num
    Joke.find()
    .then(jokes => {
        let random = Math.floor(Math.random()*jokes.length)
        res.json({joke:jokes[random]})
    })
    .catch(err => res.json({message:'You bombed your joke', error: err}))
}

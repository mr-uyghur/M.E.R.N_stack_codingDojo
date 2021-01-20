const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required: [true, "names must be filled out"],
        minlength:[2, "require at least 3 characters"]
    },
    // lastName: { type: String },
    // description: { type: String}
}, { timestamps: true });

module.exports.Person = mongoose.model('Person', PersonSchema);
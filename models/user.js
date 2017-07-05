var mongoose = require('mongoose');
var mongooseUV = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    // content: {type: String, required: true},
    // user: {type: Schema.Types.ObjectId, required: true}
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    messages: [{type: Schema.Types.ObjectId, ref:'Message'}]
});

userSchema.plugin(mongooseUV);

module.exports = mongoose.model('User',userSchema);
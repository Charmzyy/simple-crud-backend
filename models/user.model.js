const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
fname : {
  type:String,
  required:[true,"Firstname Required"],
},
lname: {
    type:String,
  required:[true,"Lastname Required"],

},
email: {
    type:String,
  required:[true,"Email Required"],
  unique: true

},
password:{
    type:String,
    required:[true,"Password Required"],
    minlength : 8

}
},
{
    timestamps : true
})

const User = mongoose.model('user',userSchema)


module.exports = User;
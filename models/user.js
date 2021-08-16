const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    passwordHash:{
        type: String,
        required: true
    },
    isVerified: {
         type: Boolean,
        default: false 
    },
    isAdmin: { 
        type: Boolean,
        default: false 
    },
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    }
})

UserSchema.virtual('id').get(function(){
    return this._id.toHexString()
});
UserSchema.set('toJSON',{
    virtuals:true
})


exports.User = mongoose.model('User', UserSchema);
exports.UserSchema=UserSchema
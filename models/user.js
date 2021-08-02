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
    isAdmin:{
        type:Boolean,
        required:true
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
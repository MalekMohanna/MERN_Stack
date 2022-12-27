const mongoose = require('mongoose');
const TeamSchema = new mongoose.Schema({
    name : {
        type: String,
        required:[true,"Name is required"],
        minlength:[3,"Name must be at least 3 charachters long"]
    },
    position:{type:String},
    game1:{type:String,default:'undecided'},
    game2:{type:String,default:'undecided'},
    game3:{type:String,default:'undecided'}
}, {timestamps:true});

module.exports.Team = mongoose.model('Team',TeamSchema);
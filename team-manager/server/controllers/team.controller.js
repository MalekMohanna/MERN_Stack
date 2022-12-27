const { response } = require("express");
const { Team } = require('../models/team.model');

module.exports.createTeam = (request,response)=>{
    const {name,position} = request.body;
    Team.create({
        name,
        position
    })
    .then(team=>response.json(team))
    .catch(err=>response.status(400).json(err))
}

module.exports.getAllTeams = (request, response) => {
    Team.find({ "name": { "$exists": true } }).sort({'name': 1})
        .then(teams => response.json(teams))
        .catch(err => response.json(err))
}

module.exports.getTeam = (request, response) => {
    Team.findOne({_id:request.params.id})
        .then(team => response.json(team))
        .catch(err => response.json(err))
}

module.exports.updateTeam = (request, response) => {
    Team.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedTeam => response.json(updatedTeam))
        .catch(err => response.status(400).json(err))
}
module.exports.deleteTeam = (request, response) => {
    Team.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}



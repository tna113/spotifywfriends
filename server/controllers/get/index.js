// https://www.codementor.io/@evanbechtol/node-service-oriented-architecture-12vjt9zs9i

const GetService = require ("../../services/GetService");
const GetServiceInstance = new GetService();

module.exports = {
    login, getUsers, getUser, getPlaylists, getUserPlaylist, getSong
}

// async function create(req,res) {
//     try {
//         const createdObj = await GetServiceInstance.create(req.body);
//         return res.send(createdObj);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// }

async function login(req,res) {}
async function getUsers(req,res) {}
async function getUser(req,res) {}
async function getPlaylists(req,res) {}
async function getUserPlaylist(req,res) {}
async function getSong(req,res) {}
// https://www.codementor.io/@evanbechtol/node-service-oriented-architecture-12vjt9zs9i

const PostService = require ("../../services/PostService");
const PostServiceInstance = new PostService();

module.exports = {
    logout, createUser, addSong
}

// async function create(req,res) {
//     try {
//         const createdObj = await PostServiceInstance.create(req.body);
//         return res.send(createdObj);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// }

async function logout(req,res) {}
async function createUser(req,res) {}
async function addSong(req,res) {}
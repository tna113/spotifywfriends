// https://www.codementor.io/@evanbechtol/node-service-oriented-architecture-12vjt9zs9i

const PutService = require ("../../services/PutService");
const PutServiceInstance = new PutService();

module.exports = {
    editUser, editPlaylist, editSong
}

// async function create(req,res) {
//     try {
//         const createdObj = await PutServiceInstance.create(req.body);
//         return res.send(createdObj);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// }

async function editUser(req,res) {}
async function editPlaylist(req,res) {}
async function editSong(req,res) {}
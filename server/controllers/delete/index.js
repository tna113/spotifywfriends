// https://www.codementor.io/@evanbechtol/node-service-oriented-architecture-12vjt9zs9i

const DeleteService = require ("../../services/DeleteService");
const DeleteServiceInstance = new DeleteService();

module.exports = {
    deleteUser, deletePlaylist, deleteSong
}

// async function create(req,res) {
//     try {
//         const createdObj = await DeleteServiceInstance.create(req.body);
//         return res.send(createdObj);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// }

async function deleteUser(req,res) {}
async function deletePlaylist(req,res) {}
async function deleteSong(req,res) {}
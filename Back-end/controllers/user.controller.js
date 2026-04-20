const { Request, Response } = require('express')

const userService = require('../services/mongo/user.service');

const userController = {

    getAll: async (req, res) => {

        try {

            const users = await userService.find();

            const dataToSend = {
                count: users.length,
                users
            };

            res.status(200).json(dataToSend);

        } catch (err) {

            res.status(500).json({ statusCode: 500, message: 'Error fetching data from the DB' })
        }
    },

    getById: async (req, res) => {

        try {
            const id = req.params.id;
            const user = await userService.findById(id);

            if (!user) {
                res.status(404).json({
                    statusCode: 404,
                    message: 'User not found'
                })
            }
            res.status(200).json(user);

        } catch (err) {
            res.status(500).json({ statusCode: 500, message: 'Error fetching data from the DB' })
        }
    },


    deleteFriend: async (req, res) => {

        try {

            const idUser = req.params.id;
            const idFriend = req.params.idFriend

            const deletedFriend = await userService.deleteFriend(idUser, idFriend)


            if (deletedFriend) {
                res.sendStatus(204);
            }

            else {
                res.status(404).json({ statusCode: 404, message: 'This user is not your friend' })
            }


        } catch (err) {
            console.log(err)
            res.status(500).json({ statusCode: 500, message: 'Error fetching data from the DB' })
        }

    },

    updateFriendRequest: async (req, res) => {

        try {
            const idUser = req.params.id;
            const idFriendRequest = req.params.idFriendRequest;
            const status = req.body.status;

            const modifyFriendRequest = await userService.updateFriendRequest(idUser, idFriendRequest, status)


            if (!modifyFriendRequest) {
               return res.status(404).json({
                    statusCode: 404,
                    message: 'Friend Request not found'
                })
            }

            res.status(200).json(modifyFriendRequest);


        } catch (err) {
            console.log(err)
            res.status(500).json({ statusCode: 500, message: 'Error fetching Data from the DB' })
        }
    },

    //Send friendRequest
    sendFriendRequest: async (req, res) => {
    try {
        const result = await userService.sendFriendRequest(req.params.id, req.user.id)
        if (!result) return res.status(404).json({ statusCode: 404, message: 'User not found' })
        res.status(200).json(result)
    } catch (err) {
        console.log(err)
        res.status(500).json({ statusCode: 500, message: 'Error fetching Data from the DB' })
    }
}

}

module.exports = userController;
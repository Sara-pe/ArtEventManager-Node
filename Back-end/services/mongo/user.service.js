const User = require('../../models/user.model');

const userService = {

    find: async () => {

        try {

            const users = await User.find()

                .populate({
                    path: 'friends',
                    select: { id: 1, name: 1, lastname: 1 }
                })
                .populate({
                    path: 'friendRequests.from',
                    select: { id: 1, name: 1, lastname: 1 }
                })


            return users;

        } catch (err) {

            console.log(err);
            throw new Error(err);
        }


    },

    findById: async (id) => {

        try {
            const user = await User.findById(id)

                .populate({
                    path: 'friends',
                    select: { id: 1, name: 1, lastname: 1 }
                })
                .populate({
                    path: 'friendRequests.from',
                    select: { id: 1, name: 1, lastname: 1 }
                })

            return user
        } catch (err) {
            console.log(err);
            throw new Error(err);

        }

    },



    deleteFriend: async (idUser, idFriend) => {

        try {
            const deletedFriend = await User.findByIdAndUpdate(
                idUser,
                { $pull: { friends: idFriend } },
                { returnDocument: 'after' }
            );

            if (deletedFriend) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    },

    updateFriendRequest: async (idUser, idFriendRequest, status) => {

        try {

            const updatedFriendRequest = await User.findOneAndUpdate(  
                // updatedFriendRequest is the full user
                
                { _id: idUser, "friendRequests._id": idFriendRequest },
                { $set: { "friendRequests.$.status": status } },
                { returnDocument: 'after' }

            );

            // If accepted, add as friend
            if (status === 'accepted' && updatedFriendRequest) {
                const acceptedFriendReq = updatedFriendRequest.friendRequests.id(idFriendRequest);
                await User.findByIdAndUpdate(
                    idUser,
                    { $push: { friends: acceptedFriendReq.from } }
                );
            }

            return updatedFriendRequest;

        } catch (err) {
            console.log(err);
            throw new Error(err);
        }

    },

    sendFriendRequest: async (idTarget, idFrom) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            idTarget,
            { $push: { friendRequests: { from: idFrom, status: 'pending' } } },
            { returnDocument: 'after' }
        )
        return updatedUser
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

}

// findByIdAndUpdate → search by one field (_id)
// findOneAndUpdate → search by multiple fields ({ _id: x, "array.field._id": y })

module.exports = userService;
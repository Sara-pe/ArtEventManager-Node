const argon2 = require('argon2');
const User = require('../../models/user.model');

const authService = {

    emailAlreadyExists: async (email) => {

        try {
            const userFound = await User.findOne({ email })

            if (userFound) {
                return true

            } else {
                return false
            }

        }
        catch (err) {
            console.log(err);
            throw new Error(err);
        }
    },

    create: async (userToAdd) => {

        try {

            //? Hash the password to add the hashed version of the password to the DB
            const hashedPassword = await argon2.hash(userToAdd.password);
            userToAdd.password = hashedPassword;

            const userToCreate = User(userToAdd);
            await userToCreate.save();

            return userToCreate;

        }
        catch (err) {
            console.log(err);
            throw new Error(err);
        }
    },

    findByCredentials: async (credentials) => {

        try {

            //1) Find the user with the same email
            const userFound = await User.findOne({ email: credentials.email });

            if (!userFound) {
                return undefined;
            }

            //2) Check if the hashed password corresponds to the password the user typed
            const checkedPassword = await argon2.verify(userFound.password, credentials.password)

            if (!checkedPassword) {
                return undefined
            }
            else {
                return userFound;
            }

        } catch (err) {
            console.log(err);
            throw new Error(err);
        }

    }


}

module.exports = authService;


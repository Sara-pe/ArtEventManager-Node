const Event = require('../../models/event.model');

const eventService = {

    find: async () => {
        try {

            const events = await Event.find()
                .populate({
                    path: 'createdBy',
                    select: { id: 1, name: 1, lastname: 1 }
                })
                .populate({
                    path: 'interested',
                    select: { id: 1, name: 1, lastname: 1 }
                })
                .populate({
                    path: 'invitations',
                    populate: [
                        { path: 'from', select: { id: 1, name: 1, lastname: 1 } },
                        { path: 'to', select: { id: 1, name: 1, lastname: 1 } }
                    ]
                });
            return events;

        }
        catch (err) {

            console.log(err);
            throw new Error(err);

        }
    },

    findById: async (id) => {
        try {

            const event = await Event.findById(id)
                .populate({
                    path: 'createdBy',
                    select: { id: 1, name: 1, lastname: 1 }
                })
                .populate({
                    path: 'interested',
                    select: { id: 1, name: 1, lastname: 1 }
                })
                .populate({
                    path: 'invitations',
                    populate: [
                        { path: 'from', select: { id: 1, name: 1, lastname: 1 } },
                        { path: 'to', select: { id: 1, name: 1, lastname: 1 } }
                    ]
                });
            return event;

        }
        catch (err) {
            console.log(err);
            throw new Error(err);

        }
    },

    findCreatedBy: async (userId) => {
        try {

            const events = await Event.find({ createdBy: userId })
                .populate({
                    path: 'createdBy',
                    select: { id: 1, name: 1, lastname: 1 }
                })
                .populate({
                    path: 'interested',
                    select: { id: 1, name: 1, lastname: 1 }
                })
                .populate({
                    path: 'invitations',
                    populate: [
                        { path: 'from', select: { id: 1, name: 1, lastname: 1 } },
                        { path: 'to', select: { id: 1, name: 1, lastname: 1 } }
                    ]
                });

            return events;

        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    },


    findInterested: async (userId) => {
        try {

            const events = await Event.find({ interested: userId })
                .populate({
                    path: 'createdBy',
                    select: { id: 1, name: 1, lastname: 1 }
                })
                .populate({
                    path: 'interested',
                    select: { id: 1, name: 1, lastname: 1 }
                })
                .populate({
                    path: 'invitations',
                    populate: [
                        { path: 'from', select: { id: 1, name: 1, lastname: 1 } },
                        { path: 'to', select: { id: 1, name: 1, lastname: 1 } }
                    ]
                });

            return events;

        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    },


    create: async (event) => {
        try {
            const eventToAdd = Event(event);
            await eventToAdd.save();
            return eventToAdd;

        }
        catch (err) {

            console.log(err);
            throw new Error(err);
        }
    },

    update: async (id, newEventInfos) => {
        try {
            const updatedEvent = await Event.findByIdAndUpdate(
                id,
                newEventInfos,
                { new: true }
            );
            return updatedEvent;
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    },

    delete: async (id) => {
        try {

            const deletedEvent = await Event.findByIdAndDelete(id);
            if (deletedEvent) {
                return true;
            } else {
                return false;
            }

        } catch (err) {
            console.log(err);
            throw new Error(err);

        }
    },

    findInvitationsFrom: async (userId) => {
        try {
            const eventsInvitationFrom = await Event.find({ "invitations.from": userId })
                .populate({
                    path: 'createdBy',
                    select: { id: 1, name: 1, lastname: 1 }
                })
                .populate({
                    path: 'interested',
                    select: { id: 1, name: 1, lastname: 1 }
                })
                .populate({
                    path: 'invitations',
                    populate: [
                        { path: 'from', select: { id: 1, name: 1, lastname: 1 } },
                        { path: 'to', select: { id: 1, name: 1, lastname: 1 } }
                    ]
                });

            // Option1: return eventsInvitationFrom

            //Option 2: return only the invitation with the name of the event

            return eventsInvitationFrom
                .flatMap(event => event.invitations
                    .map(inv => ({
                        ...inv.toObject(),
                        eventName: event.name
                    }))
                );

            // flatMap does the map and then flattens one level.
            // 1. invitationFrom is an array of events, flatMap iterates over each event
            //    and flattens the final result into a single array
            // 2. For each event, iterates over its invitations array
            // 3. Converts the invitation (Mongoose subdocument) to a plain JS object
            //    and spreads all its properties: from, to, status, _id...
            // 4. Adds an extra property with the name of the event it belongs to

        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    },

   findInvitationsTo: async (userId) => {
        try {
            const eventsInvitationFrom = await Event.find({ "invitations.to": userId })
                .populate({
                    path: 'createdBy',
                    select: { id: 1, name: 1, lastname: 1 }
                })
                .populate({
                    path: 'interested',
                    select: { id: 1, name: 1, lastname: 1 }
                })
                .populate({
                    path: 'invitations',
                    populate: [
                        { path: 'from', select: { id: 1, name: 1, lastname: 1 } },
                        { path: 'to', select: { id: 1, name: 1, lastname: 1 } }
                    ]
                });

            return eventsInvitationTo
                .flatMap(event => event.invitations
                    .map(inv => ({
                        ...inv.toObject(),
                        eventName: event.name
                    }))
                );


        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    },


  createInvitation: async (eventId, invitationData) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            eventId,
            { $push: { invitations: invitationData } },
            { new: true }
        );
        return updatedEvent;

    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
},

updateInvitation: async (eventId, invitationId, status) => {

      try {
       const updatedEvent = await Event.findOneAndUpdate(
            { _id: eventId, "invitations._id": invitationId },
            { $set: { "invitations.$.status": status } },
            { returnDocument: 'after' }
        );
        return updatedEvent;

    } catch (err) {
        console.log(err);
        throw new Error(err);
    }     

    //findOneAndUpdate instead of findByIdAndUpdate — you need to search by two fields at the same time (eventId and invitationId)
    // invitations.$.status - $ the invitation of the invitationId
    //$set: udpate , $push: add new 

}
}


module.exports = eventService;

const { Request, Response } = require('express')

const fakeEventService = require("../services/FakeDB/fakeEvent.service");

const eventController = {

    getAll: (req, res) => {
        const events = fakeEventService.find();

        const dataToSend = {
            count: events.length,
            events
        };
        res.status(200).json(dataToSend);
    },

    getById: (req, res) => {

        const id = +req.params.id;
        const event = fakeEventService.findById(id);

        if (!event) {
            res.status(404).json({
                statusCode: 404,
                message: 'Event not found'
            })
        }
        res.status(200).json(event);
    },

    getByUser: (req, res) => {

        const userId = +req.params.id;

        const createdByMe = eventService.findCreatedBy(userId);
        const interestedIn = eventService.findInterested(userId);

        if (createdByMe.length === 0 && interestedIn.length === 0) {
            return res.status(404).json({
                statusCode: 404,
                message: 'No events found for this user'
            });
        }

        res.status(200).json({
            userId,
            created: createdByMe,
            interested: interestedIn
        });
    },

    insert: (req, res) => {
        const eventToAdd = req.body;
        const addedEvent = fakeEventService.create(eventToAdd);


        res.location(`/api/events/${addedEvent.id}`);
        res.status(201).json(addedEvent);
    },

    update: (req, res) => {
        const id = +req.params.id;
        const newEventInfos = req.body;

        //Verify if the event already exists
        const event = fakeEventService.findById(id);
        if(!event) {
            res.status(404).json({ statusCode : 404, message : 'The event you are trying to modify does not exist'});
        }

        //If the event exists
        const updatedEvent = fakeEventService.update(id, newEventInfos);
        res.status(200).json(updatedEvent);        
    },



    delete: (req, res) => {
        const id = +req.params.id;

        if (fakeEventService.delete(id)) {
            res.sendStatus(204);
        }

        else {
            res.status(404).json({ statusCode: 404, message: 'Impossible supression, the event does not exist' })
        }
    },

    getInvitations: (req, res) => {
               const userId = +req.params.id;

        const invitationsSent = fakeEventService.findInvitationsFrom(userId);
        const invitationsReceived = fakeEventService.findInvitationsTo(userId);
       
       
        if (invitationsSent.length === 0 && invitationsReceived.length === 0) {
            return res.status(404).json({
                statusCode: 404,
                message: 'No invitations found for this user'
            });
        }

        res.status(200).json({
            userId,
            created: invitationsSent,
            interested: invitationsReceived
        });
    
    },

    insertInvitation: (req, res) =>  {
        const eventId = +req.params.id;
        const invitationData = req.body;
        const addedInvitation = fakeEventService.createInvitation(eventId, invitationData);

        res.location(`/api/events/${eventId}/invitations/${addedInvitation.id}`);
        res.status(201).json(addedInvitation);
    },

    updateInvitation: (req, res) => {

        const eventId = +req.params.eventId;
    const invitationId = +req.params.invitationId;
        const status = req.body.status;
        const modifyInvitation = fakeEventService.updateInvitation(eventId, invitationId, status);

        if (!modifyInvitation) {
            res.status(404).json({
                statusCode: 404,
                message: 'Invitation or event not found'
            })
        }

        res.status(200).json(modifyInvitation);
    },
}

module.exports = eventController;
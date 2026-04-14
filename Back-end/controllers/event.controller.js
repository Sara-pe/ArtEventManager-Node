
const { Request, Response } = require('express')

//const fakeEventService = require("../services/FakeDB/fakeEvent.service");
const eventService = require('../services/mongo/event.service');

const eventController = {

    getAll: async (req, res) => {

        try {
            const events = await eventService.find();

            const dataToSend = {
                count: events.length,
                events
            };
            res.status(200).json(dataToSend);


        } catch (err) {

            res.status(500).json({ statusCode: 500, message: 'Error fetching data from the DB' });
        }
    },

    getById: async (req, res) => {

        try {
            const id = req.params.id;
            const event = await eventService.findById(id);

            if (!event) {
                res.status(404).json({
                    statusCode: 404,
                    message: 'Event not found'
                })
            }
            res.status(200).json(event);

        } catch (err) {
            console.log(err);
            res.status(500).json({ statusCode: 500, message: 'Error fetching data from the DB' });
        }
    },

    getByUser: async (req, res) => {

        try {

            const userId = req.params.idUser;

            const createdByMe = await eventService.findCreatedBy(userId);
            const interestedIn = await eventService.findInterested(userId);


            if (createdByMe.length === 0
                && interestedIn.length === 0
            ) {
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

        } catch (err) {
            console.log(err);
            res.status(500).json({ statusCode: 500, message: 'Error fetching data from the DB' });
        }
    },


    insert: async (req, res) => {
       try {
       
        const eventToAdd = req.body;
        eventToAdd.createdBy = req.user.id;

        const addedEvent = await eventService.create(eventToAdd);

        res.location(`/api/events/${addedEvent.id}`);
        res.status(201).json(addedEvent);

          } catch (err) {
            console.log(err);
            res.status(500).json({ statusCode: 500, message: 'Error fetching data from the DB' });
        }
    },

    update: async (req, res) => {

         try {
        const id = req.params.id;
        const newEventInfos = req.body;

        //Verify if the event already exists
        const event = await eventService.findById(id);
        if (!event) {
            res.status(404).json({ statusCode: 404, message: 'The event you are trying to modify does not exist' });
        }

        //If the event exists
        const updatedEvent = await eventService.update(id, newEventInfos);
        res.status(200).json(updatedEvent);

         } catch (err) {
            console.log(err);
            res.status(500).json({ statusCode: 500, message: 'Error fetching data from the DB' });
        }
    },



    delete: async (req, res) => {
       
       try {
        const id = req.params.id;

        const deletedEvent = await eventService.delete(id);

        if (deletedEvent) {
            res.sendStatus(204);
        }

        else {
            res.status(404).json({ statusCode: 404, message: 'Impossible supression, the event does not exist' })
        }

             } catch (err) {
            console.log(err);
            res.status(500).json({ statusCode: 500, message: 'Error fetching data from the DB' });
        }
    },



    getInvitations: async (req, res) => {

        try {
        const userId = req.params.id;

        const invitationsSent = await eventService.findInvitationsFrom(userId);
        const invitationsReceived = await eventService.findInvitationsTo(userId);


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

            } catch (err) {
            console.log(err);
            res.status(500).json({ statusCode: 500, message: 'Error fetching data from the DB' });
        }

    },

    insertInvitation: async (req, res) => {

        try {
       
        const eventId = req.params.id;
        const invitationData = req.body;
        const addedInvitation = await eventService.createInvitation(eventId, invitationData);

        res.location(`/api/events/${eventId}/invitations/${addedInvitation.id}`);
        res.status(201).json(addedInvitation);

             } catch (err) {
            console.log(err);
            res.status(500).json({ statusCode: 500, message: 'Error fetching data from the DB' });
        }
    },

    updateInvitation: async (req, res) => {

        const eventId = req.params.eventId;
        const invitationId = req.params.invitationId;
        const status = req.body.status;
        const modifyInvitation = await eventService.updateInvitation(eventId, invitationId, status);

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
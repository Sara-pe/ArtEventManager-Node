const { events } = require("./fakeDb");

const fakeEventService = {


    find: () => {
        return events;
    },

    findById: (id) => {
        return events.find(event => event.id === id);
    },


    findCreatedBy: (userId) => {
        return events.filter(event => event.createdBy === userId);

    },

    findInterested: (userId) => {
        return events.filter(event => event.interested === userId);

    },

    create: (eventToAdd) => {

        let idMax;
        if (events.length !== 0) {
            idMax = Math.max(...events.map(event => event.id));
        } else {
            idMax = 0;
        }

        eventToAdd.id = idMax + 1;

        events.push(eventToAdd);

        return eventToAdd;
    },


    update: (id, event) => {
        const eventToUpdate = events.find(event => event.id === id);
        eventToUpdate.name = event.name;
        eventToUpdate.at = event.at
        eventToUpdate.address = event.address;

        return eventToUpdate;
    },

    delete: (id) => {

        const event = events.findIndex(event => event.id === id);
        if (index === -1) {
            return false;
        }
        events.splice(index, 1);
        return true;
    },

    findInvitationsFrom: (userId) => {
        return events.filter(event => event.invitations.from === userId);
    },

    findInvitationsTo: (userId) => {
        return events.filter(event => event.invitations.to === userId);
    },

    createInvitation: (eventId, invitationToAdd) => {
        // 1. Find event of the invitation
        const event = events.find(e => e.id === parseInt(eventId));

        if (!event) return null; // Si el evento no existe, no podemos añadir la invitación

        // 2. New Id
        let idMax;
        if (event.invitations.length !== 0) {
            // Buscamos el ID máximo dentro de las invitaciones de ESTE evento
            idMax = Math.max(...event.invitations.map(i => i.invitationId));
        } else {
            idMax = 0;
        }

        // 3. Create object of the invitation
        const newInvitation = {
            invitationId: idMax + 1,
            from: invitationToAdd.from,
            to: invitationToAdd.to,
            status: "pending" // Por defecto siempre empieza en pendiente
        };

        // 4. Add the invitation
        event.invitations.push(newInvitation);

        return newInvitation;
    },

    updateInvitation: (idInvitation, invitation) => {
        invitationToUpdate.status = invitation.status;
        return invitationToUpdate;
    },

}

module.exports = fakeEventService;
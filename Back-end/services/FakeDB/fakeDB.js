
const users = [
    {
        id: 1,
        name: "Santi",
        email: "santi@art.com",
        password: "...",
        friends: [
            "2",
            "3"
        ],
        friendRequests: [
            {
                "from": "2",
                "status": "pending"
            }
        ]
    },

    {
        id: 2,
        name: "Paula",
        email: "paula@art.com",
        password: "...",
        friends: [
            "3"
        ],
        friendRequests: [
            {
                "from": "1",
                "status": "pending"
            }
        ]
    },

    {
        id: 3,
        name: "Julio",
        email: "julio@art.com",
        password: "...",
        friends: [
            "1"
        ],
        friendRequests: [
            {
                "from": "2",
                "status": "pending"
            }
        ]
    }


];

const events = [
    {
        id: 1,
        name: "Richard Tuttle - 'Nothing'",
        at: "Greeta Meert",
        address: "Avenue du domaine 177",
        createdBy: 2,
        interested: [
            2,
            3
        ],
        invitations: [
            {
                invitationId: 1,
                from: 1,
                to: 3,
                status: "pending"
            },
            {
                invitationId: 2,
                from: 1,
                to: 2,
                status: "pending"
            }
        ]
    }

]


module.exports = { events, users };
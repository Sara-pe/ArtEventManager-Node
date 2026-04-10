import App from "./App"
import PlainLayout from "./PlainLayout"
import {Login} from "./features/auth/Login"
import {Register} from "./features/auth/Register"
import {ProtectedPage} from "./features/auth/ProtectedPage"
import {Home} from "./features/events/Home"
import {AddEvent} from "./features/events/AddEvent"
import {Notifications} from "./features/notifications/Notifications"

/**
 * @type {import"react-router".RouteObject[]}
 */

export const routes = [

    {
        element: <PlainLayout />,
        children: [
            {
                path: 'auth',
                children: [
                    {
                        path: 'register',
                        element: <Register />
                    },

                    {
                        path: 'login',
                        element: <Login />
                    }
                ]
            },
        ]
    },

    {
        element: <App />,
        children: [

            { index: true, element: <ProtectedPage><Home/></ProtectedPage> },
                { path: 'add', element: <ProtectedPage><AddEvent/></ProtectedPage> },
            { path: 'friends', element: <ProtectedPage>'Friends'</ProtectedPage> },
            { path: 'notifications', element: <ProtectedPage> <Notifications/> </ProtectedPage> },
            { path: 'agenda', element: <ProtectedPage>'Agenda'</ProtectedPage> },
            { path: 'settings', element: <ProtectedPage>'Settings'</ProtectedPage> }
        ]

    }

]
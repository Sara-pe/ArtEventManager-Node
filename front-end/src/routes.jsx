import App from "./App"
import {Login} from "./features/auth/Login"
import {Register} from "./features/auth/Register"

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
            //Make <ProtectedPage></ProtectedPage> for token management -> login as index if you are not logged in

            { index: true, element: 'Home' },
            { path: 'friends', element: 'Friends' },
            { path: 'notifications', element: 'Notifications' },
            { path: 'agenda', element: 'Agenda' },
            { path: 'settings', element: 'Settings' }
        ]

    }

]
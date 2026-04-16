import { NavLink } from "react-router-dom"
import { NotificationAtom } from '../../atoms/notifications.atom'
import { useAtomValue } from "jotai"

export const Header = () => {

    const notifications = useAtomValue(NotificationAtom)


    return (

        <div className="page" >
            <div className="header">
                <p className="logo">ARTFORM</p>

<div className="btn-icon">
                <NavLink to="/notifications"> <img src="/icons/notifications.png" alt="Notifications" /> </NavLink>
              <div className="nmb-notifications">  <p>{notifications}</p></div>
            </div></div>

        </div>

    )
}
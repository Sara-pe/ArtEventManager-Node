import { NavLink } from "react-router-dom"

export const Header = () => {
    return (

        <div className="page" >
            <div className="header">
                <p className="logo">ARTFORM</p>
                <NavLink to="/notifications" className="btn-icon"> <img src="/icons/notifications.png" alt="Notifications" /> </NavLink>
            </div>

        </div>

    )
}
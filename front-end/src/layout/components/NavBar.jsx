import { NavLink } from "react-router-dom"
import { useSetAtom } from "jotai"

import { useNavigate } from "react-router-dom"
import { saveAtom } from '../../atoms/token.atom.js';

export const NavBar = () => {
    const navigate = useNavigate()
    const setToken = useSetAtom(saveAtom)


    const handleLogOut = () => {
        setToken(null);
        navigate('/');
    }


    return (
        <div className="navBar">
            <NavLink to="/"><img src="/icons/home.png" alt="Home" /></NavLink>
            <NavLink to="/friends"><img src="/icons/friends.png" alt="Friends" /></NavLink>
            <NavLink to="/agenda"><img src="/icons/agenda.png" alt="Agenda" /></NavLink>
            <NavLink to=""><img src="/icons/settings.png" alt="Settings" /></NavLink>
            
            <button onClick={handleLogOut}><img src="/icons/logout.png" alt="Log out" /></button>

        </div>
    )
}
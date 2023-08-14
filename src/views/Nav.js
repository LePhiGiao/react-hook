import './Nav.scss'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink className={(navData) => (navData.isActive ? 'active' : '')} to="/" >Home</NavLink>
            <NavLink to="/timer">Timer App</NavLink>
            <NavLink to="/todo">Todos App</NavLink>
            <NavLink to="/youtube">Youtube App</NavLink>
        </div>
    )
}

export default Nav
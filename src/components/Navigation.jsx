import { NavLink } from 'react-router-dom';


export default function Navigation() {
   
    return <ul className="navigation">
        <li><NavLink exact to="/">HOME</NavLink></li>
        <li><NavLink to="/collections">SCROLL</NavLink></li>
        <li><NavLink to="/contact">COLORS</NavLink></li>
    </ul>;
}
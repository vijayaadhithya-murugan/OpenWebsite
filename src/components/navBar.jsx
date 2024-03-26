import { NavLink } from "react-router-dom";

const NavBar = () =>{
    return(
        <nav>
        <ul className="navbar_styles">
        <li>
            <NavLink to="/OpenWebsite/">Home</NavLink>
            </li>
            <li><NavLink to="/OpenWebsite/about">About Me</NavLink></li>
            <li><NavLink to="/OpenWebsite/education">Education</NavLink></li>
            <li><NavLink to="/OpenWebsite/experience">Experience</NavLink></li>
            <li><NavLink to="/OpenWebsite/personal">Personal</NavLink></li>
            <li><NavLink to="/OpenWebsite/skills">Skills</NavLink></li>
            </ul>
            </nav>
    )
};
export default NavBar;
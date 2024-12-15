import { NavLink } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul className="navbar_styles">
        <h3>Vijay Aadhithya</h3>
        {/* <li>
            <NavLink to="/OpenWebsite/">Home</NavLink>
            </li> */}
        <li>
          <NavLink to="/about">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/education">Education</NavLink>
        </li>
        <li>
          <NavLink to="/experience">Experience</NavLink>
        </li>
        <li>
          <NavLink to="/personal">Personal</NavLink>
        </li>
        <li>
          <NavLink to="/skills">Skills</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;

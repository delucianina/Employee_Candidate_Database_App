import { NavLink} from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/CandidateSearch">Potential Candidates</NavLink>
    </nav>

      
  )
};

export default Nav;

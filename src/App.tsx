// IMPORT PACKAGES
import { Outlet } from 'react-router-dom';

// IMPORT COMPONENTS 
import Nav from './components/Nav';

// IMPORT PAGES 
// import CandidateSearch from './pages/CandidateSearch';
// import ErrorPage from './pages/ErrorPage';



// APP FUNCTION: 
function App() {
  
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;

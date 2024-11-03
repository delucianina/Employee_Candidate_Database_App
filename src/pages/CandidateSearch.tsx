import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch = () => {

  // ------- COPILOT HELPED -------
  // SINCE I KEEP FORGETTING:
  // USESTATE IS A REACT FUNCTION THAT KEEPS TRACK OF THINGS THAT CAN CHANGE 
  // RANDUSER IS THE VARIABLE 
  // SETRANDUSER IS THE FUNCTION THAT CHANGES THE VALUE 
  const [randUser, setRandUser] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await searchGithub();
      // CONSOLE LOG AS A TEST
      console.log(user);



      setRandUser(user.login); 
      // Assuming 'login' is a string property of the user object
      const userDetails = await searchGithubUser(user.login);
      console.log(userDetails);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h1>CandidateSearch</h1>
      <p>Random User: {randUser}</p>
    </div>
  );






  // searchGithub();
  // return (
  //     <div>
  //       <h1>CandidateSearch</h1>
  //       {/* {randUser && <p>Random User: {randUser}</p>} */}
  //     </div>
  //   );
};

export default CandidateSearch;

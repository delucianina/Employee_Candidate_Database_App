import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch = () => {

  // ------- COPILOT HELPED -------
  // SINCE I KEEP FORGETTING:
  // useState IS A REACT FUNCTION THAT KEEPS TRACK OF THINGS THAT CAN CHANGE 
  // randUser IS THE VARIABLE 
  // setRandUser IS THE FUNCTION THAT CHANGES THE VALUE 
  const [randUser, setRandUser] = useState<string | null>(null);


  useEffect(() => {
    const fetchUser = async () => {
      // Grabs the user info, returns 30 profiles as an array of objects 
      const user = await searchGithub();
      // CONSOLE LOG AS A TEST
      console.log(user);


      // Not sure why copilot injected this... 
      // I think this is setting randUser to the value of user, which would be 30 users? It's returning undefined 
      setRandUser(user); 
      // Assuming 'login' is a string property of the user object
      const userDetails = await searchGithubUser(user);
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

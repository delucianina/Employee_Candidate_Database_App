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
      // I think this is setting randUser to the value of user, which would be 30 github profiles? It's returning undefined 
      setRandUser(user); 
      const userDetails = await searchGithubUser(user);
      console.log(userDetails);
    };


    fetchUser();

  }, []);

  // ---------- END OF COPILOT PULLING LOTS OF WEIGHT ------------ 
  // IT JUST CONFUSED ME MORE, TO BE HONEST  


  return (
    <div>
      <h1>CandidateSearch</h1>
      {/* Include CandidateCard here when it's finished */}
      <p>Random User: </p>
      {/* Will display randUser here 
          
          Are we supposed to cycle through the 30 github profiles one by one and allow the user to save or reject them?
          If they save a candidate, add it to local memory and then show any profiles saved to local memory on the Potential Candidates page?
          
          I'm operating under the assumption this is the assignment, but it wasn't totally clear to me or any of my classmates I asked */}
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

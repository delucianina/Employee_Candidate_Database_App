import { 
    useState, 
    useEffect, 
    useContext, 
    createContext, 
    ReactNode, 
    Dispatch, 
    SetStateAction 
  } from 'react';
  import axios from 'axios';
  
//   interface Shop {
//     id?: number;
//     name?: string;
//     address?: string;
//     created_at?: Date;
//     updated_at?: Date;
//   }
  export interface CandidateInterface {
    name?: string,
    location?: string,
    email?: string,
    company?: string,
    bio?: string
}

//   export interface CandidateInterface {
//     "login": "octocat",
//     "id": 1,
//     "node_id": "MDQ6VXNlcjE=",
//     "avatar_url": "https://github.com/images/error/octocat_happy.gif",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/octocat",
//     "html_url": "https://github.com/octocat",
//     "followers_url": "https://api.github.com/users/octocat/followers",
//     "following_url": "https://api.github.com/users/octocat/following{/other_user}",
//     "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
//     "organizations_url": "https://api.github.com/users/octocat/orgs",
//     "repos_url": "https://api.github.com/users/octocat/repos",
//     "events_url": "https://api.github.com/users/octocat/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/octocat/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": "monalisa octocat",
//     "company": "GitHub",
//     "blog": "https://github.com/blog",
//     "location": "San Francisco",
//     "email": "octocat@github.com",
//     "hireable": false,
//     "bio": "There once was...",
//     "twitter_username": "monatheoctocat",
//     "public_repos": 2,
//     "public_gists": 1,
//     "followers": 20,
//     "following": 0,
//     "created_at": "2008-01-14T04:33:35Z",
//     "updated_at": "2008-01-14T04:33:35Z",
//     "private_gists": 81,
//     "total_private_repos": 100,
//     "owned_private_repos": 100,
//     "disk_usage": 10000,
//     "collaborators": 8,
//     "two_factor_authentication": true,
//     "plan": {
//       "name": "Medium",
//       "space": 400,
//       "private_repos": 20,
//       "collaborators": 0
//     }
//   }

  interface User {
    id?: number;
    first_name?: string;
    last_name?: string;
    full_name?: string;
    email?: string;
    created_at?: Date;
    updated_at?: Date;
    shops?: CandidateInterface[]
  }
  
  interface State {
    user: User | null;
    loading: boolean;
  }
  
  interface StoreContextType {
    state: State;
    setState: Dispatch<SetStateAction<State>>;
  }
  
  // The createContext takes an initial value, but you must describe the innitial value/argument and what the context object will look like later 
  // SO... StoreContextType describes the objects that I'm passing in on line 67 through the value prop 
  const StoreContext = createContext<StoreContextType | undefined>(undefined);
  
  const initialState: State = {
    user: null,
    loading: true
  };
  
  
  export function StoreProvider(props: {children: ReactNode}) {
    const [state, setState] = useState(initialState);
    
    useEffect(() => {
      axios.get('/auth/user')
        .then(res => {
          setState({
            ...state,
            user: res.data.user,
            loading: false
          });
        });
    }, [])
  
    return (
      <StoreContext.Provider value={{
        state,
        setState
      }}>
        {props.children}
      </StoreContext.Provider>
    )
  }
  
  export const useStore = () => useContext(StoreContext);
  
  
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
    email?: string,
    blog?: string,
    twitter_username?: string,
    company?: string,
    location?: string,
    hireable?: boolean,
    bio?: string
}
  
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
  
  
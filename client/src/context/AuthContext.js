import { createContext, useEffect, useReducer } from "react";
//Each website has a local store data , so we have method getItem to get attribute "user"(to know user who logging in website)
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null, 
  loading: false,
  error: null,
};
// using contex API 
export const AuthContext = createContext(INITIAL_STATE); 


// function alway return new state 
function AuthReducer(state, action) { // here we should Reducer to code Auth instead of UseState
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}

// because AuthContextProvider so {children} is child component in react
export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE); // like action
  console.log(state)
  console.log("AuthContext: ")
  console.log(dispatch)
  useEffect(function () {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}



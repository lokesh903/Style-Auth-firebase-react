import React from 'react'
import { useContext ,useEffect,useState} from 'react'
import { auth } from '../firebase'
const AuthContext = React.createContext()

export function useAuth(){
 return useContext(AuthContext)
}

export  function AuthProvider({ children }) {

    var [currentUser, setCurrentUser] = useState("");
    var signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
      }; 
    var login=(email,password)=>{
        return auth.signInWithEmailAndPassword(email,password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
        })
        return unsubscribe
      }, [])
      
      const value={
        signup,
        currentUser,
        login
    }

  return (
    <div>
      <AuthContext.Provider value={value}>
        <div>{children}</div>
      </AuthContext.Provider>
    </div>
  )
}

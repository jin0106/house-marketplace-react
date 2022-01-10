import { useEffect,useState, useRef } from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'


export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)
  const isMounted = useRef(true)

  useEffect(() => {
    if (isMounted){
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if(user) {
          setLoggedIn(true)
        }
        setCheckingStatus(false)
      })
    }

    return () => {
      isMounted.current = false
    }
    
  })
  return { loggedIn, checkingStatus }
}


// Protected routes in v6
//reference : https:://stackoverflow.com/questions/65505665/protected-route-with-firebase

// Fix memory leak warning 
// https://stackoverflow.com/questions/59780268/cleanup-memory-leaks-on-au-unmounted-component-in-react-hooks
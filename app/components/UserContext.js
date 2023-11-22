import { createContext, useState , useEffect, useContext} from 'react' 
import { supabaseClient } from './supabaseClient'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState()

    useEffect(() => {
        const session = supabaseClient.auth.getSession()

        setUser(session?.user ?? null)

        const {data: listener } = supabaseClient.auth.onAuthStateChange(
            (event,session)=>{
                setUser(session?.user ?? null)
            }
        )
    },[])

    const value = {
        user,
        signOut: () => supabaseClient.auth.signOut()
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser =()=>{
    return useContext(UserContext)
}

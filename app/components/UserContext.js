import React, { createContext, useState } from 'react';

const UserContext = createContext()

export default UserContext

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const defaultUser = {
        username : '',
        email: '',
        img:'',
    }
    return (
        <UserContext.Provider 
            value={{ 
                user: user, 
                login: (user) =>{
                    setUser(user)
                }, 
                logout:() =>{
                    setUser(null)
                }
            }}
        >
        {children}
        </UserContext.Provider>
    );
}

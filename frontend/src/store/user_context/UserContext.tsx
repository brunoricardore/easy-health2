import React, { createContext, useState } from "react";
import User from "../../models/User";


export type UserContextType = {
    user: User | null;
    updateUser: (user: User) => void;
    clearUser: () => void;
};

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider: React.FC<React.ReactNode> = ({ children }) => {
    // const [user, setUser] = useState<User | null>(JSON.parse(localStorage.getItem('loggedUser')+'') || null);
    const [user, setUser] = useState<User | null>({
        email: 'brunoricardore@gmail.com',
        name: 'Bruno Ricardo',
        avatar: 'https://gravatar.com/avatar/1cdcfc535a?s=512&d=robohash',
        birth_date: '1993-12-17'
    });

    const updateUser = (user: User) => {
        setUser(user);
    }

    const clearUser = () => setUser(null);
    return <UserContext.Provider value={{ user, updateUser, clearUser }}>
        {children}
    </UserContext.Provider>
}
export default UserProvider;
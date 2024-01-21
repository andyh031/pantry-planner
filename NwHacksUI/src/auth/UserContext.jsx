import React, { createContext, useState } from 'react';

const UserContext = createContext();

// store user info after login
function UserContextProvider({ children }) {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContextProvider }
export default UserContext;

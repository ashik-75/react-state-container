import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  console.log({ user });

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const result = await response.json();

      setUser(result);
    } catch (error) {
      console.log({ error: error?.message });
    }
  };

  return (
    <UserContext.Provider value={{ user, fetchData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

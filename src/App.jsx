import Users from "./components/Users.jsx";
import "./index.css";
import NewUser from "./components/NewUser.jsx";
import { useState } from "react";
import UsersContext from "./context/UsersContext.jsx";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "saiful" },
    { id: 2, name: "emon" },
    { id: 3, name: "shamim" },
  ]);

  return (
    <>
      <UsersContext.Provider value={{ users, setUsers }}>
        <NewUser />
        <Users />
      </UsersContext.Provider>
    </>
  );
};

export default App;

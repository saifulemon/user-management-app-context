import { useState } from "react";
import Users from "./components/Users";
import './index.css';
import NewUser from "./components/NewUser";

const App = () => {

const [ users, setUsers ] = useState([
  {id: 1, name: 'saiful'},
  {id: 2, name: 'emon'},
  {id: 3, name: 'shamim'}
]);

const handleDeleteUser = (id) => {
  const filteredUsers = users.filter(user => user.id !== id);
  setUsers(filteredUsers);
}

const handleAddNewUser = (newUser) => {
  setUsers( (prevUsers) => [...prevUsers, newUser]);
}

  return (
    <>
      <NewUser handleAddNewUser={handleAddNewUser} />
      <Users users={users} handleDeleteUser={handleDeleteUser} />
    </>
  )
}

export default App;

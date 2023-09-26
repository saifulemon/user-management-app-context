import { useState } from 'react';
import useUsersContext from '../hooks/useUsersContext';

const NewUser = () => {
    const [userName, setuserName] = useState("");
    const { setUsers } = useUsersContext();

    const handleAddUser = (event) => {
        setuserName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            id: new Date().getTime().toString(),
            name: userName
        };
        setUsers((prevUsers) => [...prevUsers, newUser]);
        setuserName("");
    }

  return (
    <>
        <h2>User Registration</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="user" value={userName} onChange={handleAddUser} required/>
            <button type='submit'>Add User</button>
        </form>
    </>
  )
}

export default NewUser;
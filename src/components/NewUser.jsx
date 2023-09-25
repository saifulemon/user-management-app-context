import React, { useState } from 'react'

const NewUser = ({handleAddNewUser}) => {
    const [user, setuser] = useState("");
    const handleAddUser = (event) => {
        setuser(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            id: new Date().getTime().toString(),
            name: user
        }

        handleAddNewUser(newUser);
        setuser("");
    }

  return (
    <>
        <h2>User Registration</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="user" value={user} onChange={handleAddUser} required/>
            <button type='submit'>Add User</button>
        </form>
    </>
  )
}

export default NewUser
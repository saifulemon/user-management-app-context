import useUsersContext from "../hooks/useUsersContext";

// eslint-disable-next-line react/prop-types
const User = ({ user }) => {
  // eslint-disable-next-line react/prop-types
  const {id, name} = user;
  const {users, setUsers} = useUsersContext();

  const handleDelete = (id) => {
    // eslint-disable-next-line react/prop-types
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  }
  return (
    <article className="user">
        <h2>{id}</h2>
        <h4>{name}</h4>
        <button onClick={() => {handleDelete(id)}}>Delete</button>
    </article>
  )
}

export default User
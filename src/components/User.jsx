const User = ({ user, handleDeleteUser }) => {
  const {id, name} = user;

  const handleDelete = (id) => {
    handleDeleteUser(id);
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
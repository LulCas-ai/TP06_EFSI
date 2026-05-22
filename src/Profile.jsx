function Profile({ posts, user }) {


  user && <div className="profile">Cargando perfil...</div>

  return (
    <div className="profile">
      <h2>{user.name.first}</h2>
      <p>Bio: hola mi nombre es {user.name.first} :V</p>

      <div className="stats">
        <span>{posts.length} posts</span>
        <span>1200 followers</span>
        <span>300 following</span>
      </div>

      <div className="grid">
        {posts.map((p) => (
          <img key={p.id} src={p.image} alt="cat" />
        ))}
      </div>
    </div>
  );
}

export default Profile;
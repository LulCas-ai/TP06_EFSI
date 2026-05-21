function Profile({ posts }) {
  return (
    <div className="profile">
      <h2>mi_usuario</h2>
      <p>Bio: hola mi nombre es lucas :V</p>

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
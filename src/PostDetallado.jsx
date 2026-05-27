import "./PostDetallado.css"

function PostDetallado({ post, user }) {
  return (
    <div className="postDetallado" >
      <div className="user">
        <img src={user.picture.thumbnail} alt="" />
        <h4>{user.name.first}</h4>
      </div>
      <img className="gato-img" src={post.image} alt="cat" />
      <span>{post.likes} likes</span>
      <div className="comentarios">
        <div></div>
      </div>
    </div>
  );
}

export default PostDetallado;
function PostDetallado({ post, setSelectedPost }) {
  return (
    <div className="post" onClick={() => setSelectedPost(post)}>
      <h4>{post.user}</h4>
      <img src={post.image} alt="cat" />
      <span>{post.likes} likes</span>
    </div>
  );
}

export default PostDetallado;
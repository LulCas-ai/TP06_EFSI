function PostDetail({ post, setSelectedPost }) {
  return (
    <div className="modal" onClick={() => setSelectedPost(null)}>
      <div className="modal-content">
        <img src={post.image} alt="cat" />
        <h3>{post.user}</h3>
        <p>{post.caption}</p>
        <p>{post.likes} likes</p>
      </div>
    </div>
  );
}

export default PostDetail;
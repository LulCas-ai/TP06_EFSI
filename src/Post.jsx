function Post({ post, setSelectedPost }) {
  return (
    <div className="post" onClick={() => setSelectedPost(post)}>
      <h4>{post.user}</h4>
      <img src={post.image}/>
      <p>{post.caption}</p>
      <span>{post.likes} likes</span>
    </div>
  );
}

export default Post;
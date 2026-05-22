import Post from "./Post";

function Feed({ posts, setSelectedPost, setView }) {
  return (
    <div className="feed">
      {posts.map((post) => (
        <Post key={post.id} post={post} setSelectedPost={setSelectedPost} setView={setView} />
      ))}
    </div>
  );
}

export default Feed;
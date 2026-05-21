import Post from "./Post";

function Feed({ posts, setSelectedPost }) {
  return (
    <div className="feed">
      {posts.map((post) => (
        <Post key={post.id} post={post} setSelectedPost={setSelectedPost} />
      ))}
    </div>
  );
}

export default Feed;
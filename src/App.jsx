import { useEffect, useState } from "react";
import { getCats } from "./JS/Api";
import Feed from "./Feed";
import Header from "./Header";
import PostDetail from "./PostDetallado";
import Profile from "./Profile";

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [view, setView] = useState("feed"); 

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCats();

      const formatted = data.map((cat, i) => ({
        id: cat.id,
        image: cat.url,
        user: "cat_user_" + i,
        likes: Math.floor(Math.random() * 1000),
        caption: "Miren este gato 😺",
      }));

      setPosts(formatted);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header setView={setView} />

      {view === "feed" && (
        <Feed posts={posts} setSelectedPost={setSelectedPost} />
      )}

      {view === "profile" && <Profile posts={posts} />}

      {selectedPost && (
        <PostDetail post={selectedPost} setSelectedPost={setSelectedPost} />
      )}
    </>
  );
}

export default App;
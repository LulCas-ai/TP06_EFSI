import { useEffect, useState } from "react";
import { getCats } from "./JS/Api";
import Feed from "./Feed";
import Header from "./Header";
import Profile from "./Profile";
import { getUser } from "./JS/Api";
import "./app.css"
function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [view, setView] = useState("feed"); 
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCats();
        const userData = await getUser();

        setUser(userData?.results?.[0] ?? null);

        const formatted = data.map((cat, i) => ({
          id: cat.id,
          image: cat.url,
          user: "cat_user_" + i,
          likes: Math.floor(Math.random() * 1000)
        }));

        setPosts(formatted);
      } catch (error) {
        console.error("Error cargando datos de la API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header setView={setView} />

      {view === "feed" && (
        <Feed posts={posts} setSelectedPost={setSelectedPost} />
      )}

      {view === "profile" && <Profile posts={posts} user={user} />}

      {view.includes("post") && selectedPost && (
        <div className="post-detallado">
          <button onClick={() => setView("feed")}>Volver al feed</button>
        </div>
      )}

    </>
  );
}

export default App;
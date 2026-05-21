function Header({ setView }) {
  return (
    <div className="header">
      <h1>Catstagram</h1>
      <button onClick={() => setView("feed")}>Feed</button>
      <button onClick={() => setView("profile")}>Perfil</button>
    </div>
  );
}

export default Header;
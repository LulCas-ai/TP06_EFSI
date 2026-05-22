function Header({ setView }) {
  return (
    <div className="header">
      <h1>que buen tp de efsi aprobame jessy</h1>
      <button onClick={() => setView("feed")}>Feed</button>
      <button onClick={() => setView("profile")}>Perfil</button>
    </div>
  );
}

export default Header;
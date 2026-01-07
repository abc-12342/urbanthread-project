export default function Dashboard() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "/";
  }

  return (
    <>
      <h1>Welcome to UrbanThread</h1>
      <button onClick={() => {
        localStorage.removeItem("loggedIn");
        window.location.href = "/";
      }}>
        Logout
      </button>
    </>
  );
}

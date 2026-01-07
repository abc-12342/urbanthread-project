import { useState } from "react";
import "./urbanthread.css";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    const url = isLogin
      ? "http://localhost:3000/login"
      : "http://localhost:3000/register";

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (data.success) {
      if (isLogin) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "/dashboard";
      } else {
        alert("Registered successfully");
        setIsLogin(true);
      }
    } else {
      alert("Error occurred");
    }
  };

  return (
    <div className="login-body">
      <div className="login-box">
        <h2>{isLogin ? "Login" : "Register"}</h2>

        <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

        <button onClick={submit}>{isLogin ? "Login" : "Register"}</button>

        <p className="switch-text">
          {isLogin ? (
            <span onClick={() => setIsLogin(false)}>Create account</span>
          ) : (
            <span onClick={() => setIsLogin(true)}>Already have account</span>
          )}
        </p>
      </div>
    </div>
  );
}

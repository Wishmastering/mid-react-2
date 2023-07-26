import React, { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Signup />
      <Users />
    </div>
  );
}

function Signup() {
  const [name, setName] = useState("pizza");

  const [email, setEmail] = useState("ddd");

  const [profileData, setProfileData] = useState([
    { name: "Carlos", email: "carlos@carlos" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfileData((prev) => [...prev, { name, email }]);
    setName("");
    setEmail("");
    console.log("Submit Handled");
  };

  return (
    <div>
      <form>
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="name">Enter your name: </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="name"
            required
          />
        </div>

        <div>
          <label htmlFor="email">Enter your email: </label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
        </div>

        <div className="button">
          <button type="form" onClick={handleSubmit}>
            Signup!
          </button>
        </div>
      </form>
      <button onClick={() => console.log(profileData)}>
        Check Profile Data
      </button>
    </div>
  );
}

function Users() {
  return (
    <div>
      <h2>Users</h2>
    </div>
  );
}

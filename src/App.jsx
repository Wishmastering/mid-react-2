import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [profileData, setProfileData] = useState([
    { name: "Carlos", email: "carlos@carlos" },
    { name: "xxx", email: "xxx@xxx" },
    { name: "alexandra", email: "ale@ale" },
  ]);

  const handleUpdate = (data, name) => {
    setProfileData((prev) =>
      prev.map((item) => {
        if (item.name === name) {
          item.id = data.id;
        }
        return item;
      })
    );
  };

  const handleSubmit = (name, email) => {
    setProfileData((prev) => [...prev, { name, email }]);
    console.log("Submit Handled.");
  };

  return (
    <div className="App">
      <Signup onSubmit={handleSubmit} profileData={profileData} />
      <Users profileData={profileData} handleUpdate={handleUpdate} />
    </div>
  );
}

function Signup({ onSubmit, profileData }) {
  const [name, setName] = useState("pizza");

  const [email, setEmail] = useState("ddd@sss");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, email);
    setEmail("");
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="name">Enter your name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Enter your email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="button">
          <button type="submit">Signup!</button>
        </div>
      </form>
      <button onClick={() => console.log(profileData)}>
        Check Profile Data
      </button>
    </div>
  );
}

function Users({ profileData, handleUpdate }) {
  const fetchUsers = (name, email) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      // Adding method type
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },

      // Adding body or contents to send
      body: JSON.stringify({
        name: name,
        email: email,
      }),

      // Adding headers to the request
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((data) => handleUpdate(data, name));
  };

  return (
    <div>
      <h2>Users:</h2>
      <ul>
        {profileData.map((user, i) => (
          <li key={i} onClick={() => fetchUsers(user.name, user.email)}>
            Users {++i}: {user.name} {user.id && `ID: ${user.id}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

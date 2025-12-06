import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    setJoke(data.value);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app">
      <h1>Random Joke</h1>
      <p>{joke}</p>

      <button onClick={fetchJoke}>Next joke</button>
    </div>
  );
}

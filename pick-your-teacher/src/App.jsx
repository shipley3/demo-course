import React, { useState } from "react";
import "./index.css";

// Final Pick Your Teacher App
export default function App() {
  const teachers = [
    { name: "Ms. Rivera", subject: "Math" },
    { name: "Mr. Chen", subject: "History" },
    { name: "Ms. Thompson", subject: "Science" }
  ];

  const [selected, setSelected] = useState("");

  return (
    <div className="container">
      <h1>Pick Your Teacher</h1>
      <div className="teacher-grid">
        {teachers.map((teacher) => (
          <div
            key={teacher.name}
            className={selected === teacher.name ? "card selected" : "card"}
          >
            <h2>{teacher.name}</h2>
            <p>{teacher.subject}</p>
            <button onClick={() => setSelected(teacher.name)}>
              {selected === teacher.name ? "Selected" : "Select"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

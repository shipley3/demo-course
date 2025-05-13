import React from 'react';


function TeacherCard({ teacher, selected, setSelected }) {
  const isSelected = selected === teacher.name;
  console.log(`Teacher: ${teacher.name}, isSelected: ${isSelected}`);

  return (
    <div className={`card ${isSelected ? "selected" : ""}`}>
      <h2>{teacher.name}</h2>
      <p>{teacher.subject}</p>
       <button onClick={() => setSelected(teacher.name)}>
        {isSelected ? "Selected" : "Select"}
      </button>
    </div>
  );
}

export default TeacherCard;
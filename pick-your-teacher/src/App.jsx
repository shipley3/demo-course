import TeacherCard from './TeacherCard';
import React, { useState } from 'react';
// Declare Variables for teacher name and subject
// const teacher_name = "Gad Allon";
// const teacher_subject = "Business Management";

// Copilot Prompt: Group teacher info into an object
// const teacher = {
//   name: "Gad Allon",
//   subject: "Business Management",
// }


function App() {

  const [selected, setSelected] = useState("");

  const teachers = [
    {
      name: "Gad Allon",
      subject: "Business Management",
    },
    {
      name: "Laura Huang",
      subject: "Entrepreneurship",
    },
  ];

  return (
    <div>
      {teachers.map((teacher) => (
        <TeacherCard
          key={teacher.name}
          teacher ={teacher}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
}

export default App;
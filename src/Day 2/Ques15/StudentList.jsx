/*15.Create a functional component named StudentList that displays a list of student names..
Define an array of student names as a constant within the component.
Use the useMemo hook to memoize the list of student names.
Render the list of student names on the screen.
Include a button that, when clicked, appends a new student name to the list.
*/


import { useState, useMemo } from "react";

const StudentList = ({}) => {
  const [students, setStudents] = useState([]);
  const [newStudentName, setNewStudentName] = useState(""); 

  const studentList = useMemo(() => {
    return (
      <ol>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ol>
    );
  }, [students]); 

  const addStudent = () => {
    const newId = students.length > 0 ? Math.max(...students.map((student) => student.id)) + 1 : 1;
    const newStudent = { id: newId, name: newStudentName }; 
    setStudents([...students, newStudent]); 
    setNewStudentName("");
  };

  return (
    <div>
      {studentList}
      <input 
        type="text" 
        value={newStudentName} 
        onChange={(e) => setNewStudentName(e.target.value)}
      />
      <button onClick={addStudent}>Add Student</button> 
    </div>
  );
};

export default StudentList;

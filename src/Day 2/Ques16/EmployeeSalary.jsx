/*16.Create a functional component named EmployeeSalary that displays the average salary of a list of employees.
Define an array of employee objects, where each object has a name and salary property.
Use the useMemo hook to calculate the average salary of employees.
Ensure that the useMemo hook has a dependency on the employee data so that it recalculates when the employee data changes.
Render the average salary on the screen.
Include a button that, when clicked, updates the employee data with new salaries.
*/

import React, { useMemo, useState } from 'react';

const EmployeeSalary = () => {
  const [data, setData] = useState([]);
  const [newName, setNewName] = useState(''); 
  const [newSalary, setNewSalary] = useState(''); 

  const averageSalary = useMemo(() => {
    const totalSalary = data.reduce((acc, employee) => acc + employee.salary, 0);
    return totalSalary / data.length;
  }, [data]);

  const updateSalaries = () => {
    const newData = data.map(employee => ({
      ...employee,
      salary: Math.floor(Math.random() * 1000) + 1000 
    }));
    setData(newData);
  };

  const addEmployee = () => {
    if (newName && newSalary) {
      const newEmployee = { name: newName, salary: parseFloat(newSalary) };
      setData([...data, newEmployee]);
      setNewName(''); 
      setNewSalary(''); 
    }
  };

  return (
    <div>
      <h2>Average Salary: {averageSalary}</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Salary"
          value={newSalary}
          onChange={(e) => setNewSalary(e.target.value)}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <button onClick={updateSalaries}>Update Salaries</button>
    </div>
  );
};

export default EmployeeSalary;

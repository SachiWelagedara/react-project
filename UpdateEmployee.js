import { useEffect, useState } from "react";
import { updateEmployee } from "../api";

function UpdateEmployee({ employee, onUpdated }) {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (employee) {
      setName(employee.employee_name);
      setSalary(employee.employee_salary);
      setAge(employee.employee_age);
    }
  }, [employee]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateEmployee(employee.id, { name, salary, age });
    onUpdated();
  };

  if (!employee) return null;

  const updateEmploye =() => {
    alert ("Details Update Successfully")
  }

return (
    <form onSubmit={handleSubmit}>
      <h2>Update Employee</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} required />
      <input value={salary} onChange={(e) => setSalary(e.target.value)} required />
      <input value={age} onChange={(e) => setAge(e.target.value)} required />
      <button onClick={updateEmploye}>Update</button>
    </form>
  );

}

  export default UpdateEmployee;
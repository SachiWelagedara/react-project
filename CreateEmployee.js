import { useState } from "react";
import { createEmployee } from "../api";

function CreateEmployee({ onCreated }) {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEmployee({ name, salary, age });
    onCreated();
    setName("");
    setSalary("");
    setAge("");
  };

  const addEmlpyee =() =>{
    alert ("Employee added Successfully");
  }


 

return (
    <form onSubmit={handleSubmit}>
      <h2>Create Employee</h2>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} required />
      <input placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
      <button onClick={addEmlpyee}> Add Employee </button>


    </form>

    
);

}


export default CreateEmployee;
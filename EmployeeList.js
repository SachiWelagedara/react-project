import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../api";


function EmployeeList ({onEdit}) {
    const [employees, setEmployees] = useState([]);

    const fetchEmployees = async () => {
    const response = await getEmployees();
    setEmployees(response.data.data); 
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    fetchEmployees(); 
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

return(
    <div>
        <h2>Employee List</h2>
        <table>
            <th>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </th>
            <tbody>
                {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.employee_name}</td>
              <td>{emp.employee_salary}</td>
              <td>{emp.employee_age}</td>
               <td>
                <button onClick={() => onEdit(emp)}>Edit</button>
                <button onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
              </tr>
               ))}
            </tbody>
        </table>
    </div>
)
}

export default EmployeeList;

import {  useState } from 'react';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';
import UpdateEmployee from './components/UpdateEmployee';


function App() {
  const [refresh, setRefresh] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const refreshData = () => {
    setRefresh(!refresh);
    setSelectedEmployee(null);
  };

  return (
    <div >
      <CreateEmployee onCreated={refreshData} />
      <UpdateEmployee employee={selectedEmployee} onUpdated={refreshData} />
      <EmployeeList key={refresh} onEdit={setSelectedEmployee} />
    </div>
  );
}

export default App;

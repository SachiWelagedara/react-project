import axios from "axios";

const API_URL = "https://dummy.restapiexample.com/api/v1";

export const getEmployees = () => axios.get(`${API_URL}/employees`);
export const createEmployee = (data) => axios.post(`${API_URL}/create`, data);
export const updateEmployee = (id, data) => axios.put(`${API_URL}/update/${id}`, data);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/delete/${id}`);
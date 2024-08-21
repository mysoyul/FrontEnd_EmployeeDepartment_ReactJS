import axios from "axios";

const REST_API_BASE_URL =  import.meta.env.VITE_APIURL; //http://localhost:8080
// const baseURL = import.meta.env.VITE_BASEURL;

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: `${REST_API_BASE_URL}/api`,
});

//'http://localhost:8080/api/employees';

export const listEmployees = () => axiosInstance.get('/employees/departments');

export const createEmployee = (employee) => axiosInstance.post('/employees', employee);

export const getEmployee = (employeeId) => axiosInstance.get(`/employees/${employeeId}` );

export const updateEmployee = (employeeId, employee) => axiosInstance.put(`/employees/${employeeId}`, employee);

export const deleteEmployee = (employeeId) => axiosInstance.delete(`/employees/${employeeId}`);
import axios from "axios";

//const REST_API_BASE_URL =  import.meta.env.VITE_APIURL; //http://localhost:8080

//const REST_API_URL = `${REST_API_BASE_URL}/api/employees`
// const REST_API_URL2 = `${REST_API_BASE_URL}/api/employees/departments`
// console.log(`REST_API_URL2 = ${REST_API_URL2}`)
// const REST_API_URL = `${REST_API_BASE_URL}/api/employees`
// console.log(`REST_API_URL = ${REST_API_URL}`)

const baseURL = import.meta.env.VITE_BASEURL;

export const axiosInstance = axios.create({
  baseURL,
});

//'http://localhost:8080/api/employees';

export const listEmployees = () => axiosInstance.get('/employees/departments');

export const createEmployee = (employee) => axiosInstance.post('/employees', employee);

export const getEmployee = (employeeId) => axiosInstance.get(`/employees/${employeeId}` );

export const updateEmployee = (employeeId, employee) => axiosInstance.put(`/employees/${employeeId}`, employee);

export const deleteEmployee = (employeeId) => axiosInstance.delete(`/employees/${employeeId}`);
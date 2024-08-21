import axios from 'axios'

const REST_API_BASE_URL =  import.meta.env.VITE_APIURL;

//const baseURL = import.meta.env.VITE_BASEURL;
const baseURL = `${REST_API_BASE_URL}/api`
export const axiosInstance = axios.create({
  baseURL,
});

//const DEPARTMENT_REST_API_URL = `${REST_API_BASE_URL}/api/departments`
//const DEPARTMENT_REST_API_URL = `/api/departments`
//console.log(`DEPARTMENT_REST_API_URL = ${DEPARTMENT_REST_API_URL}`)
//'http://localhost:8080/api/departments'

export const getAllDepartments = () => axiosInstance.get('/departments');

export const createDepartment = (department) => axiosInstance.post('/departments', department);

export const getDepartmentById = (departmentId) => axiosInstance.get('/departments' + '/' + departmentId);

export const updateDepartment = (departmentId, department) => axiosInstance.put('/departments' + '/' + departmentId, department);

export const deleteDepartment = (departmentId) => axiosInstance.delete('/departments' + '/' + departmentId);
import axios from "axios";
import ApiConfig from "./ApiConfig";

function getStudents( ) {
    const res = axios.get(ApiConfig.baseUrl+'/student');
    return res;
}

function getStudent(id){
    const res = axios.get(ApiConfig.baseUrl+'/student/'+id);
    return res;

}

function addStudent(data){
    const res = axios.post(ApiConfig.baseUrl+'/student',data);
    return res;

}

function updateStudent(id,data){
    const res = axios.put(ApiConfig.baseUrl+'/student/'+id,data);
    return res;

}

function deleteStudent(id) {
    
    const res = axios.delete(ApiConfig.baseUrl+'/student/'+id);
    return res;

}

export const StudentService = {addStudent,getStudent,getStudents,updateStudent,deleteStudent};
import axios from "axios";
import ApiConfig from "./ApiConfig";

function getProfessor(id) {
    const res =  axios.get(ApiConfig.baseUrl+'/professor/'+id);
    return res;
}

function getProfessors( ) {
   const  res =  axios.get(ApiConfig.baseUrl+'/professor');
    return res;
}

function addprofessor(data){
    const res =  axios.post(ApiConfig.baseUrl+'/professor',data);
    return res;
}

function updateprofessor(id,data){
    const res =  axios.put(ApiConfig.baseUrl+'/professor/'+id,data);
    return res;
}

function deleteprofessor(id){
    const res =  axios.delete(ApiConfig.baseUrl+'/professor/'+id);
    return res;
}

function professorAllCourses(id) {
    const  res =  axios.get(ApiConfig.baseUrl+'/professor/courses/'+id);
    return res;
}


export const ProfessorService = {getProfessor,getProfessors,addprofessor,updateprofessor,deleteprofessor,professorAllCourses};

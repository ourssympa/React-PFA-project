import axios from "axios";
import ApiConfig from "./ApiConfig";

function addCourse(data) {
    const res = axios.post(ApiConfig.baseUrl + "/course",data);
  return res;
}

function getCourses( ) {
  const res = axios.get(ApiConfig.baseUrl+"/course");
  return res; 
}
function getCourse(id) {
  const res = axios.get(ApiConfig.baseUrl+"/course/"+id);
  return res; 
}

function updateCourse(id,data) {
  const res = axios.put(ApiConfig.baseUrl+"/course/"+id,data);
  return res;
  
}
export const CoursService = {addCourse,getCourses,getCourse,updateCourse};
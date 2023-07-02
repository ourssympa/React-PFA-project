import axios from "axios";
import ApiConfig from "./ApiConfig";

function addCourse(data) {
    const res = axios.post(ApiConfig.baseUrl + "/course",data);
  return res;
}

export const CoursService = {addCourse};
import axios from "axios";
import ApiConfig from "./ApiConfig";

function getOptions() {
  const res = axios.get(ApiConfig.baseUrl + "/option");
  return res;
}

function getOption(id) {
    
  const res = axios
    .get(ApiConfig.baseUrl + "/option/" + id);
  
    return res;
}

function addOption(data){

  const res = axios.post(ApiConfig.baseUrl+'/option',data);
      return res; 
}

function deleteOption(id){

  const res = axios.delete(ApiConfig.baseUrl+'/option/'+id);
      return res; 
}

function updateOption(id,data) {
  const res = axios.put(ApiConfig.baseUrl+'/option/'+id,data);
      return res; 
}
export const OptionService = { getOptions,getOption,addOption,deleteOption,updateOption};

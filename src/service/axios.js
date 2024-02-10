import axios from "axios";
import { API } from "../constant/config";
class Axios{
    get(url){
        return axios.get(API+url);
    }
    post(url, data){
        return axios.post(API+url, data);
    }
    put(){
        
    }
    destroy(){
        
    }
}
export default Axios;
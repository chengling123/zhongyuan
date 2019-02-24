import {fetch} from "./ajax"
let BaseUrl="http://192.168.11.215:8099"
export default {
    login(params){
        return fetch(`${BaseUrl}/mobile/login`,params,"post")
    },
    mine(params){
        return fetch(`${BaseUrl}/mobile/user/profile`,params,"get")
    },
    task(params){
        return fetch(`${BaseUrl}/mobile/addMatter`,params,"post")
    }
}
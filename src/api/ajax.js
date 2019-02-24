import axios from "axios"
import qs from "qs"
export function fetch(url,params={},type){
    return new Promise((resolve,reject)=>{
        if(type=="post"){
            axios.post(url,qs.stringify(params)).then(response=>{
                resolve(response.data)
            },err=>{
                reject(err);
            }).catch(error=>{
                reject(error)
            })
        }else{
            axios.get(url,{params}).then(response=>{
                resolve(response.data)
            },err=>{
                reject(err);
            }).catch(error=>{
                reject(error);
            })
        }
    })
}
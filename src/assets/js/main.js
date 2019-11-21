import $http from "superagent";
import  unit from './common';
import { Toast } from "vant"
import route from "vue-router"
export default {
    install(Vue){
        Vue.prototype.$Ajax=({
                url = '',       //请求
                data = {},      //data
                type = "post",  // 默认post
                contentType="application/x-www-form-urlencoded",
                hastoken=true,
                success = () => {},
                fail = () => {},
                complete = () => {},
            }=parameter)=>{
              let urlStr = url+JSON.stringify(data) + type,//请求拼接
                  fieldurls=[];
              let isContinue = fieldurls.some(v=>{
                return v == urlStr
              })
              if(isContinue){//拦截重复请求
                return false
              }else{//允许请求
                fieldurls.push(urlStr)
              }
              if(hastoken && !localStorage.getItem("token")){
                return false;
              }
              let p = new Promise((resolve, reject) => {
                  let $put;
                  let newdata=hastoken?Object.assign({uid:localStorage.getItem("token")},data):data;
                  ($put = $http.patch(unit.baseUrl+url).set("Content-Type", contentType).send(newdata)) && type == "patch" || 
                  ($put = $http.get(unit.baseUrl+url).set("Content-Type", contentType).send(newdata)) && type == "get" ||
                  ($put = $http.post(unit.baseUrl+url).set("Content-Type", contentType).send(newdata)) && type == "post"
                  $put.end((err, res) => {
                      let data=res.body;
                      fieldurls.pop()       //请求返回 删去该url
                      if(data.returnNo=="0000"){
                        success(data.content)
                        resolve()
                      }
                      else{
                        Toast.fail(data.returnInfo);
                        fail(data)
                        resolve();
                      }
               
                  });
              })
              return p;
        };
        Vue.prototype.$common=unit;
        
    },
    
}
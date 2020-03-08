import {config} from "./config.js";
import Vue from 'vue'
class Request{
	constructor(arg) {
	    
	}
	request({path,method="GET",data={},isMsg=false}={}){
		const header = {
		        'XX-Wxapp-AppId': config.appid,
		        'XX-Device-Type': 'wxapp',
		        'SERVERID': config.serverid,
		        'XX-Token': "",
		        'OPENID': "",
		        'XX-Device-Party': ""
		      };
		return new Promise((reslove,reject)=>{
			uni.request({
				url:`${config.apiHost}${path}`,
				data,
				method,
				header,
				success(res){
					let data=res.data
					if(res.statusCode===2||data.code===1){
						if(isMsg){
							 reslove(data);
						}else{
							 reslove(data.data);
						};
						return 
					};
					reject()
				},
				fail:reject
			})
		});
	}
};

let request=new Request().request;
Vue.prototype.request=request;
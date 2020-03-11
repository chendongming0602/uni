import {config} from "./config.js";
import Vue from 'vue';
class Request{
	constructor(arg) {
	    
	}
	request({path,method="GET",data={},isMsg=false}={}){
    // uni.setStorageSync('storage_key', 'hello');
    // return console.log(uni.getStorageSync('storage_key'))
		const header = {
		        'XX-Wxapp-AppId': config.appid,
		        'XX-Device-Type': 'wxapp',
		        'SERVERID': config.serverid,
		        'XX-Token': uni.getStorageSync('token'),
		        'OPENID': uni.getStorageSync('openid'),
		        'XX-Device-Party': uni.getStorageSync('party')
		      };
		return  new Promise((reslove,reject)=>{
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
					reject(res)
				},
				fail:reject
			})
		});
	}
};

let request=new Request().request;
Vue.prototype.request=request;
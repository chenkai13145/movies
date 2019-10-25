import {baseUrl} from '../common/index.js'
export function axios(data){
   return new Promise((resolve,reject)=>{
	   if(data.type!=undefined&&data.type==='played'){
		   uni.request({
		   	url:baseUrl+data.url+'?qq=1263455889',
		   	method:data.method,
		   	data:data.datas,
		   	success:(res)=>{
		   		resolve(res)
		   	},
		   	fail:(err)=>{
		   		reject(err)
		   	}		
		   })
		   return;
	   }
	   let str=''
	   if(data.data){
		   for(let key in data.data){
			   str+=`&${key}=${data.data[key]===undefined?'':data.data[key]}`
		   }
	   }
		 uni.request({
		 	url:baseUrl+data.url+(data.url.indexOf('?')!==-1?'&qq=1263455889':'?qq=1263455889')+(data.data?str:''),
		 	method:data.method,
			data:data.datas,
		 	success:(res)=>{
		 		resolve(res)
		 	},
		 	fail:(err)=>{
		 		reject(err)
		 	}		
		 })
	})
}
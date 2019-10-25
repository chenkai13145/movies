<template>
	<view>
		<view class="logins">
			<image class="login_img" src='../../static/icos/default-face.png'></image>
		</view>
		<view class="from_login">
			<form @submit="loginReg">
				<input type="text" placeholder="用户名" style="margin-top: 20px;" class="input_login" name="username" />
				<input password="true" placeholder="密码" class="input_login" name="pad"/>
				<button form-type="submit">登录/注册</button>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			loginReg(e){
				let username=e.detail.value.username
				let password=e.detail.value.pad
				let obj={username,password}
				this.axios({url:'/user/registOrLogin',method:'POST',type:'played',datas:obj}).then(res=>{
					console.log(res)
					if(res.data.status===200){
						uni.setStorageSync('getUserInfo',res.data.data)
								uni.showToast({
									title:'登录成功'
								})
								setTimeout(()=>{
									uni.switchTab({
										url:'../my/my'
									})
								},2000)
					}
				})
			}
		}
	}
</script>

<style>
@import url("./loginReg.css");
</style>

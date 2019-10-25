<template>
	<view>
			  <view class="me_top">
			  	 <view class="login_me" v-if="loging">
					 <view class="me_name">
					  <image src='../../static/icos/default-face.png' class="me_img"></image>
					  <view  class="me_loginreg" @click="loginRegister">登录/注册</view>
					 </view>
				 </view>
			  	 <view class="login_me" v-else>
					  <view class="me_name">
					  <image class="me_img" :src='getuserinfo.faceImage'></image>
					  <view class="me_loginreg">
						  <view>
						  	{{getuserinfo.username}}
						  </view>
						  <view>账号:{{getuserinfo.nickname}}</view>
					  </view>
					  </view>
					  <view style="margin-right: 20upx; align-self: center;" @click="naTagTo">
						  <image class="set_img" src="../../static/icos/settings.png"></image>
					  </view>
				</view>
			  </view>
			 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loging:true,
				getuserinfo:{}
			}
		},
		onShow(){
			console.log(this.getuserinfo)
			this.getuserinfo=uni.getStorageSync('getUserInfo')
			console.log(this.getuserinfo)
			if(!this.getuserinfo){
				this.loging=true
				return;
			}
			this.loging=false
		},
		methods: {
			naTagTo(){
				uni.navigateTo({
					url:'../myinfo/myinfo'
				})
			},
			loginRegister(){
				uni.navigateTo({
					url:'../loginReg/loginReg'
				})
			}
		}
	}
</script>

<style>
@import url("./my.css");
</style>

<template>
	<view style="padding: 0 20upx;">
		<!-- 头像 -->
		<view v-if="types==='头像:'">
			<image :src="userinfo.faceImage"></image>
		</view>
		<!-- 昵称 -->
		<view style="display: flex; padding: 20upx;" v-if="types==='昵称:'">
			<label style="align-self: center;">昵称:</label>
			<input placeholder="请输入昵称" v-model="name" style="border: crimson 1px solid; border-radius: 4px; width: 70%; padding: 4px; align-self: center;"/>
		</view>
		<!-- 年龄 -->
		<view style="display: flex;" v-if="types==='出生日期:'">
	        <label style="align-self: center;">出生日期:</label>
			<picker mode="date" @change="bindPickerChange">
			      <view  class="uni-input" style="width: 500upx;">{{userinfo.birthday}}</view>
			</picker>
		</view>
		<!-- 性别 -->
		<view v-if="types==='性别:'">
			<radio-group @change="radioChange">
				<view style="border-bottom: 1px #C8C7CC solid;padding: 4px 0;">
			        <radio id="nan" :checked="userinfo.sex==='男'" value="男"/><label for="nan">男</label>
				</view>
				<view style="border-bottom: 1px #C8C7CC solid;padding: 4px 0;">
			        <radio id="nv" :checked="userinfo.sex==='女'" value="女"/><label for="nv">女</label> 
				</view>
			</radio-group>
		</view>
	    <button style="background-color:green; color:#FFFFFF; position: fixed; bottom: 0; width: 720upx; margin-bottom: 10px;">确认修改</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				types:'',
				name:'岑空i啊',
				userinfo:{}
			}
		},
		onLoad(options){
			 this.types=options.type
			 uni.setNavigationBarTitle({
			 	title:this.types.replace(':','')
			 })
			 this.userinfo=uni.getStorageSync('getUserInfo')
			 this.name=this.userinfo.username
		},
		methods: {
		 radioChange(e){
			 let sex=e.detail.value
		 },
		 bindPickerChange(e) {
		     this.userinfo.birthday=e.target.value
		  },
		}
	}
</script>

<style>
.uni-input{
	border-radius: 4px;
	border: 1px salmon solid;
	width: 70%;
}
</style>

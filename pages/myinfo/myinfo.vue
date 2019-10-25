<template>
	<view style="padding: 0px 20upx;">
		<view class="info_content">
		    <view class="you_info"  v-for="(item,index) in datas" :key="index" @click="pathTo(item.lable)">
				<label>{{item.lable}}</label>
				<view class="left_inf">
				<view v-if="item.key!=='faceImage'" style="margin-right: 10px;"> {{item.value}}</view>
				<image style="width: 30px; height: 30px; margin-right: 10px;" v-else :src="item.value"></image>
				<image class="info_my" src="../../static/icos/left-arrow.png"></image>
				</view>
			</view>
			<view class="info_bottom">
				<button @click="clear">清理缓存</button>
				<button @click="ligonout">退出登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datas:[
					{
						lable:'头像:',
						value:'文化的',
						key:'faceImage'
					},
					{
						lable:'昵称:',
						value:'sjhhd',
						key:'nickname'
					},
					{
						lable:'性别:',
						value:'男',
						key:'sex'
					},
					{
						lable:'出生日期:',
						value:'66',
						key:'birthday'
					}
				],
				userinfo:{}
			}
		},
		onLoad(){
			uni.setNavigationBarTitle({
				title:'我的'
			})
			var that=this
			this.getuserinfo=uni.getStorageSync('getUserInfo')
					that.datas=that.datas.map(item=>{
						item.value=this.getuserinfo[item.key]
						return item
				
			 })
		},
		methods: {
			pathTo(type){
			   uni.navigateTo({
			   	url:'../../component/myput/myput?type='+type
			   })
			},
			clear(){
				uni.clearStorageSync('getUserInfo')
				uni.switchTab({
					url:'../index/index'
				})
			},
			ligonout(){
				let userId=this.userinfo.id
				this.axios({url:'/user/logout?',method:'POST',data:{userId}}).then(res=>{
					console.log(res)
					if(res.data.status===200){
						uni.showToast({
							title:'退出成功'
						})
						setTimeout(()=>{
							 this.clear()
						},1200)
					}
				})
			}
		}
	}
</script>

<style>
@import url("./myinfo.css");
</style>

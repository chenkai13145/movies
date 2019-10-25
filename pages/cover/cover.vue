<template>
	<view class="black">
		<image @longpress="saveFn(cover)" class="img_cover" :src="cover" mode="widthFix"></image>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cover:''
			}
		},
		onLoad(options){
			this.cover=options.img
		},
		methods: {
			saveFn(cover){
				uni.showActionSheet({
					itemList:['下载图片'],
					success: (res) => {
						if(res.tapIndex===0){
							uni.showLoading({
								title:"保存中..."
							})
							uni.downloadFile({
								url:cover,
								success:(res)=>{
									uni.saveImageToPhotosAlbum({
										filePath:res.tempFilePath,
										success: (res) => {
											console.log(res)
										},
										complete: () => {
											uni.hideLoading()
											uni.showToast({
												title:'保存成功',
												duration:3000
											})
										}
									})
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
.black{
	width: 100%;
	height:100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #000;
	position: fixed;
	
}
.img_cover{
	align-self: center;
}
</style>

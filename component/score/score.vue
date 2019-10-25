<template>
	<view class="score">
		<block v-for="(item,index) in yellow">
			<image class="score_img" style="width: 12px;height: 12px;" src="/static/icos/star-yellow.png" mode="aspectFill"></image>
		</block>
		<block v-for="(item,index) in gray">
			<image class="score_img" style="width: 12px;height: 12px;" src="/static/icos/star-gray.png" mode="aspectFill"></image>
		</block>
		<view v-if="showgread!=0">{{scoregrad}}</view>
	</view>
</template>

<script>
	export default {
		props:{
			scoregrad:{
				type:Number
			},
			showgread:{
				type:String
			}
		},
		data() {
			return {
				yellow:0,
				gray:5,
			}
		},
		onLoad(){
			 
		},
		created(){
			 this.yellow=parseInt(this.scoregrad/2)
			 this.gray=5-this.yellow
		},
		computed:{
			scoresFn(){
				return parseInt(this.scoregrad/2) 
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.score{
	display: flex;
}
.score_img{
	width:12px;
	height: 12px;
	display: flex;
	flex-direction: column;
	align-self: center;
}
</style>

<template>
	<view>
		<view class="search_top">
                    <image class="search_icon" src="/static/icos/search.png" mode="aspectFill"></image>
			 	<input type="text" maxlength="15" v-model="keywords" @confirm="serarchFn" focus="true" confirm-type="search" class="search_input" placeholder="搜索预告片"/>
		</view>
		<view class="serach_content">
			<block v-for="(item,index) in searcharr" >
				<navigator :url="'/pages/movieinfo/movieinfo?title='+item.name+'&id='+item.id">
				<image :src="item.poster" mode="aspectFill" class="poster"></image>
				</navigator>
			</block>
		
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searcharr:[],
				keywords:'',
				page:1,
				pageSize:9,
				total:''
			}
		},
		onLoad(){
			this.requestlist()
		},
		//下拉
		onPullDownRefresh(){
			this.keywords='',
			this.page=1,
			this.pageSize=9
			this.requestlist()
		},
		//上拉
		onReachBottom(){
			if(this.pageSize>this.total){
				return;
			}
			this.pageSize=Number(this.pageSize)+9;
			this.requestlist()
		},
		methods: {
			serarchFn(){
				this.page=1
				this.pageSize=9
				this.requestlist()
			},
			requestlist(){
				uni.showLoading({
					title:'加载中...',
					mask:true
				})
				let datas={keywords:this.keywords,page:this.page,pageSize:this.pageSize}
				this.axios({url:'/search/list',method:'POST',data:datas}).then(res=>{
					console.log(res)
					if(res.data.status===200){
						this.searcharr=res.data.data.rows
						this.total=res.data.data.records
					}
					uni.hideLoading()
					uni.stopPullDownRefresh()
				})
			}
		}
	}
</script>

<style>
@import url("./search.css");
</style>

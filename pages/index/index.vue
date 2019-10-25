<template>
	<view>
		<!-- 轮播图 -->
		<view class="tu">
			 <swiper indicator-color="#ffffff" class="tu_img" indicator-active-color='red' autoplay="true" interval='3000'>
		     <swiper-item v-for="(item,index) in swiperimg" class="tu_img" :key='index'>
				 <navigator :url="'/pages/movieinfo/movieinfo?title=lunbo&id='+item.movieId">
		         <image class="tu_img" :src="item.image" mode="aspectFill"></image>
				 </navigator>
		     </swiper-item>
			</swiper>
		</view>
		<!-- 热销费雷 -->
		<view class="scorl_hot">
			<image class="hot_icon" src="/static/icos/hot.png"></image>
			<text style="font-weight: bold; font-size: 36upx;">热销分类</text>
		</view>
		<scroll-view scroll-x="true">
			   <view  class="hot_bot_img">
			   <view class="hot_img" v-for="(item,index) in hotimg"  :key="index">
				   <navigator :url="'/pages/movieinfo/movieinfo?title='+item.name+'&id='+item.id">
				   <image :src="item.poster" mode="aspectFill"></image>
				   </navigator>
				   <text class="hot_text">{{item.name}}</text>
				   <score :scoregrad="item.score" showgread="1"></score>
			   </view>
			   </view>
		</scroll-view>
		<!-- 热门预告 -->
		<view class="scorl_hot">
			<image class="hot_icon" src="/static/icos/interest.png"></image>
			<text style="font-weight: bold; font-size: 36upx;">热门预告</text>
		</view>
		<view class="videm">
				<block v-for="(item,index) in videlist" :key='index'>
					<view class="myVideo">
					<video @play="myisplay(item.id)" :id="item.id" style="width: 100%;height: 100%;" :src="item.trailer" @error="videoErrorCallback"></video>
					</view>
				</block>
		</view>
	     <!-- 猜你喜欢 -->
		 <view class="scorl_hot">
		 	<image class="hot_icon" src="/static/icos/guess-u-like.png"></image>
		 	<text style="font-weight: bold; font-size: 36upx;">猜你喜欢</text>
		 </view>
		 <view class="like_list"  v-if='show'>
			 <view class="like" v-for="(item,index) in likelist" :key="index">
				 <navigator :url="'/pages/movieinfo/movieinfo?title='+item.name+'&id='+item.id">
				 <image class="like_img" :src="item.poster" mode="aspectFill" ></image>
				 </navigator>
				 <view class="like_text">
					 <view class="like_title">{{item.name}}</view>
					 <score :scoregrad="item.score" showgread="1"></score>
					 <view>{{item.basicInfo}}</view>
					 <view>{{item.releaseDate}}</view>
				 </view>
				 <view class="dianzan">
					 <view class="dianzan_jia">
					 <image class="dianzan_yi" src="/static/icos/praise.png"></image>
					 <view class="dianzan_text">赞一下</view>
					 </view>
				 </view>
			 </view>
		 </view>
	</view>
</template>

<script>
	import score from '../../component/score/score'
	export default {
		components:{
			score
		},
		data() {
			return {
				title: 'Hello',
				swiperimg:[],
				hotimg:[],
				videlist:[],
				likelist:[],
				show:false
			}
		},
		//页面加载（只会加载一次）
		onLoad() {
			// 获取轮播
           this.axios({url:'/index/carousel/list',method:'POST'}).then(res=>{
			   if(res.data.status===200){
				   
				   this.swiperimg=res.data.data
			   }
		   })
		   .catch(err=>{console.log(err)})
		   // 获取热销费雷
		   this.axios({url:'/index/movie/hot?type=superhero',method:"POST"}).then(res=>{
			 
			   if(res.data.status===200){
				   this.hotimg=res.data.data
			   }
		   })
		   // 获取视频
		   this.axios({url:'/index/movie/hot?type=trailer',method:'POST'}).then(res=>{
			   if(res.data.status===200){
				   this.videlist=res.data.data
			   }
		   })
		   //获取喜欢
		   this.requestlist()
		   
		},
		//页面下拉
		onPullDownRefresh() {
			this.requestlist()
		},
		
		//页面影藏
		onHide(){
			for(var i=0;i<this.videlist.length;i++){
			    uni.createVideoContext(this.videlist[i].id).pause()
			}
		},
		methods: {
            videoErrorCallback(){
				console.log('erro')
			},
			//视频播放
			myisplay(index){
				for(var i=0;i<this.videlist.length;i++){
					if(index!==this.videlist[i].id){
						 uni.createVideoContext(this.videlist[i].id).pause()
					}
				}
			    uni.createVideoContext(index)	
			},
			requestlist(){
				uni.showLoading({
					title:'正在加载....',
					mask:true
				})
				this.show=false
				this.axios({url:'/index/guessULike',method:'POST'}).then(res=>{
							   if(res.data.status===200){
								   this.likelist=res.data.data
							   }
							   this.show=true
							   uni.stopPullDownRefresh()
							   uni.hideLoading()
				})
			}
		}
	}
</script>

<style>
	.tu{
		width: 100%;
		height: 440upx;
	 }
	 .tu_img{
		 width: 100%;
		 height: 440upx;
	 }
	.content {
		display: flex;
		flex-direction: column;
	
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.scorl_hot{
		margin-top: 10px;
		margin-left: 10px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}
	.hot_bot_img{
		width: 100%;
		white-space: nowrap;
		margin-top: 6px;
	}
	.hot_img{
	 margin-left: 10px;
	 display: inline-block;
	}
	.hot_img image{
		width: 220upx;
		height: 280upx;
	}
	.hot_text{
		width: 220upx;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-weight: bold;
        font-size: 36upx;
	}
	//
	.videm{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.myVideo{
		display: inline-block;
        margin-left: 8px;
		margin-top: 10px;
		width: 340upx;
		height: 220upx;;
	}
    .like_list{
		 display: flex;
		 flex-direction: column;
		 margin-left: 10px;
	 }
	.like{
		display: flex;
		flex-direction: row;
		height: 300upx;
		margin-top: 10px;
		justify-content:space-between;
	}
	.hot_icon{
		width: 50upx;
		height: 50upx;
	}
	.like_img{
		width: 220upx;
		height: 300upx;
		border-radius: 6px;
	}
	.like_text{
		width: 340upx;	
		height: 100%;
		font-size: 34upx;
		}
	.like_title{
		font-weight: bold;
	}
	.dianzan{
		width: 150upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		color:yellow;
		border-left: #C0C0C0 dashed 2rpx;
		
	}
	.dianzan_jia{
		display: flex;
		flex-direction:column;
	}
	.dianzan_text,.dianzan_yi{
		align-self: center;
	}
	.dianzan_yi{
		width: 40px;
		height: 40px;
	}
</style>

<template>
	<view>
		<!-- 视频 -->
			  <video :id="movieinfos.id" class="info_video" autoplay="true" :src="movieinfos.trailer"></video>
		<!-- 图片右边杰少 -->
		<view class="info_img">
		     <image class="info_img_icon" @click="navTo(movieinfos.cover)" mode="aspectFill" :src="movieinfos.cover"></image>
			<view class="info_img_text">
				<view style="font-size: 18px; font-weight: bold; color: #000;">{{movieinfos.name}}</view>
				<view style="white-space: nowrap; text-overflow: ellipsis; overflow: hidden;">{{movieinfos.basicInfo}}</view>
				<view>{{movieinfos.originalName}}</view>
				<view>{{movieinfos.totalTime}}</view>
				<view>{{movieinfos.releaseDate}}</view>
				<!-- 评分 -->
				<view class="score_info" v-if="show">
					<view>
						<view style="color: #555555;">综合评分:</view>
						<view>{{movieinfos.score}}</view>
					</view>
					<view class="graden">
						<score :scoregrad="movieinfos.score" showgread="1"></score>
						<view>{{movieinfos.prisedCounts}}人点赞</view>
					</view>
				</view>
				
			</view>
		</view>
	    <!-- 分割线 -->
		<lines></lines>
		<!-- 剧情介绍 -->
		<view class="info_casof">
			<view class="info_titl">剧情介绍</view>
			<view>
				{{movieinfos.plotDesc}}
			</view>
		</view>
		<!-- 演职人员 -->
		<view class="info_casof roleperson">
			<view class="info_titl">演职人员</view>
			<scroll-view scroll-x="true">
				     <view class="role">
			                <view class="person" v-for="(item,index) in actor" :key="index">
								<image @click="yulanper(index)" class="person_img" :src="item.photo" mode="aspectFill"></image>
								<view class="person_text">{{item.actName==='导演'?item.actName:item.name}}</view>
							</view> 
							
					 </view>
			</scroll-view>
		</view>
		<!-- 剧照 -->
		<view class="pictrue info_casof">
			<view class="info_titl">剧照</view>
			<scroll-view scroll-x="true">
				     <view class="role">
			                <view class="person" v-for="(item,index) in pictrues">
								<image @click="yulan(index)" class="person_img" mode="aspectFill" :src="item"></image>
							</view> 
					 </view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import lines from '../../component/line/line'
	import score from '../../component/score/score'
	export default {
		components:{
			lines,
			score
		},
		data() {
			return {
				movieinfos:{},
				show:false,
				actor:[],//演员
                pictrues:[],	//剧照
				title:''
			}
		},
		
		onLoad(options){
			this.title=options.title
			uni.setNavigationBarTitle({
				title:options.title
			})
			this.show=false
			this.axios({url:'/search/trailer/'+options.id+'/',method:'POST'}).then(res=>{
				console.log(res)
				if(res.data.status===200){
					this.movieinfos=res.data.data
					this.pictrues=JSON.parse(res.data.data.plotPics)
					this.show=true
				}
			})
			this.axios({url:'/search/staff/'+options.id+'/1',method:'POST'}).then(res=>{
				console.log(res)
				if(res.data.status===200){
					this.actor=res.data.data
					this.axios({url:'/search/staff/'+options.id+'/2',method:'POST'}).then(res=>{
						if(res.data.status===200){
							this.actor=[...this.actor,...res.data.data]
						}
					})
				}
			})
		},
		onHide(){
			if(this.movieinfos.id!==undefined){
				uni.createVideoContext(this.movieinfos.id).pause()
			}
		},
		onShow(){
			if(this.movieinfos.id!==undefined){
				uni.createVideoContext(this.movieinfos.id).play()
			}
		},
		//监听导航栏按钮
		onNavigationBarButtonTap(e){
			if(e.type==='share'){
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 0,
				    href: "http://www.imovietrailer.com/#/pages/movie/movie?title="+this.title+"&id="+this.movieinfos.id,
				    title: this.movieinfos.name,
				    summary: this.movieinfos.plotDesc,
				    imageUrl: this.movieinfos.cover,
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				})
			}
		},
		//支支持小程序
		onShareAppMessage(){
			return{
				title:this.movieinfos.name,
				path:'/pages/movieinfo/movieinfo?title='+this.title+'&id='+this.movieinfos.id
			}
		},
		methods: {
			//剧照
			yulan(idnex){
				uni.previewImage({
					urls:this.pictrues,
					current:idnex
				})
			},
			//演职人员
			yulanper(index){
				let arr=this.actor.map(item=>{
					return item.photo
				})
				uni.previewImage({
					urls:arr,
					current:index
				})
			},
			//跳转
			navTo(baseurl){
				uni.navigateTo({
					url:'../cover/cover?img='+baseurl
				})
			}
		}
	}
</script>

<style>
@import url("./movieinfo.css");
</style>

<template>
	<view class="tab1">
		<Scorll></Scorll>
		第一个
		<view class="scr"  v-bind:style="{left:top+'rpx'}">
			测试
		</view>
	</view>
</template>

<script>
	import Scorll from "../../component/scorll.vue"
	export default{
		data(){
			return {
				top:50,
				left:40
			}
		},
		created() {
			
		},
		components:{
			Scorll
		}
	}
</script>

<style>
	.scr{
		padding: 50rpx;
		background: #007AFF;
		width: 50rpx;
		position: relative;
	}
</style>

<template>
	<view @click="detailE">
      是我啊
	</view>
</template>

<script>
  let APP=getApp();
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			detailE(){
        APP.globalData.name=10;
        console.log(APP)
      }
		}
	}
</script>

<style>

</style>

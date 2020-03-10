<template>
	<view class="" >
		第二个
    <button type="primary" open-type="getUserInfo" @getuserinfo="accessPermission">授权</button>
	</view>
  
</template>

<script>
  let APP=getApp();
  export default{
    data(){
      return {}
    },
    methods:{
      tiao(){
        console.log(APP)
        this.accessPermission()
        // uni.navigateTo({
        //     url: '/pages/detali/detail'
        // });
      },
      accessPermission() {    
        var _this=this;
        // uni.getSetting({
        //     success(res) {
        //         // 判断scope后对应的scope.userInfo是否授权
        //         if (res.authSetting['scope.userInfo']) {
        //             // 如果已经授权,则执行后续操作
        //             uni.getSetting({
        //                 success(res) {
        //                     console.log(res);
        //                 }
        //             })
        //         } else if (!res.authSetting['scope.userInfo']) {
        //             // 如果没有授权则进行提前授权--进入页面时弹出
        //             uni.authorize({
        //                 // 配置授权选项--微信步数
        //                 scope:'scope.userInfo',
        //                 success(res){
        //                     // 授权成功后可以直接获取用户相关信息
        //                     console.log(res);
        //                     console.log("授权成功")
        //                 },
        //                 fail(err){
        //                     // 授权失败时,等待用户手动点击授权
        //                     console.log("授权失败",err)
        //                 }
        //             })
        //         };
        //     }
        // })
      },
    }
  }
</script>

<style>
</style>

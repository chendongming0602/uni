<template>
	<view>
     <!-- <block wx:if="{{showPhoneBox}}">
        <phone-box bind:closePhoneBox="closePhoneBox"></phone-box>
      </block> -->
      <PhoneBox></PhoneBox>
      <view class="head-line"></view>
      <view class="title">你是</view>
      <view class="select-sex">
        <view class="sex-box" data-sex="man" bindtap="sexHandler">
          <image class="man-icon" src="https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/lovers_magpie%20/vipApply/man-icon.png"></image>
          <view class="sex">男生</view>
        </view>
        <view class="sex-box" data-sex="women" bindtap="sexHandler">
          <image class="women-icon" src="https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/lovers_magpie%20/vipApply/women-icon.png"></image>
          <view class="sex">女生</view>
        </view>
      </view>
      <view class="line-center">
        <view class="desc">
          <view class="desc-item">
            <image src="https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/lovers_magpie%20/active_apply_eye.png"></image>
            <view class="desc-content">
              <view class="desc-title">数据保密</view>
              <view class="desc-desc">仅供聚蜜囍后台筛选活动名额所用</view>
            </view>
          </view>
          <view class="desc-item">
            <image src="https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/lovers_magpie%20/active_apply_filter.png"></image>
            <view class="desc-content">
              <view class="desc-title">严格筛选</view>
              <view class="desc-desc">严格核实筛选参与活动人员</view>
            </view>
          </view>
          <view class="desc-item">
            <image src="https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/lovers_magpie%20/active_apply_eye.png"></image>
            <view class="desc-content">
              <view class="desc-title">会员优先</view>
              <view class="desc-desc">聚蜜囍会员优先入选</view>
            </view>
          </view>
        </view>
      </view>

	</view>
</template>

<script>
  import PhoneBox from "../phoneBox/phoneBox.vue"
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
    components:{
      PhoneBox
    }
	}
</script>

<style scoped>
  .head-line {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 8rpx;
    background: #f3f7fa;
    font-size: 0;
  }
  
  .head-line::after {
    content: ' ';
    display: block;
    width: 16vw;
    height: 8rpx;
    background: #d1b693;
  }
  
  .title {
    margin-top: 167rpx;
    text-align: center;
    font-size: 36rpx;
    color: #333;
  }
  
  .select-sex {
    display: flex;
    justify-content: center;
    margin-top: 74rpx;
    font-size: 0;
  }
  
  .man-icon, .women-icon {
    width: 276rpx;
    height: 276rpx;
  }
  
  .sex {
    text-align: center;
    font-size: 30rpx;
    color: #333;
    margin: -20rpx 32rpx 0 0;
  }
  
  .sex:last-child {
    margin-right: 0;
  }
  
  /* 条款什么的 */
  .line-center {
    display: flex;
    justify-content: center;
    margin-top: 100rpx;
  }
  .desc-item {
    display: flex;
    align-items: center;
    margin-bottom: 45rpx;
  }
  .desc-item image {
    width: 96rpx;
    height: 96rpx;
    margin-right: 20rpx;
  }
  .desc-title {
    color: #aa8d6d;
    font-size: 30rpx;
  }
  .desc-desc {
    color: #333;
    font-size: 28rpx;
  }

</style>

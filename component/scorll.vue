<template>
	<scroll-view
	  class="scroll-view"
	  scroll-y="true"
	  @scrolltoupper="bindscrolltoupper"
	  @scrolltolower="bindscrolltolower"
	  @scroll="bindscroll"
	  @touchstart="touchstart"
	  @touchmove="touchmove"
	  @touchend="touchend"
	  scroll-into-view="''"
	>
	  <view id="top"></view>
	  <view class="pulldown-loading-box" v-bind:style="'transform:translateY('+(-(100-offset))+'%)'">
		  <view class="ssss">
		  	1233584
		  </view>
	    <!-- <slot name="pulldown-loading-ele"></slot>   -->
	  </view>
	  <view class="main" v-bind:style="'transform:translateY('+offset*1.5+'rpx)'">
		  11111
	    <!-- <slot name="main"></slot>   -->
	    <!-- <slot name="reach-bottom-ele"></slot>    -->
	    <!-- <slot name="empty"></slot> -->
	  </view>
	  <view id="bottom"></view>
	</scroll-view>
</template>

<script>
	export default{
		data(){
			return {
				offset: 0,
				onTheTop:true,
				touchSpot: {
					startX: 0,
					startY: 0
				 },
				 pulldownTop:0
			}
		},
		methods:{
			bindscrolltolower: function (e) {
				console.log(1)
			      if (!this.data.more || this.lock) return;
			      this.lock = true;
			      // this.triggerEvent('reachbottom', {3	
			      //   stop: () => {
			      //     this.lock = false;
			      //   }
			      // }, {});
			    },
			    bindscrolltoupper: function (e) {
			     console.log(2)
			      this.onTheTop = true;
			    },
			    bindscroll: function (e) {
					console.log(3)
			      // console.log(e.detail.scrollTop)
			      if (e.detail.scrollTop === 0) {
			        this.onTheTop = true;
			      } else {
			        this.onTheTop = false;
			      }
			    },
			    touchstart(e) {
					console.log(4)
			      if (!this.onTheTop || !e.changedTouches[0]) return;
			      const { pageX, pageY } = e.changedTouches[0];
			      this.touchSpot.startX = pageX;
			      this.touchSpot.startY = pageY;
			    },
			    touchmove(e) {
					
			      //return//关闭下拉刷新
			      if (!this.onTheTop || !e.changedTouches[0]) {
			        return;
			      } else if (!this.touchSpot.startX) {
			        const { pageX, pageY } = e.changedTouches[0];
			        this.touchSpot.startX = pageX;
			        this.touchSpot.startY = pageY;
					
			        return;
			      }
			      const { pageX, pageY } = e.changedTouches[0];
			      let offset = (pageY - this.touchSpot.startY) / 2;
				  this.offset=offset > 100 ? 100 : offset;
			      // this.setData({
			      //   offset: offset > 100 ? 100 : offset
			      // });
			    },
			    touchend(e) {
			      // return
			      if (this.offset >= 70) {
			        if (this.offset < 100) {
						this.offset=100;
			          // this.setData({
			          //   offset: 100
			          // });
			        }
			        // 下拉刷新
			        // this.triggerEvent('pulldown', {
			        //   stop: () => {
			        //     setTimeout(() => {
			        //       this.setData({
			        //         offset: 0
			        //       });
			        //     }, 600);
			        //   }
			        // }, {});
			      } else {
					  this.offset=0
			        // this.setData({
			        //   offset: 0
			        // });
			      }
			      this.resetTouchSpot();
			    },
			    resetTouchSpot() {
			      this.touchSpot = {
			        startX: 0,
			        startY: 0
			      };
			    }
		}
	}
</script>

<style>
	.ssss{
		padding: 40rpx;
		background: #4CD964;
	}
	.scroll-view {
	  position: absolute;
	  top: 0;
	  bottom: 0;
	  right: 0;
	  left: 0;
	}
	
	.pulldown-loading-box {
	  position: fixed;
	  left: 0;
	  right: 0;
	  z-index: 3;
	  transform: translateY(-100%);
	  transition: transform .3s;
	}
	
	.main {
	  transition: transform .3s;
	}
	.scroll-box {
	  display: block;
	  height: 100vh;
	  width: 100vw;
	  position: relative;
	}
	
	.pulldown-loadng {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  background:#efefef;
	}
	
	.loading-icon {
	  width: 200rpx;
	  height: 200rpx;
	}
	.loading-icon-text{
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  font-size: 30rpx;
	  color: #D61313;
	  width: 100%;
	  font-weight: bold;
	  height: 140rpx;
	}
	.loading-icon-text image{
	  width: 40rpx;
	  height: 37rpx;
	  margin-right: 10rpx;
	}
	
	@keyframes loadingImg{
	  0%{
	    transform: rotate(0deg);
	  }
	  100%{
	    transform: rotate(360deg);
	  }
	}
	.loadingImg{
	  animation: loadingImg .5s linear infinite;
	}
</style>

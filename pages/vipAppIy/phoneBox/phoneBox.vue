<template>
	<view>
		<view class="box" catchtouchmove="invalidTouch">
		  <!-- <image class="close-icon" src="http://minis-resources-1252149780.cosgz.myqcloud.com/lovers_magpie%20/auth_box_window_close_btn.png" @click="closePhoneHandler"></image> -->
		  <view class="window">
		    <view class="w-title">手机号授权</view>
		    <view class="w-content">
		      <view class="w-1" :style="{marginLeft:wxPhoneNumber ? 0 : -100+'%'}">
		        <image class="logo" src="http://minis-resources-1252149780.cosgz.myqcloud.com/lovers_magpie%20/logo.jpg"></image>
		        <button class="get-phone" open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">微信绑定手机号注册</button>
		        <view class="toggle" @click="boxToggleHandler">填写手机号注册 <view class="arrow"></view></view>
		      </view>
		      <view class="w-2">
		        <view class="phone-input">
		          <image src="http://minis-resources-1252149780.cosgz.myqcloud.com/lovers_magpie%20/auth_box_iphone_icon.png"></image>
		          <input type="number" maxlength="11" placeholder="请输入手机号" placeholder-class="placeholder-class" @input="phoneHandler"/>
		        </view>
		        <view class="code-box">
		          <view class="phone-code">
		            <image src="http://minis-resources-1252149780.cosgz.myqcloud.com/lovers_magpie%20/auth_save_icon.png"></image>
		            <input type="number" maxlength="4" placeholder="输入验证码" placeholder-class="placeholder-class" @input="codeHandler"/>
		          </view>
		          <button class="default-btn" :class="codeTime > 0 && 'invalid-btn'" @click="getCodeHandler">{{codeTime > 0 ? codeTime + 's' : '验证码'}}</button>
		        </view>
		        <button class="get-phone" @click="checkPhoneHandler">确    定</button>
		        <view class="toggle" @click="boxToggleHandler">返回微信绑定手机号注册 <view class="arrow"></view></view>
		      </view>
		    </view>
		  </view>
		</view>

	</view>
</template>

<script>
  const APP=getApp();
  // console.log(APP)
  import {toastShow,loadShow} from "../../../utils/all.js";
	export default {
		data() {
			return {
				 wxPhoneNumber: true,
				 codeTime: 0
			};
		},
    created() {
      
    },
    methods:{
      getPhoneNumber(e) {//直接获取微信电话
        if (e.detail.encryptedData) {
          wx.showLoading({
            mask: true
          });
          let phone = '', extraInfo = {};
  
          if (global.inviteID) {
              extraInfo['inviter'] = global.inviteID
          }
  
          if (global.cupidcode) {
            extraInfo['cupidcode'] = global.cupidcode
          }
  
          this.request({
            path: '/wxapp/phone/aes',
            method: 'POST',
            data: Object.assign({
              encryptedData: e.detail.encryptedData,
              iv: e.detail.iv
            }, extraInfo)
          }).then(res => {
            APP.globalData.userInfo = {
              ...APP.globalData.userInfo,
              token: res.token,
              user: res.user,
              userId: res.userId
            };
            // 如果还没开始消息请求，则开启消息请求
            if (!APP.noticeInit && res.user.id && res.user.id > 0) {
              APP.noticeInit = true;
              notice.start();
            }
            phone = res.wxPhoneData.phoneNumber;
            return this.checkPhoneIsNew(phone); // 同时，需要检查一下手机号是否是新的
          }).then(res => {
            if (res) {
              wx.hideLoading();
              this._phone = phone;
              this.exitComponent();
              // 刷新一下vip状态
              this.refreshVipStatus();
            } else {
              wx.hideLoading();
              wx._showToast('该手机号已被使用！');
            }
          }).catch(global.onError('获取手机号失败, 请手动填写!'));
        }
      },
      // 手动输入的电话号码
      phoneHandler(e) {
        this._phone = e.detail.value;
      },
  
      // 验证码
      codeHandler(e) {
        this._code = e.detail.value;
      },
      // 提交校验验证码
      checkPhoneHandler() {
        let phone = this._phone, extraInfo={};
        if (!/^1\d{10}$/.test(phone)) {
          toastShow('请填写正确的手机号!');
          return;
        } else if (!/\d{4}/.test(this._code)) {
          toastShow('请填写正确的验证码!');
          return;
        }
  
        if (global.inviteID) {//媒人推荐
          extraInfo['inviter'] = APP.globalData.inviteID.inviteID
        }
        if (global.cupidcode) {
          extraInfo['cupidcode'] = APP.globalData.inviteID.cupidcode
        }
        this.request({
          path: '/user/Public/signin',
          method: 'POST',
          data: Object.assign({
            phone: phone,
            code: this._code
          }, extraInfo)
        }).then(res => {
          // 同时，需要检查一下手机号是否是新的
          APP.globalData.userInfo = {
            ...APP.globalData.userInfo,
            token: res.token,
            user: res.user,
            userId: res.userId
          };
          console.log( APP.globalData.userInfo);
          // 如果还没开始消息请求，则开启消息请求
          // if (!APP.noticeInit && res.user.id && res.user.id > 0) {
          //   APP.noticeInit = true;
          //   notice.start();
          // }
          toastShow('验证通过!');
          // 刷新一下vip状态
          this.refreshVipStatus();
          this.exitComponent();
        }).catch(err => {
          if (err.msg === '验证码不正确!') {
            toastShow(err.msg);
          } else {
            toastShow('获取验证码失败，请稍后重试!');
          }
        });
      },
      // 检查该手机号是否使用过了
      checkPhoneIsNew(phone) {
        return this.request({
          path: '/member/baseinfo/checkAuthPhone',
          method: 'POST',
          data: {
            phone
          }
        });
      },
      // 获取验证码
      getCodeHandler() {
        if (this.codeTime === 0) {
          let phone = this._phone;
          if (!/^1\d{10}$/.test(phone)) {
            toastShow("请输入正确手机号");
            return;
          }
          loadShow("获取中~");
          // 获取验证码之前需要先校验一下该手机号是否有被使用过
          this.checkPhoneIsNew(phone).then(res => {
            if (res) {
              return this.request({//发送验证码
                path: '/user/phoneVerify/sendCode',
                method: 'POST',
                data: {
                  phone: phone
                }
              }).then(() => {
                uni.hideLoading();
                this.codeTime=90
                this.endTime = Date.now() + 90000;
                this.startInterval();
              });
            } else {
              uni.hideLoading();
              toastShow('该手机号已被使用！');
              return;
            }
          }).catch(err=>{toastShow("请求验证码失败，请检查号码格式!")});
        }
      },
      // 验证码倒计时
      startInterval() {
        clearInterval(this.intervalKey);
        this.intervalKey = setInterval(() => {
          let codeTime = this.codeTime;
          if (codeTime - 1 <= 0) {
            clearInterval(this.intervalKey);
          }
          // this.setData({
          //   codeTime: codeTime <= 0 ? 0 : codeTime - 1
          // });
          this.codeTime=codeTime <= 0 ? 0 : codeTime - 1
        }, 1000);
      },
      boxToggleHandler() {
        this.wxPhoneNumber=!this.wxPhoneNumber;
      },
      // 更新一下会员状态
      refreshVipStatus() {
        this.request({
          path: '/member/baseinfo/isMember'
        }).then(res => {
          APP.globalData.vipInfo={...res}
        });
      },
      exitComponent() {
        // 这里将手机号码保存，第二次进入不显示手机号码弹窗
        uni.setStorage({ key: 'auth_phone', data: '' + this._phone });
        // this.triggerEvent('closePhoneBox', { phone: this._phone }, {});
      }
    }
	}
</script>

<style scoped>
  .box {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.75);
    padding-top: 20vh;
    z-index: 10;
  }
  .box .close-icon {
    width: 38rpx;
    height: 38rpx;
    margin: 100rpx 0 35rpx 680rpx;
  }
  .window {
    width: 600rpx;
    height: 558rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    border-radius: 30rpx;
    background: transparent url(https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/lovers_magpie%20/phone_box_bg.png) no-repeat center;
    background-size: 100% 100%;
  }
  .w-content {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
  }
  .w-1 {
    transition: margin .3s;
  }
  .w-1, .w-2 {
    width: 100%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 50rpx;
  }
  .w-title {
    font-size: 30rpx;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
  .window .logo {
    width: 146rpx;
    height: 146rpx;
    border-radius: 50%;
  }
  .get-phone {
    line-height: 82rpx;
    min-width: 477rpx;
    border-radius: 41rpx;
    color: white;
    border: none;
    font-size: 30rpx;
    margin: 40rpx 0 40rpx;
    background: #0c7672;
  }
  .toggle {
    font-size: 30rpx;
    color: #05353c;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
  }
  .w-2 {
    padding: 0 60rpx 50rpx;
  }
  .code-box {
    margin-top: 50rpx;
  }
  .code-box, .phone-input {
    width: 100%;
  }
  .code-box, .phone-input, .phone-code {
    display: flex;
    align-items: flex-end;
  }
  .phone-input, .phone-code {
    border-bottom: 1rpx solid #35a7a3;
    padding-bottom: 10rpx;
    align-items: center;
  }
  .code-box input, .phone-input input {
    flex-grow: 1;
    font-size: 28rpx;
  }
  .placeholder-class {
    color: #35a7a3;
    font-size: 28rpx;
  }
  .phone-input image {
    width: 28rpx;
    height: 42rpx;
    margin-right: 10rpx;
    flex-shrink: 0;
  }
  .phone-code image {
    width: 32rpx;
    height: 38rpx;
    margin-right: 10rpx;
    flex-shrink: 0;
  }
  .code-box .default-btn {
    flex-shrink: 0;
    width: 146rpx;
    font-size: 28rpx;
    line-height: 60rpx;
    margin-left: 20rpx;
    color: white;
    background: #35a7a3;
  }
  .code-box .invalid-btn {
    background: #ccc;
    color: #666;
  }
  .arrow {
    width: 16rpx;
    height: 16rpx;
    border-top: 2rpx solid #05353c;
    border-right: 2rpx solid #05353c;
    transform: rotate(45deg);
    display: inline-block;
    margin-left: 6rpx;
  }

</style>

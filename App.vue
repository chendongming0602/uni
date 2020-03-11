<script>
	export default {
		data(){
			return {
				name:1
			}
		},
		created() {
			//#ifdef MP-WEIXIN
			wx.cloud.init();
      
			//#endif
      
		},
		async onLaunch(options) {
      this.globalData.userInfo={};
      this.globalData.vipInfo={};
      this.initInviteInfo(options);//媒人推荐
      let userRes=await this.login();
      if (userRes.inBlacklist) return;//被拉黑
      if(userRes.token) {
        await this.userVip();
      }
     
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		},
    methods:{
      initInviteInfo(options) {//媒人
        this.globalData.inviteID={};
        try {
          //邀请信息处理  start
          // options.query.inviteID 邀请人id, 从别人发出的邀请进入，需要给邀请人增加积分，保存后在手机号注册接口传入
          if (/^\d+$/.test(options.query.inviteID)) {
            this.globalData.inviteID.inviteID = options.query.inviteID;
          }
    
          const scene = decodeURIComponent(options.query.scene);
          if (scene && scene.indexOf('cupidcode=') > -1) {
    
            let map = scene.split('&');
            let obj = {};
            map.forEach(it => {
              let nameval = it.split('=');
              obj[nameval[0]] = nameval[1];
            });
            // 金牌媒人活动携带id，进入后需在登录接口传入，给媒人增加赏金
            if (obj.cupidcode) {
              this.globalData.inviteID.cupidcode = obj.cupidcode;
              uni.setStorage({
                key: "cupidcode",
                data: obj.cupidcode
              })
            }
    
          } else {
    
            let cupidcode = uni.getStorageSync('cupidcode');
            if (cupidcode) {
             this.globalData.inviteID.cupidcode = cupidcode;
            }
    
          }
          // console.log(this)
          //end
        } catch(err) {
            console.log(err);
        }
      },
      async login(){//登录
        return new Promise((reslove,reject)=>{
          uni.login({
            success:res=>{
              this.request({
                path:"/wxapp/public/miniInit",
                method:"POST",
                data:{
                  code:res.code
                }
              }).then(res=>{
                uni.setStorageSync('token', res.token);
                uni.setStorageSync('openid', res.openid);
                uni.setStorageSync('party', res.party);
                this.globalData.userInfo={...res};
                reslove(res)
              })
              
            }
          })
        })
      },
      async userVip(){//会员
        return this.request({
          path:"/member/baseinfo/isMember"
        }).then(res=>{
           this.globalData.vipInfo={...res}
        })
      },
    },
	}
</script>

<style>
	/*每个页面公共css */
  view{
    box-sizing: border-box;
  }
</style>

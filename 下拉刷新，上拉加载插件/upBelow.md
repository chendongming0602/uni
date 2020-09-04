##1、先将组件导入需要的页面。
###需传入pulldown（刷新）和reachbottom（加载）事件，其余请查看演示代码！
` <upBelow v-on:pulldown="pulldown" v-on:reachbottom="reachbottom"> </upBelow>`  
************************************
##2、自定义刷新动画请放在插槽：slot="pulldown"内。  
` <view class="pulldown-loadng" slot="pulldown"> </view> `
***************************************************
##3、需要展示内容请放在插槽：slot="content"内。  
` <view class="pulldown-loadng" slot="content"> </view> `
*****************************************
##4、页面声明pulldown（刷新）和reachbottom（加载）函数。 
```
  pulldown(e){
    let {stop}=e;
    console.log("触发下拉刷新");
    setTimeout(()=>{console.log("刷新成功");stop();},1000)
  },
  reachbottom(e){
    let {stop}=e;
    console.log("触发上拉加载");
    setTimeout(()=>{console.log("加载成功");stop();},1000)
  }
``` 
**********************************************
##5、在刷新/加载完成后需要调用回调函数stop()进行告知组件已经完成。  （注意：第四点的定时器中的stop()）
--------------------------------------------
###简单实用，喜欢的朋友帮忙点个5评。谢谢！
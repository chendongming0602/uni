# 使用方法
****
### 1、在需要的页面中导入ming-pop弹窗组件，并在页面中使用该组件：
` <pop ref="pop" direction="below" :is_close="true" :is_mask="true" :width="100"></pop> `
****
### 2、属性说明
| 属性名 | 默认值 | 作用 |说明|
| --- | --- | --- | ---- |
|direction|"below"  -->（下边）|弹窗方向|below(下边)；up(上边)；left(左边) ；right(右边)；center(中间)|
|is_close|true  -->（显示）|是否显示关闭按钮|点击即可关闭弹窗|
|is_mask:|true  -->（显示）|是否显示遮罩层|点击即可关闭弹窗|
|width|100 |弹窗的宽度|单位（%）。建议只在上、下方向弹窗使用100(满值)|
****
### 3、显示弹窗
页面内通过ref调用组件的show方法进行打开弹窗(使用组件先挂入ref：ref="pop")。
` this.$refs.pop.show(); `
***
### 4、关闭弹窗
页面内通过ref调用组件的close方法关闭弹窗。
` this.$refs.pop.close(); `

也可通过点击 **关闭图标** 或者 **遮罩层** 进行关闭。
****
### 5、弹窗展示内容的位置
直接放在组件标签内即可

`` <pop ref="pop" direction="below" :is_close="true" :is_mask="true" :width="100">
  我是弹窗需要展示的内容
</pop> ``
***

## 温馨提示
> 由于演示是在同个页面切换不同方向演示的，会出现弹出动画方向错位！建议根据属性direction值来使用，切勿混用（如：direction值为："below"，却点击不是下边方向的触发）则不会出现动画方向错位。
*******
*********
************
### 独立原生组件；不依赖任何第三方；简单实用；封装方便！

<p align="center" size=20>记得五星好评哟~~~</p>

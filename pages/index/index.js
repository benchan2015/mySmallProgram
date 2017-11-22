import indexData from  '../../assets/data/index'
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    baseInfo: indexData.baseInfo
  },
  onLoad() {
    console.log(this.data.header)
  }
})

// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: {},

    shopList: [],
    page: 1,
    pageSize: 10,
    total: 0,

    isLoading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("shoplist - onLoad(): options", options);
    this.setData({ query: options });
    this.getShopList();
  },

  getShopList(callback) {
    this.setData({ isLoading: true });
    wx.showLoading({ title: "数据加载中" });

    const { page, pageSize } = this.data;
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
      method: "GET",
      data: {
        _page: page,
        _limit: pageSize
      },
      success: (res) => {
        console.log("getShopList(): res", res);
        this.setData({
          shopList: [...this.data.shopList, ...res.data],
          total: res.header["X-Total-Count"] - 0
        });
      },
      complete: () => {
        wx.hideLoading();
        this.setData({ isLoading: false });
        callback && callback();
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.query.title,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.getShopList(() => {
      wx.stopPullDownRefresh();
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    const { page, pageSize, total } = this.data;
    if (page * pageSize >= total) {
      return wx.showToast({
        title: "数据加载完毕！",
        icon: "none"
      });
    }

    if (this.data.isLoading) return;

    this.setData({ page: this.data.page + 1 });
    this.getShopList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
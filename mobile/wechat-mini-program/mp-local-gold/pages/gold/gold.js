// pages/gold.js
import * as echarts from "../../components/ec-canvas/echarts-min";

Page({
  data: {
    echartsComponent: "",
    goldList: [],
    isLoading: false
  },

  onLoad: function () {
    // 通过函数调用，解构的形式进行传参
    this.echartsComponent = this.selectComponent("#echarts_gold")
    this.getGoldList();
  },

  getGoldList() {
    this.setData({ isLoading: true });
    wx.showLoading({ title: '数据加载中' });

    wx.request({
      url: "https://127.0.0.1:9990/api/v1/market/price/fixed?startTime=2023-01-01&endTime=2023-08-27",
      method: "GET",
      success: (res) => {
        console.log("getGoldList(): res", res);
        this.setData({ goldList: res.data });
        this.initCharts(res.data);
      },
      complete: () => {
        wx.hideLoading();
        this.setData({ isLoading: false });
      }
    });
  },

  initCharts(goldList) {
    this.echartsComponent.init((canvas, width, height, dpr) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      // let type = (event ? event.target.dataset.type : "1");
      chart.setOption(this.setOption(goldList));
      return chart;
    });
  },

  // echats组件的初始化配置
  setOption(goldList) {
    const xAxisData = goldList[0].infos.map(info => info.updateTime);
    const seriesList = goldList.map(gold => ({
      name: gold.brandName,
      type: "line",
      smooth: true,
      data: gold.infos.map(info => info.price)
    }));
    return {
      title: {
        text: "每日金价",
        textStyle: {
          color: "gold"
        },
        textAlign: "left"
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        smooth: true,
        // data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        data: xAxisData,
      },
      yAxis: {
        type: "value"
      },
      series: seriesList
      // series: [
      //   {
      //     name: "周大福",
      //     type: "line",
      //     smooth: true,
      //     data: [589, 604, 603, 610, 593, 589, 601]
      //   },
      //   {
      //     name: "老庙",
      //     type: "line",
      //     smooth: true,
      //     data: [100, 200, 300, 400, 500, 600, 700]
      //   },
      // ]
    }
  }

})



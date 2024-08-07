

(async function () {

  function padding(value, targetLength = 2, padString = "0") {
    // return (Array(targetLength).join(padString) + value).slice(-targetLength);
    return String(value).padStart(targetLength, padString);
  }

  function getDateString(theDate) {
    const year = padding(theDate.getFullYear());
    const month = padding(theDate.getMonth() + 1);
    const date = padding(theDate.getDate());
  
    return (`${year}-${month}-${date}`);
  }

  // get data
  const startTime = "2020-01-01";
  // const startTime = "2023-08-01";
  const endTime = getDateString(new Date());
  // const url = `https://127.0.0.1:9990/api/v1/market/price/fixed?startTime=${startTime}&endTime=${endTime}`;
  const url = `http://127.0.0.1:9990/api/v1/market/price/fixed?startTime=${startTime}&endTime=${endTime}`;
  let response = await window.fetch(url, { method: "get" });
  let goldList = await response.json();
  console.log("goldList", goldList);

  // convert option
  const xAxisData = goldList[0].infos.map(info => info.updateTime);
  const seriesList = goldList.map(gold => ({
    name: gold.brandName,
    type: "scatter",
    smooth: true,
    data: gold.infos.map(info => info.price)
  }));

  // use echarts
  const myChart = echarts.init(document.querySelector(".box"));

  let option = {
    // 设置图表的标题
    title: {
      text: "今日金价",
      color: "gold"
    },
    // 图表的提示框组件
    tooltip: {
      // 触发方式
      trigger: "axis"
    },
    // 图例组件
    legend: {
      // series里面有了name值，则legend里面的data可以删掉
    },
    // 网格配置  grid可以控制线形图 柱状图 图表大小
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      // 是否显示刻度标签 如果是true 就显示 否则反之
      containLabel: true
    },
    // 工具箱组件  可以另存为图片等功能
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    // 设置x轴的相关配置
    xAxis: {
      type: "category",
      // 是否让我们的线条和坐标轴有缝隙
      boundaryGap: false,
      data: xAxisData
    },
    // 设置y轴的相关配置
    yAxis: {
      type: "value"
    },
    // 系列图表配置 它决定着显示那种类型的图表
    series: seriesList
  };

  myChart.setOption(option);
})();

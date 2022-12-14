function adapter() {
  console.log("adapter()");

  // 获取布局视口宽度。因为开启了理想视口，布局视口==设备横向独立像素值
  const dpWidth = document.documentElement.clientWidth;
  // 计算根字体大小：方案二
  const rootFontSize = dpWidth / 10;
  // 设置根字体大小
  document.documentElement.style.fontSize = rootFontSize + "px";
}

adapter();
window.onresize = adapter;
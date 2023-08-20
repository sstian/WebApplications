
function getGold() {
  wx.request({
    // url: "https://www.cngold.org/sgapp/price/gold/pageData.do?currentPage=1&pageSize=11",
    url: "http://localhost:5001/gold",
    method: "GET",
    header: {
      // "User-Agent": "",
      // "Content-Type": "application/json",
      // "Accept": "*/*",
      // "Host": "www.cngold.org",
      // "Connection": "keep-alive"
  },
    success: (res) => {
      console.log("getGold(): res", res);

    },
    complete: () => {

    }
  });
}

module.exports = {
  getGold
}
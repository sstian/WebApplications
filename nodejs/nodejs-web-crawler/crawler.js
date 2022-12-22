const puppeteer = require("puppeteer-core");

(async () => {
  // 打开浏览器
  const browser = await puppeteer.launch({executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"});
  // 新开标签页
  const page = await browser.newPage();
  // 访问指定网页
  await page.goto("https://movie.douban.com/cinema/nowplaying/beijing/");

  // 爬取任务
  let finalData = await page.evaluate(() => {
    const $lists = $("#nowplaying .lists > li");
    let results = [];
    for (let i = 0; i < $lists.length; i++) {
      let $li = $($lists[i]);
      let imgsrc = $li.find(".poster img").attr("src");
      let title = $li.find(".stitle a").attr("title");
      let rating = $li.find(".srating subject-rate").text();

      results.push({ imgsrc, title, rating });
    }
    return results;
  });
  console.log(finalData);

  // 关闭浏览器
  await browser.close();
})();

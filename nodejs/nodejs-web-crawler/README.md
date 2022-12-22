
# 网页爬虫 web crawler

## Package

Puppeteer
A high-level API to control headless Chrome over the DevTools Protocol
npm i puppeteer --ignore-scripts

## Output
```cmd
PS D:\Develop\WebApplications\nodejs\nodejs-web-crawler> node .\crawler.js
[
  {
    imgsrc: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2884182275.webp',
    title: '阿凡达：水之道',
  }
]
PS D:\Develop\WebApplications\nodejs\nodejs-web-crawler> node .\crawler.js
[
  {
    imgsrc: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2884182275.webp',
    title: '阿凡达：水之道',
    rating: ''
]
PS D:\Develop\WebApplications\nodejs\nodejs-web-crawler> node .\crawler.js
[
  {
    imgsrc: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2884182275.webp',
    title: '阿凡达：水之道',
    rating: ''
  }
]
PS D:\Develop\WebApplications\nodejs\nodejs-web-crawler> node .\crawler.js
[]
PS D:\Develop\WebApplications\nodejs\nodejs-web-crawler> node .\crawler.js
[
  {
    imgsrc: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2884182275.webp',
    title: '阿凡达：水之道',
    rating: ''
  },
  {
    imgsrc: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2884307337.webp',
    title: '谁偷了我的粉兔子',
    rating: ''
  },
  {
    imgsrc: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2884233470.webp',
    title: '航海王：红发歌姬',
    rating: ''
  },
  {
    imgsrc: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2883601331.webp',
    title: '沼泽深处的女孩',
    rating: ''
  },
  {
    imgsrc: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2883894742.webp',
    title: '名侦探柯南：万圣节的新娘',
    rating: ''
  },
  {
    imgsrc: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2883796259.webp',
    title: '坠落',
    rating: ''
  },
  {
    imgsrc: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2884351826.webp',
    title: '2067',
    rating: ''
  },
  {
    imgsrc: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2881176356.webp',
    title: '万里归途',
    rating: ''
  },
  {
    imgsrc: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2883219876.webp',
    title: '扫黑行动',
    rating: ''
  },
  {
    imgsrc: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2883436778.webp',
    title: '杀掉那个魔术师',
    rating: ''
  },
  {
    imgsrc: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2883432124.webp',
    title: '忍者神龟：崛起',
    rating: ''
  },
  {
    imgsrc: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2884144171.webp',
    title: '不要再见啊，鱼花塘',
    rating: ''
  },
  {
    imgsrc: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2884280708.webp',
    title: '放牛班的春天',
    rating: ''
  },
  {
    imgsrc: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2545472803.webp',
    title: '流浪地球',
    rating: ''
  },
  {
    imgsrc: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2884308535.webp',
    title: '小小乔',
    rating: ''
  },
  {
    imgsrc: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2882109748.webp',
    title: '您好，北京',
    rating: ''
  },
  {
    imgsrc: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2514119443.webp',
    title: '红海行动',
    rating: ''
  },
  {
    imgsrc: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2883433346.webp',
    title: '猫狗武林',
    rating: ''
  },
  {
    imgsrc: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2568258113.webp',
    title: '中国机长',
    rating: ''
  },
  {
    imgsrc: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2621101922.webp',
    title: '一点就到家',
    rating: ''
  },
  {
    imgsrc: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2880723500.webp',
    title: '我是霸王龙',
    rating: ''
  },
  {
    imgsrc: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2512499560.webp',
    title: '汉娜',
    rating: ''
  },
  {
    imgsrc: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2515824662.webp',
    title: '寂静之乐',
    rating: ''
  },
  {
    imgsrc: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2516183602.webp',
    title: '托斯塔纳天堂',
    rating: ''
  },
  {
    imgsrc: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2557951270.webp',
    title: '命运杀局',
    rating: ''
  },
  {
    imgsrc: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2614136711.webp',
    title: '费里尼的世界',
    rating: ''
  },
  {
    imgsrc: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2537695067.webp',
    title: '料理作曲家：瓜蒂耶罗·马切西',
    rating: ''
  }
]
```
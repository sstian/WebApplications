# mp-local-life

微信小程序：**本地生活**

## 接口地址

### 轮播图

GET https://www.escook.cn/slides
```json
[
  {
    "id": 1,
    "image": "http://ww1.sinaimg.cn/mw690/006ThXL5ly1fj7zx3w751j30u00dmgy3.jpg",
    "link": ""
  },
  {
    "id": 2,
    "image": "http://ww1.sinaimg.cn/mw690/006ThXL5ly1fj6ckx9tlwj30u00fqk8n.jpg",
    "link": "/pages/list/list?cat=10"
  }
]
```

### 九宫格

GET https://www.escook.cn/categories
```json
[
  {
    "id": 1,
    "name": "美食",
    "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2onyj302u02umwz.jpg"
  },
  {
    "id": 2,
    "name": "洗浴足疗",
    "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2j4dj302u02umwy.jpg"
  },
  {
    "id": 3,
    "name": "结婚啦",
    "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i56i0j302u02u744.jpg"
  },
  {
    "id": 4,
    "name": "卡拉OK",
    "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2uzvj302u02udfo.jpg"
  },
  {
    "id": 5,
    "name": "找工作",
    "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2rnlj302u02umwz.jpg"
  },
  {
    "id": 6,
    "name": "辅导班",
    "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2zloj302u02udfn.jpg"
  },
  {
    "id": 7,
    "name": "汽车保养",
    "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i69eij302u02ua9w.jpg"
  },
  {
    "id": 8,
    "name": "租房",
    "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i6j2lj302u02u0sj.jpg"
  },
  {
    "id": 9,
    "name": "装修",
    "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i6z1pj302u02ua9u.jpg"
  }
]
```
### 随机颜色值

GET https://www.escook.cn/api/color
```json
{
  "message": "success",
  "data": [
    "235, 119, 214",
    "177, 99, 97",
    "54, 237, 50",
    "122, 85, 105",
    "113, 153, 17",
    "29, 193, 180",
    "254, 250, 148",
    "248, 115, 247",
    "117, 130, 202",
    "131, 1, 188"
  ]
}
```

### 商品列表

GET https://www.escook.cn/categories/{cate_id}/shops

参数：
- param
cate_id: 分类id

- query
_page: 请求第几页的数据
_limit: 每页请求几条数据

e.g. GET https://www.escook.cn/categories/1/shops?_page=1&_limit=1
```json
[
  {
    "id": 1,
    "name": "宫廷月亮虾饼",
    "phone": "15530710686",
    "address": "任丘市裕华中路与会战道交叉口东南角蕾莎汇生活4层",
    "images": [
      "http://p1.meituan.net/deal/2846ed948e95eef4c4d50edaf52a483432023.jpg",
      "http://p0.meituan.net/deal/89da71931d0bffe8d2e94540845768c178309.jpg",
      "http://p1.meituan.net/deal/56b99503da568b3ad161847408066950189103.jpg",
      "http://p0.meituan.net/deal/b8c4c6b9fa62336cbbb81e9a2ffed872370777.jpg",
      "http://p0.meituan.net/deal/6357af227e6cf37550eb555eb0f7ab88593817.jpg",
      "http://p0.meituan.net/deal/f31ea2695966e01150c3033b2b2908eb285767.jpg",
      "http://p1.meituan.net/deal/8cab9b30e3a60795122568fe78350f36270213.jpg",
      "http://p1.meituan.net/deal/c8408d56292313b64929a26e90b2d87131373.jpg",
      "http://p0.meituan.net/deal/fdb06f022d9ea315106d03946b6ff96f582054.jpg",
      "http://p0.meituan.net/deal/e17311f08bbe4a1d4f6eba90a0430395180560.jpg",
      "http://p1.meituan.net/deal/5df1657db8a9da60181d8c048af5f3a3176195.jpg",
      "http://p1.meituan.net/deal/35dc7998b1a75dbf15467f1b79e3a96885479.jpg",
      "http://p0.meituan.net/deal/3e50bc8488912d23a6a30f964134307142537.jpg",
      "http://p1.meituan.net/deal/a3f689fd9dd72fdd2a01bd3214bbbc8c335616.jpg",
      "http://p1.meituan.net/deal/5b76923ac335f114a15201e00739db06567712.jpg",
      "http://p0.meituan.net/shaitu/790e9a0655efea996b8db84e06fb6d6682576.jpg",
      "http://p1.meituan.net/shaitu/a431fecbeddc931eca40867380d8139658076.jpg",
      "http://p1.meituan.net/shaitu/8ea0aa5a3584be2f1f74794ccfb8e89487877.jpg",
      "http://p0.meituan.net/shaitu/46a6e2690bf9eb1cc32c3a35b9c5bce075480.jpg",
      "http://p1.meituan.net/shaitu/14fad04db71c20ad941585945c8a192994652.jpg",
      "http://p0.meituan.net/shaitu/1152d0e2c68a95b84f422a2d1199040d26789.jpg",
      "http://p1.meituan.net/shaitu/62b8e865e1b0c22146a729d713ef1b4390405.jpg",
      "http://p0.meituan.net/shaitu/07ff389738f63a311b8cae9ed635f180227962.jpg"
    ],
    "score": "100",
    "tags": [
      "小吃快餐"
    ],
    "comments": [
      {
        "name": "cYQ107182476",
        "date": "2017-06-15",
        "content": "经常来吃了，味道也不错。位置就在观光梯入口处。可能是吃饱了再去吃的原因，感觉没啥想吃的欲望。虾饼挺普通的，主要是喜欢吃这个甜辣酱，之前有位置可以坐，但是现在没有了。很不方便。希望能有所改进吧",
        "rating": "100%",
        "images": [
          "http://p0.meituan.net/w.h/shaitu/4ffbaec3f82fe3b4240aedb22fee22e5267105.jpg",
          "http://p0.meituan.net/w.h/shaitu/592167e0826aec5b617b961d061b3096409943.jpg",
          "http://p0.meituan.net/w.h/shaitu/55864272727cb5dc958ca5ad51ba9a19267112.jpg",
          "http://p0.meituan.net/w.h/shaitu/9f3e5a81aa99f5646b9cfc411b813d83340833.jpg"
        ]
      },
      {
        "name": "胖***5",
        "date": "2017-07-27",
        "content": "挺好吃的，就是觉得虾味没有那么浓，不过这个价位，很实惠了。",
        "rating": "100%",
        "images": [
          "http://p0.meituan.net/w.h/shaitu/dc210667f0d2814a1883239f3c991bc6302994.jpg"
        ]
      },
      {
        "name": "绿茶牌栗子鼠",
        "date": "2017-07-09",
        "content": "喜欢www挺好吃的w酱特别好吃w下次还去(*/ω＼*)",
        "rating": "100%",
        "images": [
          "http://p1.meituan.net/w.h/shaitu/f73854cb9d77f17534b4a2326d3f7ca2172016.jpg"
        ]
      },
      {
        "name": "wcj337444810",
        "date": "2017-06-16",
        "content": "每次来都要吃一份",
        "rating": "100%",
        "images": [
          "http://p1.meituan.net/w.h/shaitu/4c5b175766a94486421b47db29203914182047.jpg",
          "http://p0.meituan.net/w.h/shaitu/f8063822b6090be02ff6ed913831dac2162849.jpg"
        ]
      },
      {
        "name": "七宝ltm",
        "date": "2017-07-16",
        "content": "第一次吃，大家都说好所以来吃，等的时间有点长，也要了鱿鱼，鱿鱼的味道有点淡，没什么味道，不过虾饼还是很好吃的，刚出来的时候口感很好，外酥里嫩的，很不错，甜辣酱也很好吃，搭配很不错",
        "rating": "100%",
        "images": []
      },
      {
        "name": "丁丁阳mm",
        "date": "2017-08-03",
        "content": "每次去蕾沙都买这个，这次在美团买得省了两块钱呢😊，儿子非常爱吃。不用排队。",
        "rating": "100%",
        "images": []
      },
      {
        "name": "Ge彤",
        "date": "2017-08-08",
        "content": "虾饼特别好吃，服务态度友好，以后会经常来的",
        "rating": "100%",
        "images": []
      },
      {
        "name": "OcA439183763",
        "date": "2017-08-06",
        "content": "第一口还可以，有点腻",
        "rating": "100%",
        "images": []
      },
      {
        "name": "转***s",
        "date": "2017-08-07",
        "content": "挺好吃的",
        "rating": "80%",
        "images": []
      },
      {
        "name": "欣欣仪fxy",
        "date": "2017-08-01",
        "content": "#虾饼# #泰国甜辣酱#",
        "rating": "100%",
        "images": []
      }
    ],
    "businessHours": "周一至周日10:00-21:00",
    "supportService": "支持WIFI  免费提供50个停车位",
    "introduction": "",
    "link": "http://cangzhou.meituan.com/shop/41247774",
    "categoryId": 1
  }
]
```


# local-gold-api

## Note

"express-request-id": "^1.4.1" -> const addRequestId = require("express-request-id")();
"express-request-id": "^3.0.0" -> import requestID from "express-request-id";

## Command

```cmd
npm install nodemon -g
```

## Interface

brand 品牌
product 产品

```
// GET https://127.0.0.1:9990/api/v1/info/gold

// GET https://127.0.0.1:9990/api/v1/market/price?brandId=2880&productId=11&startTime=2023-08-21&endTime=2023-08-24

GET https://127.0.0.1:9990/api/v1/market/price/fixed?startTime=2023-08-21&endTime=2023-08-25
response:
[
  {
    "brandId": "2880",
    "brandName": "周大福",
    "productId": "11",
    "productName": "黄金价格",
    "infos": [
      {
        "updateTime": "2023-08-24",
        "price": "598.0"
      },
      {
        "updateTime": "2023-08-25",
        "price": "599.0"
      }
    ]
  },
  {
    "brandId": "2889",
    "brandName": "老庙",
    "productId": "42",
    "productName": "黄金价格",
    "infos": [
      {
        "updateTime": "2023-08-24",
        "price": "598.0"
      },
      {
        "updateTime": "2023-08-25",
        "price": "599.0"
      }
    ]
  }
]

// POST https://127.0.0.1:9990/api/v1/market/price
{
  "golds": [
    {
      "brandId": "2880",
      "productId": "11"
    },
    {
      "brandId": "2885",
      "productId": "42"
    },
    {
      "brandId": "2889",
      "productId": "84"
    }
  ],
  "startTime": "2023-08-21",
  "endTime": "2023-08-24"
}
```

https://www.cngold.org/sgapp/price/gold/pageData.do?currentPage=1&pageSize=11&startTime=2023-08-21&endTime=2023-08-25&brandId=2880&productId=11&variable=json&_=1693321317628
```json
// 一条数据 info:
{
  "pId": "1838265",
  "brandId": "2880",
  "brandName": "周大福",
  "url": "http://zhubao.cngold.org/brand/zhoudafu.html",
  "productId": "11",
  "productName": "黄金价格",
  "price": "598.0",
  "priceUnit": "元/克",
  "raiseDownType": "1",
  "updateTime": "2023-08-24"
}

// 价格变动。相比于昨日
raiseDownType:
- "1": ↑ 上升
- "2": ↓ 下降
- "3": - 持平
```

## Tool

[CSV to JSON Converter](http://csv2json.com/)

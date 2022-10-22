db.cities.find()

// 查找所有省份的信息
db.cities.find({level: 1})

// 查找xx省所有市的信息
db.cities.find({level: 2, province: "11"})

// 查找xx省yy市所有区县的信息
db.cities.find({level: 3, province: "11", city: "01"})

db.cities.find({code: "410322"})

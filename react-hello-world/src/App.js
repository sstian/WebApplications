import './App.css';
import CsvExportor from 'csv-export';
import { UTC2LocaleByOffset, Locale2UTCByOffSet } from './util/utc-locale-time';


function App() {
  function exportCSV() {
    var tableData = [
      {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
        age: 18,
        time: "2010-10-10 00:00:00",
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄",
        age: 18,
        time: "2010-10-10 00:00:00",
      },
    ];

    // csv表格的头部
    let heads = ["date", "name", "address", "age", "time"];
    // csv表格的内容
    let csvData = [];
    let arrNew = this.tableData;
    for (let i = 0; i < arrNew.length; i++) {
      // 每行都是obj
      let obj = arrNew[i];
      // 根据头部来配置每一项的内容
      csvData.push({
        [heads[0]]: obj.date,
        [heads[1]]: obj.name,
        [heads[2]]: obj.address,
        [heads[3]]: obj.age,
        [heads[4]]: obj.time
      });
    }

    // 导出csv文件
    // csvData是表格的内容 ， header是表格头部，"文件.csv"为表格的名称
    CsvExportor.downloadCsv(csvData, { header: heads }, "文件.csv");
  }

  function utc() {
    let localeDate = UTC2LocaleByOffset("2022-01-10 20:30:40");
    console.log(localeDate);
  }
return (
  <div className="App">
    <button onClick={exportCSV}>button1</button>
    <button onClick={utc}>button2</button>
  </div>
);
}

export default App;

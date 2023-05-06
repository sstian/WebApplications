import { Component } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import axios from "axios";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent {
  private baseUrl: string = "http://localhost:3200";

  constructor(public http: HttpClient) { }

  getRequest() {
    this.http
      .get(this.baseUrl)
      .subscribe((response: any) => {
        console.log("getRequest() response", response);
      });
  }

  postRequest() {
    const body = { username: "jack", age: 20 };
    const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };

    this.http
      .post(this.baseUrl + "/login", body, httpOptions)
      .subscribe((response: any) => {
        console.log("postRequest() response", response);
      });
  }

  // jsonp请求，服务器必须得支持jsonp
  // http://a.itying.com/api/productlist?callback=ng_jsonp_callback_0
  jsonpWay() {
    const url = "http://a.itying.com/api/productlist";
    this.http
      .jsonp(url, "callback")
      .subscribe((response: any) => {
        console.log("jsonpWay() response", response);
      })
  }

  axiosWay() {
    axios
      .get(this.baseUrl)
      .then((response: any) => {
        console.log("axiosWay() then response", response);
      })
      .catch((error: any) => {
        console.log("axiosWay() catch error", error);
      })
  }

}

import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit {
  public newslist: any[] = [];

  constructor(public router: Router) { }

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      this.newslist.push("the " + i + " news");
    }
  }

  queryNavigate() {
    const extras: NavigationExtras = { queryParams: { cid: 1 } };
    this.router.navigate(["/content"], extras);
    
    // // http://localhost:4200/content?cid=1#abc
    // this.router.navigate(["/content"], {
    //   queryParams: { cid: 1 },
    //   fragment: "abc",
    //   replaceUrl: true
    // });
  }

  paramNavigate() {
    this.router.navigate(["/contents", "1"]);
  }

}

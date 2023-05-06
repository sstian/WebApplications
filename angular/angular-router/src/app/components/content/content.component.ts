import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"]
})
export class ContentComponent implements OnInit {
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      console.log(`ContentComponent - ngOnInit() queryParams data\n`, data);
    });

    this.route.params.subscribe((data) => {
      console.log(`ContentComponent - ngOnInit() params data\n`, data);
    });
  }

}

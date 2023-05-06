import { Component, OnInit } from "@angular/core";
import { StorageService } from "src/app/services/storage.service";

@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.scss"]
})
export class TodolistComponent implements OnInit {
  public keyword!: string;
  // status: 0-待办事项，1-完成事项
  public todolist: any[] = [
    { title: "eat", status: 0 },
    { title: "sleep", status: 1 },
    { title: "study", status: 0 },
  ];

  public TODOLIST: string = "todolist";

  // 依赖注入
  constructor(private storage: StorageService) {}

  // 页面刷新会调用
  ngOnInit() {
    console.log("TodolistComponent - ngOnInit()");
    const todolist = this.storage.get(this.TODOLIST);
    if (todolist) {
      this.todolist = todolist;
    }
  }

  doAdd(event: KeyboardEvent ) {
    console.log(event);
    // event.keyCode === 13
    if (event.key === "Enter") {
      if (this.todolistHaveKeyword(this.todolist, this.keyword)) {
        window.alert(`${this.keyword} 已存在`);
        return;
      }

      this.todolist.push({ title: this.keyword, status: 0 });
      this.keyword = "";

      this.storage.set(this.TODOLIST, this.todolist);
    }
  }

  doDelete(key: number) {
    this.todolist.splice(key, 1);
    this.storage.set(this.TODOLIST, this.todolist);
  }

  checkboxChange() {
    console.log("TodolistComponent - checkboxChange()");
    this.storage.set(this.TODOLIST, this.todolist);
  }

  todolistHaveKeyword(todolist: any[], keyword: any) {
    if (!keyword) return false;
    for(let index = 0; index < todolist.length; index++) {
      if (todolist[index].title === keyword) {
        return true;
      }
    }
    return false;
  }
}

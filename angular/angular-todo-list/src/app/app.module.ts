import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
// 引入表单相关的模块，使用双向数据绑定
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodolistComponent } from "./components/todolist/todolist.component";

// 引入并配置服务
import { StorageService } from "./services/storage.service";

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

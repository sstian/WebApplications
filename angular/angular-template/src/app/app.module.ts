/* Angular 根模块，用于组装应用 */
// Angular 核心模块
import { NgModule } from '@angular/core';
// 浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';

// 路由组件
import { AppRoutingModule } from './app-routing.module';
// 根组件
import { AppComponent } from './app.component';

// 装饰器，接收元数据对象，用于编译和启动应用
@NgModule({
  // 配置当前项目运行的组件
  declarations: [
    AppComponent
  ],
  // 配置当前模块运行依赖的其他模块
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // 配置当前项目需要的服务
  providers: [],
  // 指定应用的主视图（根组件），通过引导根模块 AppModule 来启动应用
  bootstrap: [AppComponent]
})
// 根模块，不需要导入任何东西，其它组件不需要导入根模块
export class AppModule { }

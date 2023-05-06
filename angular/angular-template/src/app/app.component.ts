import { Component } from '@angular/core';

@Component({
  // 使用该组件的名称
  selector: 'app-root',
  // 关联的html
  templateUrl: './app.component.html',
  // 关联的css
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // 定义属性
  title = 'angular-template';
}

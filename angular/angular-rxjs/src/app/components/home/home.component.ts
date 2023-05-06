import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public request: RequestService) { }

  ngOnInit(): void {
    const data = this.request.getSynchroData();
    console.log(data);

    this.request.getCallbackData((data: any) => { console.log(data); });

    let promiseData = this.request.getPromiseData();
    promiseData.then((data) => { console.log(data); });

    let rxjsData = this.request.getRxJSData();
    let subscription = rxjsData.subscribe((data) => { console.log(data); });

    // 取消订阅
    // Promise创建之后，动作是无法撤回的。
    // Observable创建之后，动作可以通过unsbscribe()方法中途撤回，而且Observable在内部做了智能的处理。
    window.setTimeout(() => { subscription.unsubscribe(); }, 1000);

    // 订阅后多次执行
    // Promise的最终结果要么成功、要么失败，都只能触发一次。
    // Observable可以不断地触发下一个值。
    let rxjsIntervalData = this.request.getRxJSIntervalData();
    rxjsIntervalData.subscribe((data) => { console.log(data); });

    // 工具方法
    let rxjsIntervalNumber = this.request.getRxJSIntervalNumber();
    rxjsIntervalNumber
      .pipe(
        filter((value: any) => value % 2 === 0),
        map((value: any) => value * value)
      )
      .subscribe((data) => { console.log(data); });
  }

}

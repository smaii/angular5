import { Component, OnInit , Input} from '@angular/core';

import {Demo} from '../../demo'

@Component({
  selector: 'app-dame-detail',
  templateUrl: './dame-detail.component.html',
  styleUrls: ['./dame-detail.component.scss']
})
export class DameDetailComponent implements OnInit {
  //你用 @Input 装饰器来让 detail 属性可以在外部的 DemoComponent 中绑定。

  @Input() detail: Demo;

  constructor() { }

  ngOnInit() {

  }

}

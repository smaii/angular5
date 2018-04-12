import { Component, OnInit } from '@angular/core';
//导入 Demo 类。文件不能以.ts结尾
import {Demo} from '../../demo';
import {DemoDatas} from '../../demo-data'  //导入来自demo-data的数据


import { DemoService } from "../../demo.service"; //导入demo。server来获得demo.server的相关数据以及方法,比通过导入demo-data好

//从 Angular 核心库中导入 Component 符号，并为组件类加上 @Component 装饰器。
// @Component 是个装饰器函数，用于为该组件指定 Angular 所需的元数据。
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})

//CSS 元素选择器 app-demo 用来在父组件的模板中匹配 HTML 元素的名称，以识别出该组件。
//ngOnInit 是一个生命周期钩子，Angular 在创建完组件后很快就会调用 ngOnInit。这里是放置初始化逻辑的好地方。
//始终要 export 这个组件类，以便在其它地方（比如 AppModule）导入它。

export class DemoComponent implements OnInit {
  //把组件的 demo 属性的类型重构为 Demo....注意这里demo是一个对象类型的数据
  demo: Demo = {
    id: 404,
    name: 'smabu',
  }
  data = ['a', 'b', 'c']
  demo_datas = DemoDatas //往类中添加一个 demo_datas 属性，这样可以暴露出这些DemoDatas，以供绑定。

  clickData: Demo

  //
  server_datas :Demo[]

  //注入 DemoService 往构造函数中添加一个私有的 demoService，其类型为 DemoService。
  
  constructor(private demoserver:DemoService ) {

    /**这个参数同时做了两件事：
     * 1. 声明了一个私有 demoserver 属性，
     * 2. 把它标记为一个 DemoService 的注入点。
    当 Angular 创建 DemoComponent 时，依赖注入系统就会把这个 demoserver 参数设置为 DemoService 的单例对象。 */
   }
   getDemoDatas():void{
     this.server_datas = this.demoserver.getDemoDatas()
   }

   /*让构造函数保持简单，只做初始化操作，比如把构造函数的参数赋值给属性。 
   构造函数不应该做任何事。 它肯定不能调用某个函数来向远端服务（比如真实的数据服务）发起 HTTP 请求。

    你应该改为在 ngOnInit 生命周期钩子中调用 getDemoDatas()，
    并且等 Angular 构造出 DemoComponent 的实例之后，找个恰当的时机调用 ngOnInit。*/
  ngOnInit() {
    this.getDemoDatas()  //在 ngOnInit 中调用它
  }

  getName(item : Demo):void{
    this.clickData = item
    console.log(item);
  }

}

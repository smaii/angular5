import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Angular 需要知道如何把应用程序的各个部分组合到一起，以及该应用需要哪些其它文件和库。 这些信息被称为元数据（metadata）。
有些元数据位于 @Component 装饰器中，你会把它加到组件类上。 另一些关键性的元数据位于 @NgModule 装饰器中。
最重要的 @NgModule 装饰器位于顶级类 AppModule 上。

Angular CLI 在创建项目的时候就在 src/app/app.module.ts 中生成了一个 AppModule 类。 这里也就是你要添加 FormsModule 的地方。
打开 AppModule (app.module.ts) 并从 @angular/forms 库中导入 FormsModule 符号
然后把 Fo;
import { DameDetailComponent } from './components/dame-detail/dame-detail.component'rmsModule 添加到 @NgModule 元数据的 imports 数组中，这里是该应,
    DameDetailComponent用所需外部模块的列表。 */
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
//对每一个新增的组件进行导入
//每个组件都必须声明在（且只能声明在）一个 NgModule 中。
import { DemoComponent } from './components/demo/demo.component';
import { DameDetailComponent } from './components/dame-detail/dame-detail.component';
import { DemoService } from './demo.service';

@NgModule({
  //组件声明
  declarations: [
    AppComponent,
    DemoComponent,
    DameDetailComponent
  ],
  //外部模块的引用
  imports: [
    BrowserModule,
    FormsModule  //ngModel所需的模块
  ],
  providers: [
    //providers 数组会告诉 Angular 创建 DemoService 的单一、共享的实例，并且把它注入到任何请求注入它的类中。
    DemoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

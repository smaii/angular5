import { Injectable } from '@angular/core';

import { Demo } from "./demo";
import { DemoDatas } from "./demo-data";
/*@Injectable() 服务

注意，这个新的服务导入了 Angular 的 Injectable 符号，并且给这个服务类添加了 @Injectable() 装饰器。

@Injectable() 装饰器告诉 Angular 这个服务本身可能拥有被注入的依赖。 目前它还没有依赖，但是很快就会有了。 无论它会不会有，总是给服务加上这个装饰器都是一种好的做法。

DemoService 可以从任何地方获取数据：Web 服务、本地存储（LocalStorage）或一个模拟的数据源。
*/

@Injectable()

export class DemoService {

  constructor() { }
  
  getDemoDatas():Demo[]{
    return DemoDatas
  }

}

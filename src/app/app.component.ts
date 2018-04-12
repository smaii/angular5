import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title可以在app.component.html中访问到
  title = 'app'
  data = [
    {
      name:'rui.fang',
      age:'25',
      sex:'male'
    },
    {
      name:'rui',
      age:'25',
      sex:'male'
    },
    {
      name:'fang',
      age:'25',
      sex:'male'
    },
  ]

}

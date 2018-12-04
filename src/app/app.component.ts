import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';

  posts = [
      {

        title: 'post1',
          content: ' Lorem ipsum',
          loveits: 0,
          created_at: Date()
      },

      {

          title: 'post2',
          content: ' Lorem ipsum ',
          loveits: 0,
          created_at: Date()
      },

      {

          title: 'post3',
          content: ' Lorem ipsum ',
          loveits: 0,
          created_at: Date()
      },
  ];
  consulter () {
      console.log('consultons');
  }

}

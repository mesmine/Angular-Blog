import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {
    @Input() title: string;
    @Input() content: string;
     loveIt = 0;
    created_at = new Date();

  constructor() { }

  ngOnInit() {
  }
    onLove() {
        this.loveIt = this.loveIt + 1;
          return this.loveIt;
    }

    notLove() {
          this.loveIt = this.loveIt - 1;
      return this.loveIt;
    }
}

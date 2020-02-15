import { Component, OnInit } from '@angular/core';
import { data } from '../lessons';
import { ILesson } from '../I-lesson';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lessons: ILesson[] = data;
  misk: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.lessons.forEach(el => {
      switch (el.type) {
        case 0:
          this.misk.push({
            class: 'fa-video-camera',
            name: 'Дивитись'
          });
          break;
        case 1:
          this.misk.push({
            class: 'fa-play',
            name: 'Слухати'
          });
          break;
        case 2:
          this.misk.push({
            class: 'fa-file-pdf-o',
            name: 'Читати'
          });
          break;
        default:
      }
    });
  }
}

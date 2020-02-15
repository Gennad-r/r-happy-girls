import { Component, OnInit, Input } from '@angular/core';
import { ILesson } from '../I-lesson';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
@Input() item: ILesson;
  constructor() { }

  ngOnInit(): void {
  }

}

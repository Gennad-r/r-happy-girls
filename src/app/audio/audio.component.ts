import { Component, OnInit, Input } from '@angular/core';
import { ILesson } from '../I-lesson';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {
  @Input() item: ILesson;

  constructor() { }

  ngOnInit(): void {
  }

}

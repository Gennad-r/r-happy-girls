import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ILesson } from '../I-lesson';
import {VgAPI} from 'videogular2/compiled/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {
@Input() item: ILesson;
  constructor() { }
}

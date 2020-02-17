import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ILesson } from '../I-lesson';
import {VgAPI} from 'videogular2/compiled/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, OnDestroy {
@Input() item: ILesson;
api:VgAPI;
playing = false;
subs: Subscription[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
    const paused = this.api.getDefaultMedia().subscriptions.pause
      .subscribe(() => {
        this.playing = false;
      });
    this.subs.push(paused);

    const started = this.api.getDefaultMedia().subscriptions.play
      .subscribe(() => {
        this.playing = true;
      });
    this.subs.push(started);
  }
}

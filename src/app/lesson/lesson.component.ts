import { Component, OnInit, Input } from '@angular/core';
import { ILesson } from '../I-lesson';
import { data } from '../lessons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  item: ILesson;
  url: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) {
  }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      this.item = data.find((el: ILesson) => el.url === params.get('url'));
      if (!this.item) {
        this.router.navigate(['/']);
      }
    });
  }

}

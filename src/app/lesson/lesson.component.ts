import { Component, OnInit, Input } from '@angular/core';
import { ILesson } from '../I-lesson';
import { data } from '../lessons';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../main.service';
import { Title } from '@angular/platform-browser';

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
    private router: Router,
    private service: MainService,
    private pageTitle: Title
    ) {
  }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      this.item = data.find((el: ILesson) => el.url === params.get('url'));
      if (!this.item) {
        this.router.navigate(['/']);
        this.service.current$.next(null);
      }
      this.service.current$.next(`Сторінка ${this.item.id} - ${this.item.title}`);
      this.pageTitle.setTitle(`Щоденник щасливих дівчат - ${this.item.title}`);
    });
  }

}

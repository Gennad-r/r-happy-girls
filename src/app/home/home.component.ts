import { Component, OnInit } from '@angular/core';
import { data } from '../lessons';
import { ILesson } from '../I-lesson';
import { MainService } from '../main.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lessons: ILesson[] = data;
  misk: any[] = [];

  constructor(
    private service: MainService,
    private pageTitle: Title

    ) {
  }

  ngOnInit(): void {
    
    this.service.current$.next(null);
    this.pageTitle.setTitle(`Три дні з життя Єви`);

  }
}

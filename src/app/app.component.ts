import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  current = null;

  constructor(private service: MainService) {
  }
  
  ngAfterViewInit(): void {
    this.service.current$.subscribe(c => {
      setTimeout(() => {
        this.current = c
      }, 0)
    });
  }
}

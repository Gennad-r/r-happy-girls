import { Component, OnInit, Input } from '@angular/core';
import { ILesson } from '../I-lesson';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {
  @Input() item: ILesson;
  angel = 0;
  constructor() { }

  ngOnInit(): void {
  }

  rotate() {
    this.angel = !!this.angel ? 0 : 90;
  }

}

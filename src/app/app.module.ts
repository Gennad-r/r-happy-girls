import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// tslint:disable-next-line: import-spacing
import { HttpClientModule } from '@angular/common/http';

// videogular
import {VgCoreModule} from 'videogular2/compiled/core';
import {VgControlsModule} from 'videogular2/compiled/controls';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AudioComponent } from './audio/audio.component';
import { HomeComponent } from './home/home.component';
import { LessonComponent } from './lesson/lesson.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AudioComponent,
    HomeComponent,
    LessonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

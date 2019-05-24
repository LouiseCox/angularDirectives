import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { StudentComponent } from './student/student.component';
import { TaComponent } from './ta/ta.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective,
    StudentComponent,
    TaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

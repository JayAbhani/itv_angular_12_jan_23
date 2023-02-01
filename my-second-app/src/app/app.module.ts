import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { ServicesComponent } from './services/services.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { RemoveCourseComponent } from './courses/remove-course/remove-course.component';
import { AddServiceComponent } from './services/add-service/add-service.component';
import { RemoveServiceComponent } from './services/remove-service/remove-service.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    ServicesComponent,
    AddCourseComponent,
    RemoveCourseComponent,
    AddServiceComponent,
    RemoveServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

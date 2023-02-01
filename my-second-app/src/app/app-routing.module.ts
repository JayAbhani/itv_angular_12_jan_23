import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { CoursesComponent } from './courses/courses.component';
import { AddServiceComponent } from './services/add-service/add-service.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  {
    path: "courses",
    component: CoursesComponent
  },
  {
    path: "services",
    component: ServicesComponent
  },
  {
    path: "courses/add",
    component: AddCourseComponent
  },
  {
    path: "services/add",
    component: AddServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

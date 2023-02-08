import { Component } from '@angular/core';
import { FormGroup, FormControl,  Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-sixth-app';

  myUserName: string | undefined;

  // submitNow(formData: any){
  //   console.log(formData);
  //   console.log(formData.nameEmail);
  // }

  // onSubmit(formData: any){
  //   console.log(formData);
  // }




  signin = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  onSubmit(formData: any){
    console.log(formData);
  }
}

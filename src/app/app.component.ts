import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private postService:PostService, private httpClient:HttpClient){}
  loginForm = new FormGroup(
    {
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', Validators.required)
    }
  )
  getData(loginForm: FormGroup) {
    console.log(this.loginForm)
  }
  // getter methods(property name will call its getter method automatically)
  get username() {
    return this.loginForm.get('username')
  }
  get password() {
    return this.loginForm.get('password')
  }
  // getPostData() {
  //   this.postService.getPostsData().subscribe(data=>console.log(JSON.stringify(data)))
  // }
  getPostData() {
      this.httpClient.get('').subscribe(data=>console.log(JSON.stringify(data)))
     }
}





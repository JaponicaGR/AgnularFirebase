import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {


  }

  private initForm() {

    this.signupForm = this.fb.group({
      username: [''],
      password: [''],
    });

  }

  public submitForm(form: NgForm): void {
    console.log(form);

  }


}

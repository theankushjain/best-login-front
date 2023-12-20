
import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private registerService: RegisterService) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  get f() { return this.registrationForm.controls; }

  onSubmit() {

    console.log(this.registrationForm.value);
    if(this.registrationForm.invalid){
      return;
    }

    this.registerService.saveCredentials(this.registrationForm.value).subscribe({
      next:(response:any) => {
        console.log("User Registration Successful",response)
        alert("User Registration Successful. You can now log in using the Email and Password provided by you.");
        this.resetForm();
      },
      error:(error)=>{
        console.error('Error during user registration:', error);
        alert("Error during user Registration.")
      }
    })}

  resetForm(){
    let control: AbstractControl;
    this.registrationForm.markAsUntouched();
    this.registrationForm.reset();
    Object.keys(this.registrationForm.controls).forEach((name) => {
      control = this.registrationForm.controls[name];
      control.setErrors(null);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submitted = false;

  alertPop = {
    showAlert: false,
    alertType: '',
    showAlertMessage: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onClickSignUp() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const { fullname, email, password } = this.form.value;
    this.authService.register(fullname, email, password).subscribe({
      next: (data) => {
        this.alertPop.showAlert = true;
        this.alertPop.alertType = 'success';
        this.alertPop.showAlertMessage = 'User Registered Sucessfully';
      },
      error: (err) => {
        this.alertPop.showAlert = true;
        this.alertPop.alertType = 'danger';
        this.alertPop.showAlertMessage = err.error.message;
      },
    });
  }
}

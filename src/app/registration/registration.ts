import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
// export class Registration {

// }
 // src/app/registration/registration.component.ts

export class Registration implements OnInit {
  registrationForm!: FormGroup;
  isSubmitting: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    }, { validators: this.passwordMatchValidator });
  }

  // Custom Validator Function: Checks if password and confirmPassword match
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  // Convenience getter for easy access to form fields in the template
  get f() { return this.registrationForm.controls; }

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    console.log('Form Submitted!', this.registrationForm.value);

    // TODO: Integrate an AuthService call here (e.g., this.authService.register(...))
    
    // Simulate API delay
    setTimeout(() => {
        this.isSubmitting = false;
        console.log('Registration complete.');
        // Optional: Reset form or navigate
    }, 1500);
  }
}

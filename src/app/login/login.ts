// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   imports: [],
//   templateUrl: './login.html',
//   styleUrl: './login.css',
// })
// export class Login {

// }

// src/app/login/login.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common'; // Needed for *ngIf

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true, // Modern Angular standalone component
  imports: [ReactiveFormsModule, NgIf] // Import necessary modules
})
export class Login implements OnInit {
  loginForm!: FormGroup;
  isSubmitting: boolean = false;
  loginError: string | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit(): void {
    this.loginError = null; // Clear previous errors
    
    if (this.loginForm.invalid) {
      // Mark all fields as touched to display validation messages
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const { email, password } = this.loginForm.value;
    console.log('Attempting login for:', email);

    // --- Mock API Call Simulation ---
    // In a real application, you would call an AuthService here:
    // this.authService.login(email, password).subscribe({ ... })
    
    setTimeout(() => {
        this.isSubmitting = false;
        
        // Mock successful login for demonstration
        if (email === 'user@example.com' && password === 'password123') {
             console.log('Login successful!');
             // TODO: Navigate to dashboard
        } else {
             this.loginError = 'Invalid email or password.';
        }
        
    }, 1500);
  }
}

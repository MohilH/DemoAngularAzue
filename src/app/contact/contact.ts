// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-contact',
//   imports: [],
//   templateUrl: './contact.html',
//   styleUrl: './contact.css',
// })
// export class Contact {

// }

// src/app/contact-us/contact-us.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  //standalone: true, // Modern Angular standalone component
  imports: [ReactiveFormsModule, NgIf] 
})
export class Contact implements OnInit {
  contactForm!: FormGroup;
  isSubmitting: boolean = false;
  submissionSuccess: boolean = false;
  submissionError: string | null = null;

  companyInfo = {
    address: '101 Nexus Tower, Tech Park, Silicon Valley, CA 94043',
    phone: '+1 (555) AI-TECH',
    email: 'hello@aitechsolutions.com',
    support: 'support@aitechsolutions.com'
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit(): void {
    this.submissionSuccess = false;
    this.submissionError = null;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    
    // --- Mock API Call Simulation ---
    console.log('Sending message:', this.contactForm.value);
    
    setTimeout(() => {
      this.isSubmitting = false;
      this.submissionSuccess = true;
      this.contactForm.reset();
      
      // In a real application, check for API error and set this.submissionError instead
    }, 2000);
  }
}
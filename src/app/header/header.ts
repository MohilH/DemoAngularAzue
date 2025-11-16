import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf, NgFor } from '@angular/common'; // Needed for *ngIf and *ngFor

// @Component({
//   selector: 'app-header',
//   imports: [RouterLink , RouterLinkActive],
//   templateUrl: './header.html',
//   styleUrl: './header.css',
// })
// export class Header {

// }

// src/app/header/header.component.ts

// import { Component } from '@angular/core';
// import { NgIf, NgFor } from '@angular/common'; // Needed for *ngIf and *ngFor
// import { RouterLink } from '@angular/router'; // Used for navigation links

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true,
  imports: [ NgFor, RouterLink] // Import necessary standalone modules
})
export class Header {
  isMenuOpen: boolean = false;

  // Define your navigation links
  navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login' },
    { name: 'Registration', path: '/registration' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
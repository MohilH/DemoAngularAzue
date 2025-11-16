// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-about',
//   imports: [],
//   templateUrl: './about.html',
//   styleUrl: './about.css',
// })
// export class About {

// }

// src/app/about-us/about-us.component.ts

import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
 // standalone: true, // Modern Angular standalone component
  imports: [NgFor] 
})
export class About implements OnInit {

  // Mock data for team members
  teamMembers: TeamMember[] = [
    {
      name: 'Dr. Evelyn Reed',
      role: 'CEO & Founder',
      bio: 'A visionary in tech innovation with over 20 years of experience driving market disruption.',
      image: 'evelyn_reed.jpg' // Placeholder image name
    },
    {
      name: 'Marcus Chen',
      role: 'Chief Technology Officer (CTO)',
      bio: 'Leads our engineering team, specializing in scalable cloud infrastructure and AI integration.',
      image: 'marcus_chen.jpg'
    },
    {
      name: 'Sarah Kim',
      role: 'Head of Product Design',
      bio: 'Passionate about user-centric design, ensuring all our products are intuitive and delightful to use.',
      image: 'sarah_kim.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // You might fetch testimonials or company history here
  }
}

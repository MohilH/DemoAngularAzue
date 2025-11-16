// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   imports: [],
//   templateUrl: './home.html',
//   styleUrl: './home.css',
// })
// export class Home {

// }

// src/app/home/home.component.ts

import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor, NgIf ,NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';

interface MetricCard {
  title: string;
  value: string;
  icon: string;
  color: string;
}

interface QuickLink {
  title: string;
  description: string;
  path: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  //standalone: true, // Use standalone component structure
  imports: [NgFor, NgIf, RouterLink , NgStyle , NgClass] 
})
export class Home implements OnInit {
  userName: string = 'Alex Johnson';
  
  metricCards: MetricCard[] = [
    { title: 'Total Projects', value: '14', icon: 'project', color: '#3498db' },
    { title: 'Pending Tasks', value: '5', icon: 'task', color: '#e74c3c' },
    { title: 'Messages', value: '7', icon: 'message', color: '#2ecc71' },
    { title: 'Disk Usage', value: '45%', icon: 'disk', color: '#f39c12' },
  ];

  quickLinks: QuickLink[] = [
    { title: 'Manage Profile', description: 'Update your contact information and settings.', path: '/profile' },
    { title: 'View Reports', description: 'Access detailed analytics and monthly reports.', path: '/reports' },
    { title: 'Start New Project', description: 'Quickly initiate a new project pipeline.', path: '/new-project' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialization logic (e.g., fetching real user data)
  }
}
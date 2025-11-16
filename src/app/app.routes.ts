import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { About } from './about/about';
import { Login } from './login/login';
import { Contact } from './contact/contact';
import { Home } from './home/home';
 
 
import { Registration } from './registration/registration';
// import { Registration } from './registration/registration';
 
export const routes: Routes = [
   {path:'about',component:About},
  {path:'login',component:Login},
  {path:'contact',component:Contact},
 // {path:'registration',component:Registration},
  {path:'',component:Home},
 {path:'registration',component:Registration}
  
];


// ... in your @NgModule decorator:
imports: [
  // ... other modules
  ReactiveFormsModule
]
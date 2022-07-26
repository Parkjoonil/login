import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
]

// const routes: Routes = [
//   {
//     path: '',
//     component: LoginComponent,
//     children: [
//       {
//         path: '',
//         redirectTo: 'login',
//         pathMatch: 'full',
//       },
//       {
//         path: 'login',
//         loadChildren: () => import('./login/login.component').then(m => m.LoginComponent),
//       },
//       {
//         path: 'signup',
//         loadChildren: () => import('./signup/signup.component').then(m => m.SignupComponent),
//       },
//     ]
    
//   },
//   {
//     path: '',
//     canActivate: [AuthGuard],
//     children: [
//       {
//         path: 'main',
//         loadChildren: () => import('./main/main.component').then(m => m.MainComponent),
//       }
//     ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

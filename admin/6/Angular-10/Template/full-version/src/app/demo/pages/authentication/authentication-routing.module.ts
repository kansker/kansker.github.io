import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'signup',
        loadChildren: () => import('./auth-signup/auth-signup.module').then(m => m.AuthSignupModule)
      },
      {
        path: 'signup-v2',
        loadChildren: () => import('./auth-signup-v2/auth-signup-v2.module').then(m => m.AuthSignupV2Module)
      },
      {
        path: 'signin',
        loadChildren: () => import('./auth-signin/auth-signin.module').then(m => m.AuthSigninModule)
      },
      {
        path: 'signin-v2',
        loadChildren: () => import('./auth-signin-v2/auth-signin-v2.module').then(m => m.AuthSigninV2Module)
      },
      {
        path: 'signin-v3',
        loadChildren: () => import('./auth-signin-v3/auth-signin-v3.module').then(m => m.AuthSigninV3Module)
      },
      {
        path: 'signin-v4',
        loadChildren: () => import('./auth-signin-v4/auth-signin-v4.module').then(m => m.AuthSigninV4Module)
      },
      {
        path: 'signin-v5',
        loadChildren: () => import('./auth-signin-v5/auth-signin-v5.module').then(m => m.AuthSigninV5Module)
      },
      {
        path: 'reset-password',
        loadChildren: () => import('./auth-reset-password/auth-reset-password.module').then(m => m.AuthResetPasswordModule)
      },
      {
        path: 'change-password',
        loadChildren: () => import('./auth-change-password/auth-change-password.module').then(m => m.AuthChangePasswordModule)
      },
      {
        path: 'personal-information',
        loadChildren: () => import('./auth-personal-info/auth-personal-info.module').then(m => m.AuthPersonalInfoModule)
      },
      {
        path: 'profile-settings',
        loadChildren: () => import('./auth-profile-settings/auth-profile-settings.module').then(m => m.AuthProfileSettingsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

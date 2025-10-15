import { Routes } from '@angular/router';
import { Properties } from './core/components/properties/properties.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './core/components/properties/login/login.component';

export const routes: Routes = [
  {
          path: 'home',
         component: Properties,
         canActivate:[AuthGuard]
  },
  {
          path: 'login',
         component: LoginComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

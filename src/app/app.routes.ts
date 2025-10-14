import { Routes } from '@angular/router';
import { Properties } from './core/components/properties/properties.component';

export const routes: Routes = [
    {
          path: 'properties',
         component: Properties,
    },
     { path: '', redirectTo: 'properties', pathMatch: 'full' },
  { path: '**', redirectTo: 'properties' },
];

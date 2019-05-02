import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  { 
    path: 'contacts', 
    children: [
      { 
        path: '', 
        loadChildren: './pages/contacts/list/list.module#ListPageModule',
        canActivate: [AuthGuard]
      },
      { 
        path: 'new', 
        loadChildren: './pages/contacts/add-contact/add-contact.module#AddContactPageModule' 
      },
      { 
        path: ':id', 
        loadChildren: './pages/contacts/contact-details/contact-details.module#ContactDetailsPageModule' 
      }
    ]
  },
  { path: 'calendar', loadChildren: './pages/calendar/calendar.module#CalendarPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'mycalendar', loadChildren: './pages/mycalendar/mycalendar.module#MycalendarPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

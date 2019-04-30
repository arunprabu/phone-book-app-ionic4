import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
        loadChildren: './pages/contacts/list/list.module#ListPageModule' 
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
  { path: 'calendar', loadChildren: './pages/calendar/calendar.module#CalendarPageModule' }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

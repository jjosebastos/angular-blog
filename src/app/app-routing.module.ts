import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { MatIconModule } from '@angular/material/icon';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'content/:id',
    component: ContentComponent  
  },
  {
    path:'contact',
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, MatIconModule]
})
export class AppRoutingModule { }

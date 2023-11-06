import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { Error404Component } from './pages/error404/error404.component';
import { NoteComponent } from './pages/notes/note.component';
import { NewComponent } from './pages/new/new.component';
import { LoginComponent } from './pages/login/login.component';



const routes: Routes = [
  {path:"home", component:NoteComponent ,
  canActivate:[LoginGuard]},
  {path:"new", component:NewComponent,
  canActivate:[LoginGuard]},
  {path:"about", loadComponent: ()=>import('./pages/about/about.component').then(c=>c.AboutComponent)},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'login', component:LoginComponent,
    canActivate:[LoginGuard]},
  {path:'**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

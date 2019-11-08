import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharDetailComponent } from './char-detail/char-detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent},  
  { path: 'list', component: CharacterListComponent},
  { path: 'details/:uri', component: CharDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

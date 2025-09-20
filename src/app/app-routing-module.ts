import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { CrudComponent } from './crud-component/crud-component';
import { DisciplineComponent } from './discipline-component/discipline-component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'disciplines', component: DisciplineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

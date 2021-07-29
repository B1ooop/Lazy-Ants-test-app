import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotationComponent } from './components/notation/notation.component';

const routes: Routes = [
  { path: 'edit/:id', component: NotationComponent, },
  { path: 'create', component: NotationComponent, },

  { path: 'edit/:id', component: NotationComponent },
  { path: 'create', component: NotationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

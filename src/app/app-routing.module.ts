import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { PlanyComponent } from './plany/plany.component';

const routes: Routes = [
  {path: '', title: 'Ksylowa Witrynka Testowa!', component: MainComponent},
  {path: 'plany', title: 'Jakieś plany życiowe', component: PlanyComponent},
  {path: '**', title: 'Błąd 404!', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

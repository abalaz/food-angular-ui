import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { LogningPageComponent } from './components/logning-page/logning-page.component';
const routes: Routes = [
  {path: '', component: LogningPageComponent },
  {path: 'home', component: IndexPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

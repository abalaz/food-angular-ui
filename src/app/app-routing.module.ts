import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { LogningPageComponent } from './components/logning-page/logning-page.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { LogoutPageComponent } from './components/logout-page/logout-page.component';
const routes: Routes = [
  {path: '', component: LogningPageComponent },
  {path: 'home', component: IndexPageComponent} ,
  {path: 'menu', component: MenuPageComponent },
  {path:'articles', component: ArticlesComponent},
  {path:'setting', component: LogoutPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

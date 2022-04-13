import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogningPageComponent } from './components/logning-page/logning-page.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
@NgModule({
  declarations: [
    AppComponent,
    LogningPageComponent,
    IndexPageComponent,
    MenuPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

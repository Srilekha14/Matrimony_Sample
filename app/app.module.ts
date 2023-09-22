import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicSearch } from './ionic-search/image-view.component';
import { IonicViewComponent } from './ionic-view/ionic-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SwipeScreenComponent } from './swipe-screen/swipe-screen.component';
import { NgToastModule } from 'ng-angular-popup';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    IonicSearch,
    IonicViewComponent,
    SwipeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgToastModule,
    IonicModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

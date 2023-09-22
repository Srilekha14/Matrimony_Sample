import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicSearch } from './ionic-search/image-view.component';
import { IonicViewComponent } from './ionic-view/ionic-view.component';
import { SwipeScreenComponent } from './swipe-screen/swipe-screen.component';

const routes: Routes = [
  {path: '',redirectTo: '',pathMatch: 'full'},
  { path: 'home', component: IonicSearch },
  { path: 'view/:id/:name', component: IonicViewComponent},
  { path: 'swipe/:id/:name', component: SwipeScreenComponent},
  { path: '**', redirectTo: '' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

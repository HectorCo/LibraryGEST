import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';
import { ProductListComponent } from './products/product-list/product-list.component'

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'products', component:ProductListComponent},
  {
    path: '404',
    component: NotfoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

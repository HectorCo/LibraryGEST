import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommonsRoutingModule } from './commons-routing.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [HomeComponent, NavBarComponent, NotfoundComponent],
  imports: [
    CommonModule,
    CommonsRoutingModule,
    RouterModule
  ],
  exports: [HomeComponent, NavBarComponent, NotfoundComponent]
})
export class CommonsModule { }

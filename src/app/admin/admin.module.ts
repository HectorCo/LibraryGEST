import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [AdminListComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [AdminListComponent, AdminComponent]
})
export class AdminModule { }

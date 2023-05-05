import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MenuComponent } from './menu/menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from "@angular/material/menu";
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    MenuComponent],
  exports: [
    MenuComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    AppRoutingModule
  ]
})
export class LayoutModule { }

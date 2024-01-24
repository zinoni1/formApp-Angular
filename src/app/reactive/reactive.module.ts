import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { FocusPageComponent } from './pages/focus-product/focus-product.component';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
 
  declarations: [
    BasicPageComponent,
    DynamicPageComponent,
    SwitchesPageComponent,
    TablePageComponent,
    FocusPageComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    TableModule,
    ButtonModule,
    MultiSelectModule,
    FormsModule,
    TagModule,
    DropdownModule,
    DataViewModule
    
    
    
  ]
})
export class ReactiveModule { }

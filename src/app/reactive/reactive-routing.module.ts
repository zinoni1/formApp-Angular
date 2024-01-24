import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { FocusPageComponent } from './pages/focus-product/focus-product.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basic', component: BasicPageComponent},
      { path: 'dynamic', component: DynamicPageComponent},
      { path: 'switches', component: SwitchesPageComponent},
      { path: 'table', component: TablePageComponent},
      { path: 'detalles/:id', component: FocusPageComponent},
      { path: '**', redirectTo: 'basic'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }

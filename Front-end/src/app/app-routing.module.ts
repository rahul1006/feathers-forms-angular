import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contract',
    pathMatch: 'full',
 },
  {
    path: 'contract',
    loadChildren: './contract/contract.module#ContractModule',
  },
  {
    path: '**', redirectTo: 'contract', pathMatch: 'full',
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

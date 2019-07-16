import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { ContractListComponent } from './contract-list/contract-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'contract-form', pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'contract-form',
        component: ContractFormComponent
      },
      {
        path: 'contract-list',
        component: ContractListComponent
      }
    ]
  },
  {
    path: '**', redirectTo: 'contract-form', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }

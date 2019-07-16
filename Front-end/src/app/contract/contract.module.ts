import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ContractRoutingModule } from './contract-routing.module';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { ContractListComponent } from './contract-list/contract-list.component';

@NgModule({
  declarations: [ContractFormComponent, ContractListComponent],
  imports: [
    CommonModule,
    ContractRoutingModule,
    SharedModule
  ]
})
export class ContractModule { }

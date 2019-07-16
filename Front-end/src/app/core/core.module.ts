import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractService } from './services/contract/contract.service';
import { EventBus } from './services/contract/event-bus';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ContractService, EventBus]
})
export class CoreModule { }

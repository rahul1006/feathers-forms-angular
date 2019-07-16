import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { ContractService } from './../../core/services/contract/contract.service';
import { EventBus } from './../../core/services/contract/event-bus';
import { Contract } from './../model/contract';

const ELEMENT_DATA: Contract[] = [
  { gender: 'Mr', name: 'ABC', dob: new Date(), email: 'aa@aa.com', budget: 100 },
  { gender: 'Mrs', name: 'ABC', dob: new Date(), email: 'aadfvv@aa.com', budget: 100 }
];

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss']
})
export class ContractListComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['name', 'dob', 'email', 'budget', 'action'];
  dataSource = new MatTableDataSource([]);
  subscriptions: Subscription[];

  constructor(
    private contractService: ContractService,
    private eventBus: EventBus
  ) { }

  ngOnInit() {
    this.subscriptions = [];
    this.getContracts();
  }

  getContracts() {
    this.subscriptions.push(this.contractService.getContracts().subscribe(response => {
      console.log('Data retrived successfully');
      this.dataSource.data = response.data;
    }, error => {
      console.error('Error occured ', error);
    }));
  }

  viewContract(contract: Contract) {
    this.eventBus.viewContract(contract);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}

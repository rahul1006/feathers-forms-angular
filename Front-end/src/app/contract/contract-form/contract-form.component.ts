import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContractService } from './../../core/services/contract/contract.service';
import { EventBus } from './../../core/services/contract/event-bus';
import { Contract } from './../model/contract';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.scss']
})
export class ContractFormComponent implements OnInit, OnDestroy {

  contractForm: FormGroup;
  currentDate: Date;
  viewMode = false;
  subscriptions: Subscription[];

  constructor(
    private fb: FormBuilder,
    private contractService: ContractService,
    private router: Router,
    private eventBus: EventBus
  ) { }

  ngOnInit() {
    this.subscriptions = [];
    this.currentDate = new Date();
    this.createForm();
    this.subscriptions.push(this.eventBus.contractSelected$.subscribe((selectedContract: Contract) => {
      if (selectedContract) {
        this.contractForm.patchValue(selectedContract);
        this.viewMode = true;
      }
    }));
  }

  createForm() {
    this.contractForm = this.fb.group({
      name: [null, Validators.required],
      dob: [null, Validators.required],
      email: [null, Validators.required],
      gender: [null, Validators.required],
      budget: [null, Validators.required]
    });
  }

  submit() {
    const data: Contract = this.contractForm.getRawValue();
    this.subscriptions.push(this.contractService.saveContract(data).subscribe(response => {
      console.log('Data saved successfully');
      this.router.navigate(['contract/contract-list']);
    }, error => {
      console.error('Error occured ', error);
    }));
  }

  createNewContract() {
    this.contractForm.reset();
    this.viewMode = false;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}

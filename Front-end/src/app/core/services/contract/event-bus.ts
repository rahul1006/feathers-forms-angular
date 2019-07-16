import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class EventBus {

    private contractSource = new BehaviorSubject(null);
    contractSelected$ = this.contractSource.asObservable();

    viewContract(contract: any) {
        this.contractSource.next(contract);
    }
}

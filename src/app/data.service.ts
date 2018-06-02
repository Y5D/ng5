import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

  private goles = new BehaviorSubject<any>(['I will set new gole','Do not set new goal implement']);
  goal = this.goles.asObservable();

  constructor() {
   }

   changeGoals(goal)
   {
     this.goles.next(goal);
   }
}

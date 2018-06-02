import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,stagger,query } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[

    trigger('goles',[
      transition('* => *',[
        query(':enter',style({ opacity : 0}), ({ optional:true})),

        query(':enter', stagger('300ms',[
          animate('.6s ease-in', keyframes([
            style({ opacity:0, transform: 'trasnslateY(-75%)', offset : 0}),
            style({ opacity:.5, transform: 'trasnslateY(35px)', offset : .3}),
            style({ opacity:1, transform: 'trasnslateY(0)', offset : 1}),
          ]))
        ]), { optional: true}),

        query(':leave', stagger('300ms',[
          animate('.6s ease-in', keyframes([
            style({ opacity:1, transform: 'trasnslateY(0)', offset : 0}),
            style({ opacity:.5, transform: 'trasnslateY(35px)', offset : .3}),
            style({ opacity:0, transform: 'trasnslateY(-75%)', offset : 1}),
          ]))
        ]), { optional: true})
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {

  iCounter : number = -1;
  itemCount : number = 0;
  btnText : string = "Add Item List";
  getText : string = "";
  goles = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goles = res);
    this.itemCount = this.goles.length;
    this._data.changeGoals(this.goles);
  }

  addItem(){
    this.goles.push(this.getText);
    this.getText = "";
    this.itemCount = this.goles.length;
    this._data.changeGoals(this.goles);
  }

  removeItem(i : number){
    this.goles.splice(i,1);
    this.itemCount = this.goles.length;
    this._data.changeGoals(this.goles);
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { SampleModel} from './sampleobj';
@Component({
    selector: 'event-catch',
    templateUrl: './event-catch.html'
  })

export class eventcatchComponent implements OnInit{
    emittedctr: number = 0;
    emitsampobj: SampleModel = {
        name: "",
        phone: "",
        email: ""
    };
    constructor(private dataService: DataService) {
        
    }
    ngOnInit() {
        //console.log("ngOnInit  - data is ${this.data}: " + this.data);
    }
    displayCounter(count) {
        console.log(count);
        this.emittedctr = count;
        
    }
    updateObject(sampobj) {
        console.log(sampobj);
        this.emitsampobj.email = sampobj.email;
        
    }

}
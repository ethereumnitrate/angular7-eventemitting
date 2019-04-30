import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { SampleModel} from './sampleobj';

@Component({
    selector: 'event-emit',
    templateUrl: './event-emit.html'
  })
    
export class eventemitComponent implements OnInit{
    
    @Output() valueChange = new EventEmitter();
    @Output() objChange = new EventEmitter<SampleModel>();
    counter = 0;
    emailAddr:string;
     samplobj:SampleModel = {
        name: "",
        phone: "",
        email: ""
    };
    constructor(private dataService: DataService) {
        
    }
    ngOnInit() {
        this.samplobj.email = "steven.mike@gmail.com";
        //console.log("ngOnInit  - data is ${this.data}: " + this.data);
    }
    valueChanged() { // You can give any function name
        this.counter = this.counter + 1;
        this.samplobj.email = this.emailAddr;
        this.valueChange.emit(this.counter);
        this.objChange.emit(this.samplobj);
    }

}
import { Component, OnInit } from '@angular/core';

import { LogService } from '../../services/log.service';

import { Log } from '../../models/Log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: any;

  isNew: boolean = true;

  constructor(private logService: LogService) { }

  ngOnInit() {
    //Subscribe to the selectedLog observable
    this.logService.selectedLog.subscribe(log => {
      if(log.id !== null){
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }

  onSubmit(){
   // Check if new log
   if(this.isNew){
     // Create a new log
      const newLog = {
        id: this.generateId(),
        text: this.text,
        date: new Date()
      }  
      // Add Log
      this.logService.addLog(newLog);
     } else {
        // Create log to be updated
        const updLog = {
          id: this.id,
          text: this.text,
          date: new Date()
        }
        // Update Log
        this.logService.updateLog(updLog);
      }

      //Clear state
      this.clearState();
  }
  
  clearState(){
    this.isNew = true;
    this.id='';
    this.text='';
    this.date='';
    this.logService.clearState();
  }

  generateId(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
  }

}

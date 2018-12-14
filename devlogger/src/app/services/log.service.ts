import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { of, Observable } from 'rxjs';

import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs:Log[];

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<Boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() { 
    // this.logs = [
    //   {id: '1', text: 'Generated components', date: new Date('12/21/2018 3:54:56')},
    //   {id: '2', text: 'Added Bootstrap', date: new Date('11/15/2013 3:55:56')},
    //   {id: '3', text: 'Added Logs Component', date: new Date('10/10/2011 3:30:56')}
    // ]
    this.logs = [];
  }

  getLogs(): Observable<Log[]>{
    if(localStorage.getItem('logs') === null){
      this.logs = [];
    } else {
      this.logs = JSON.parse(localStorage.getItem('logs'));
    }
    return of(this.logs.sort((a, b) =>{
      return b.date = a.date;
    }));
  }

  setFormLog(log: Log){
    this.logSource.next(log);
  }

  addLog(log: Log){
    this.logs.unshift(log);

    //add to Local Storage
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  updateLog(log: Log){
    this.logs.forEach((cur, index) => {
      if(log.id === cur.id){
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
    //add to Local Storage
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  deleteLog(log: Log){
    this.logs.forEach((cur, index) => {
      if(log.id === cur.id){
        this.logs.splice(index, 1);
      }
    });
    //Delete to Local Storage
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  clearState(){
    this.stateSource.next(true);
  }
}

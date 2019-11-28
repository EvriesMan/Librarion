import { Injectable } from '@angular/core';

export interface Task{
  id:number;
  text:string;
  completed:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  taskArray: Task[] = [
    {id: 1, text:"Сделать свой сайт" , completed:false},
    {id: 2, text:"Сделать что-нибудь", completed:false},
    {id: 3, text:"ПОЧЕМУ НЕ РАБОТАЕТ", completed:true}
  ]
  Change(id:number) {
    const indx = this.taskArray.findIndex(t => t.id === id)
    this.taskArray[indx].completed = !this.taskArray[indx].completed;
  }
    

  constructor() { }
}

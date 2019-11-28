import { Component, OnInit } from '@angular/core';

import {TodoService} from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {

constructor(public todoService:TodoService){}

OnChange(id:number){
  this.todoService.Change(id);
}

}

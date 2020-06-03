import { Injectable } from '@angular/core';
import { Task } from 'src/app/model/Task';
import { Tasklist } from 'src/app/model/Tasklist';

@Injectable({
  providedIn: 'root',
})
export class TasklistService {
  currentTasklist: Tasklist;
  selected: Task;

  constructor() {}

  addTask() {
    const task: Task = {
      description: '',
      inputMode: true,
      complete: false,
    };
    this.currentTasklist.tasks.push(task);
    if (this.selected != null) {
      this.completeEdit();
    }
    this.selected = task;
  }

  completeTask(id: number) {
    //deletovanje taska po id-u iz baze
    console.log(1);
    this.currentTasklist.tasks.splice(this.currentTasklist.tasks.indexOf(this.selected), 1);
    this.selected = null;
  }

  completeSubtask(task: Task, id: number) {
    //
  }

  selectTask(task: Task) {
    console.log(task);
    if (this.selected != null && this.selected !== task) {
      this.completeEdit();
    }
    this.selected = task;
  }

  deselectTask() {
    if (this.selected != null) {
      if (this.selected.inputMode) {
        this.completeEdit();
      }
      this.selected = null;
    }
  }

  completeEdit() {
    if (this.selected.description === '') {
      this.completeTask(this.selected.id);
    } else {
      this.selected.inputMode = false;
    }
  }

  
}

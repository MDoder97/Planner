import { Component, OnInit, Input, Output } from '@angular/core';
import { Task } from 'src/app/model/Task';
import { TasklistService } from 'src/app/core/services/tasklist.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() completeEvent: EventEmitter<number> = new EventEmitter();


  constructor(public tasklistService: TasklistService) { }

  ngOnInit() {
  }

  selectTask() {
    this.tasklistService.selectTask(this.task);
  }

  sendCompletion() {
    this.completeEvent.emit(this.task.id);
  }

  completeSubtask(id: number) {
    this.tasklistService.completeSubtask(this.task, id);
  }
}

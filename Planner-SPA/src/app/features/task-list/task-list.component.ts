import {Component, OnInit, Input} from '@angular/core';
import { Tasklist } from 'src/app/model/Tasklist';
import { TasklistService } from 'src/app/core/services/tasklist.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TasklistComponent implements OnInit {
  @Input() tasklist: Tasklist;
  @Input() isActive: boolean;

  constructor(public tasklistService: TasklistService) {
  }

  ngOnInit() {}

  addTask() {
    this.tasklistService.addTask();
  }

  deselect() {
    if (this.isActive) {
      this.tasklistService.deselectTask();
    }
  }

  completeTask(id: number) {
    this.tasklistService.completeTask(id);
  }
}

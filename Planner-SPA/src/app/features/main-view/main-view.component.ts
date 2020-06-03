import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { Tasklist } from 'src/app/model/Tasklist';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateListComponent } from '../create-list/create-list.component';
import { TasklistService } from 'src/app/core/services/tasklist.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  membersDropdown = false;
  projectsDropdown = false;
  sidebarOpen = false;
  openSearch = false;
  tasklist: Tasklist = {
    name: 'Schism Main',
    tasks: [],
  };

  tasklists: Tasklist[] = [this.tasklist];

  constructor(
    private listDialog: MatDialog,
    private auth: AuthService,
    private router: Router,
    private tasklistService: TasklistService
  ) {}

  ngOnInit(): void {
    if (!this.auth.loggedIn()) {
      this.logout();
    }
    this.tasklistService.currentTasklist = this.tasklists[0];
  }

  currentList(event) {
    const tasklist = this.tasklists.find(x => x.name === event.tab.textLabel);
    console.log(event.tab.textLabel);
    this.tasklistService.currentTasklist = tasklist;
  }

  openDialog(type: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.backdropClass = 'backdrop';
    dialogConfig.data = {
      listType: type,
    };
    const dialogRef = this.listDialog.open(CreateListComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      this.addList(data);
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  addList(data: any) {
    const taskList: Tasklist = {
      name: data.listName,
      tasks: [],
    };
    this.tasklists.push(taskList);
  }

  @HostListener('window:keydown.enter', ['$event'])
  onEnterDown(event: KeyboardEvent) {
    if (this.openSearch) {
      this.openSearch = false;
    } else if (this.tasklistService.selected == null || !this.tasklistService.selected.inputMode) {
      this.tasklistService.addTask();
    } else {
      this.tasklistService.completeEdit();
    }
  }

  @HostListener('window:keydown.delete', ['$event'])
  onDelDown(event: KeyboardEvent) {
    this.tasklistService.completeTask(this.tasklistService.selected.id);
  }
}

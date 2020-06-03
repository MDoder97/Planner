import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { MainViewComponent } from './main-view/main-view.component';
import { SharedModule } from '../shared/shared.module';
import { TasklistComponent } from './task-list/task-list.component';
import { CreateListComponent } from './create-list/create-list.component';
import { CompleteBoxComponent } from './icons/complete-box/complete-box.component';
import { TaskItemComponent } from './task-item/task-item.component';



@NgModule({
  declarations: [
    MainViewComponent,
    TasklistComponent,
    CreateListComponent,
    CompleteBoxComponent,
    TaskItemComponent
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    SharedModule
  ]
})
export class WorkspaceModule { }

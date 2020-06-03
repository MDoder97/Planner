import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {

  listName: string;
  listType: string;

  constructor(private dialogRef: MatDialogRef<CreateListComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.listType = data.listType;
  }

  ngOnInit() {
  }

  create() {
    const data = {
      listName: this.listName
    };
    this.dialogRef.close(data);
  }
}

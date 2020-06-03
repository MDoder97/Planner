import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-complete-box',
  templateUrl: './complete-box.component.html',
  styleUrls: ['./complete-box.component.scss']
})
export class CompleteBoxComponent implements OnInit {
  type = 'square';

  @Output() completion: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendCompletion() {
    this.completion.emit(true);
  }
}

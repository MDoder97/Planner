import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {
  faSquare as farSquare,
  faCheckSquare as farCheckSquare,
  faPlusSquare as farPlusSquare,
} from '@fortawesome/free-regular-svg-icons';
import { faBuffer as fabBuffer } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faTasks, faUsers, faCog, faBell, faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FontAwesomeModule,
    ClickOutsideModule,
  ],
  exports: [FormsModule, MaterialModule, FontAwesomeModule, ClickOutsideModule],
})
export class SharedModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(
      farSquare,
      farCheckSquare,
      farPlusSquare,
      faPlus,
      faTasks,
      fabBuffer,
      faUsers,
      faCog,
      faBell,
      faUserCircle,
      faSearch
    );
  }
}

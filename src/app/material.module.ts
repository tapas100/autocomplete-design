import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatCheckboxModule, MatListModule, MatButtonModule, MatRippleModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatPaginatorModule, MatTableModule, MatSlideToggleModule, MatAutocompleteModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatSlideToggleModule,
    MatAutocompleteModule
  ],
  declarations: [],
  exports:[
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatSlideToggleModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule { }

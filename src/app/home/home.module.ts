import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightPipe } from '../pipes/highlight.pipe';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ComponentsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent,HighlightPipe],
  exports:[HomeComponent],
  providers:[]
})
export class HomeModule { }

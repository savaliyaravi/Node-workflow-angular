import { NodeComponent } from './node/node.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkflowComponent } from './workflow/workflow.component';

@NgModule({
   declarations: [
      AppComponent,
      NodeComponent,
      WorkflowComponent
   ],
   imports: [
	 BrowserModule,
	 AppRoutingModule,
	 HttpModule,
	 FormsModule,
	 ReactiveFormsModule
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

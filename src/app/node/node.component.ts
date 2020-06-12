import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  nodeTitle = ['nodeTitle1', 'nodeTitle2', 'nodeTitle3'];
  nodeContent = ['nodeContent2', 'nodeContent2', 'nodeContent3'];
  
  disableinput = false;

  check(form: NgForm){
    let count=0;
    console.log(form.controls['nodeTitle1']);
    for (let i=0; i< this.nodeTitle.length; i++){
      if (form.controls[this.nodeTitle[i]].value != null && form.controls[this.nodeContent[i]].value != null){
          count++;
          console.log(form.controls[this.nodeTitle[i]].value);
      }
      else{
        for (let i=count; i<this.nodeTitle.length; i++){
            form.controls[this.nodeTitle[i]].disable;
        }

      }
    }
  }

}

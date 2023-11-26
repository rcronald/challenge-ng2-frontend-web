import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Resource } from '../app.component';

@Component({
  selector: "resource-table",
  templateUrl: "./resourceTable.component.html",
  styleUrls: ["./resourceTable.component.scss"]
})
export class ResourceTable implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}

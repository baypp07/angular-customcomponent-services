import { Component } from "@angular/core";
import { Myservice } from "./test.service";

@Component({
  selector: "custom",
  template: `
    <h2>{{ "this is : " + getTitle() }}</h2>
    <ul *ngFor="let exemple of exemples">
      <li>{{ exemple }}</li>
    </ul>
  `
})
export class TestComponent {
  title = "liste of my exemple ngFor";
  exemples;

  getTitle() {
    return this.title;
  }

  constructor(service: Myservice) {
    // use this in case that you haven't import service in module
    //let service = new Myservice();
    this.exemples = service.getList();
  }
}

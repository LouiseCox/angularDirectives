import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-directives";

  friends = [
    { name: "John" },
    { name: "Paul" },
    { name: "Jose" },
    { name: "Ben" },
    { name: "Rose" }
  ];

  activeTab = "ta";
  setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }
}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { TestComponent } from "./test.component";
import { Myservice } from "./test.service";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TestComponent],
  providers: [Myservice],
  bootstrap: [AppComponent]
})
export class AppModule {}

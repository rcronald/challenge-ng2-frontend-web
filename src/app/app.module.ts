
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ResourceDetails } from './resourceDetails/resourceDetails.component';
import { ResourceTable } from './resourceTable/resourceTable.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourceTable,
    ResourceDetails
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

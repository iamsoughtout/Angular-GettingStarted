import { BrowserModule } from '@angular/platform-browser';   //
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';

// FormsModule is used for form inputs
import { FormsModule } from '@angular/forms';

// NOTE: the properties of an NgModule are arrays
@NgModule({

  // DECLARATIONS:
  // used to declare which application components belong to this module.
  // By convention the AppComponent belongs here.
  // Other components can be added here as well.

  declarations: [
    AppComponent,
    ProductListComponent
  ],

  // IMPORTS:
  // used to import external modules into the components listed here
  imports: [
    BrowserModule,
    FormsModule
  ],

  // BOOTSTRAP:
  // used to declare the AppComponent i.e. app.component.ts, as the startup component of the application.
  // the startup component must contain the selector which has the directive that is used in the index.html file.
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}


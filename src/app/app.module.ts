import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [ // componentlerimizi eklediğimiz yer
    AppComponent,
    ProductComponent
  ],
  imports: [ // baska moduller eklenecekse buraya yazılır.. ilerde httpclient modulu ekleyecez
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // baslangıc - root componenti ndir. bu uygulama bu componentten baslar
})
export class AppModule { }

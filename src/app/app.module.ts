import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcategorieComponent } from './components/addcategorie/addcategorie.component';
import { UpdatecategorieComponent } from './components/updatecategorie/updatecategorie.component';
import { ViewcategoriesComponent } from './components/viewcategories/viewcategories.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { ViewproductsComponent } from './components/viewproducts/viewproducts.component';
import { FormsModule } from '@angular/forms';
import { ViewproductsbycategorieComponent } from './viewproductsbycategorie/viewproductsbycategorie.component';
import { FilterPipe } from './filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    AddcategorieComponent,
    UpdatecategorieComponent,
    ViewcategoriesComponent,
    AddproductComponent,
    UpdateproductComponent,
    ViewproductsComponent,
    ViewproductsbycategorieComponent,
    FilterPipe
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

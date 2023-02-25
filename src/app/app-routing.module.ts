import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategorieComponent } from './components/addcategorie/addcategorie.component';
import { UpdatecategorieComponent } from './components/updatecategorie/updatecategorie.component';
import { ViewcategoriesComponent } from './components/viewcategories/viewcategories.component';
import { ViewproductsComponent } from './components/viewproducts/viewproducts.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ViewproductsbycategorieComponent } from './viewproductsbycategorie/viewproductsbycategorie.component';
const routes: Routes = [
  { path: 'all-categorie', component: ViewcategoriesComponent },
  { path: 'addC', component: AddcategorieComponent },
  { path: 'updateC/:id', component: UpdatecategorieComponent },
  { path: 'updateP/:id', component: UpdateproductComponent },
  { path: 'addP', component: AddproductComponent },
  { path: 'produits', component: ViewproductsComponent },
  {path: 'getProductByCategorie/:id',component:ViewproductsbycategorieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
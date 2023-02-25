import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { Categorie } from '../Categorie';
import { Product } from '../Product';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
 
data: any;
  id:any ;
  categoriesList:Categorie[]=[];
  product?: Product
  constructor(private service: ProductService, private router: Router,private AppService: AppService) {
    
   }
  
  form = new FormGroup({
    nom: new FormControl(null, [Validators.required]),
    quantite: new FormControl(0, [Validators.required]),
    disponible: new FormControl(this.product?.disponible || false),
    categorieId:new FormControl(null, [Validators.required]),
  })
  ngOnInit(): void {
    this.AppService.getCategories().subscribe((categories: Categorie[]) => {
      this.categoriesList = categories;
    });
  }
 
  submit(){
    this.data = this.form.value;
    console.log(this.data);
    this.id = this.data.categorieId; 
    this.service.addProduit(this.id,this.data).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['all-categorie']);
  }
}
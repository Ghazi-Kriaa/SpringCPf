import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { Product } from '../Product';
import { AppService } from 'src/app/app.service';
import { Categorie } from '../Categorie';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  product?: Product
  data: any
  idCat:any
  categoriesList:Categorie[]=[];
  constructor(private service: ProductService, private route: ActivatedRoute, private router : Router,private AppService: AppService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getProductById(id).subscribe(data => {
      this.product = data
      console.log(this.product)
    });
    this.AppService.getCategories().subscribe((categories: Categorie[]) => {
      this.categoriesList = categories;
    });
  }

  form = new FormGroup({
    nom: new FormControl(this.product?.nom, [Validators.required]),
    quantite: new FormControl(this.product?.quantite, [Validators.required]),
    disponible: new FormControl(this.product?.disponible || false),
    categorieId:new FormControl(this.product?.categorie,[Validators.required])
  })

  submit(){
    this.data = this.form.value
    console.log(this.data)
    this.idCat=this.data.categorieId
    this.service.updateProduct(this.product?.id, this.data,this.idCat).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/all-categorie']);
  }

}
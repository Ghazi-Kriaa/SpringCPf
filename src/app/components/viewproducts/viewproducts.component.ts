import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ngxCsv } from 'ngx-csv';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

products: any[] | undefined
categorieId:number | undefined
url: string = "http://localhost:8080/";

  

  constructor(private service: ProductService, private router: Router ,private route:ActivatedRoute) { 
   
  }

  ngOnInit(): void {
    this.service.getProducts().subscribe(data => {
      this.products = data;
      console.log(data);
    })
  }

  deleteProduct(id: number){
    this.service.deleteProduct(id).subscribe(data => {
      this.products = this.products?.filter(products => products.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  }

  updateProduct(id: number){
    this.router.navigate(['updateP', id]);
  }
  downlodCsvFil(){
    new ngxCsv(this.products, 'products');
  }
  downlodPDF(){
    
    const doc = new jsPDF('p','pt');
          
    autoTable(doc, {
    
      body: this.products,
      didDrawPage: (dataArg) => { 
       doc.text('products', dataArg.settings.margin.left, 10);
      }
 }); 
    doc.save('products.pdf');
  }

}
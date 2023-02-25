import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ngxCsv } from 'ngx-csv';
import { AppService } from 'src/app/app.service';
import { Product } from '../components/Product';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-viewproductsbycategorie',
  templateUrl: './viewproductsbycategorie.component.html',
  styleUrls: ['./viewproductsbycategorie.component.css']
})
export class ViewproductsbycategorieComponent {
  product: any[] | undefined
  categories: any[] | undefined
  searchTerm: string='';
  url: string = "http://localhost:8080/produits";

  constructor(private service: ProductService, private router: Router,private route: ActivatedRoute) { 
   
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getProductsByCategory(id).subscribe(data => {
      this.product = data;
      console.log(data);
    })
  }
  deleteProduct(id: number){
    this.service.deleteProduct(id).subscribe(data => {
      this.product = this.product?.filter(product => product.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  }
  updateProduct(id: number){
    this.router.navigate(['updateP', id]);
  }
  downlodCsvFil(){
    new ngxCsv(this.product, 'products');
  }
  downlodPDF(){
    
    const doc = new jsPDF('p','pt');
          
    autoTable(doc, {
    
      body: this.product,
      didDrawPage: (dataArg) => { 
       doc.text('products', dataArg.settings.margin.left, 10);
      }
 }); 
    doc.save('Products.pdf');
  }

}
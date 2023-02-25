import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ngxCsv } from 'ngx-csv';
import { AppService } from 'src/app/app.service';
import { Categorie } from '../Categorie';


@Component({
  selector: 'app-viewcategories',
  templateUrl: './viewcategories.component.html',
  styleUrls: ['./viewcategories.component.css']
})
export class ViewcategoriesComponent implements OnInit {

categories: any[] | undefined
filteredCategories: Categorie[] = [];
  searchTerm: string = '';
  url: string = "http://localhost:8080/";

  constructor(private service: AppService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.service.getCategories().subscribe(categories => {
      this.categories = categories;
      
      console.log(this.categories)
    })
  }

  deleteCategorie(id: number){
    this.service.deleteCategorie(id).subscribe(data => {
      this.categories = this.categories?.filter(categorie => categorie.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  }
  onCellClick(categoryId: number) {
    this.router.navigate(['getProductByCategorie/', categoryId]);
  }
  updateCategorie(id: number){
    this.router.navigate(['updateC', id]);
  }
  downlodCsvFil(){
    new ngxCsv(this.categories, 'categories');
  }
  downlodPDF(){
    
    const doc = new jsPDF('p','pt');
          
    autoTable(doc, {
    
      body: this.categories,
      didDrawPage: (dataArg) => { 
       doc.text('categories', dataArg.settings.margin.left, 10);
      }
 }); 
    doc.save('categories.pdf');
  }

}
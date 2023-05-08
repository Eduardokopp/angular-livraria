import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  livros: any
  bookService: ProductListService;
  constructor(bookService: ProductListService) {
    this.bookService = bookService
  }

  ngOnInit(): void {

    console.log('Iniciou')

    this.bookService.getBooks().subscribe({
      next: (res) => {
        console.log(res);
        this.livros = res;
      },
      error: (err) => console.log(err)
    });
  }

}

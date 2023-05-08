import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { LivrariaAppComponent } from './components/livraria-app/livraria-app.component';
import { FiltersComponent } from './components/livraria-app/filters/filters.component';
import { ProductsListComponent } from './components/livraria-app/products-list/products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListService } from './components/livraria-app/products-list/product-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    LivrariaAppComponent,
    FiltersComponent,
    ProductsListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ProductListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

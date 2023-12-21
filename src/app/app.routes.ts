import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'about', title: 'about', component: AboutComponent },
  { path: 'products', title: 'products', component: ProductsComponent },
  { path: 'contact', title: 'contact', component: ContactsComponent },
];

import { AddProductComponent } from './add-product/add-product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
<<<<<<< HEAD
import { AuthGuard} from './guards/auth.guard';
=======
>>>>>>> a2bca9b393626d0760e7852e55b50798fb3625f8

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
<<<<<<< HEAD
  { path: "about", component: AboutComponent ,canActivate : [AuthGuard]},
  { path: "contact", component: ContactComponent ,canActivate : [AuthGuard]},
  { path: "productlist", component: ProductListComponent ,canActivate : [AuthGuard]},
  { path: "addproduct", component: AddProductComponent ,canActivate : [AuthGuard]}
=======
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "productlist", component: ProductListComponent },
  { path: "addproduct", component: AddProductComponent }
>>>>>>> a2bca9b393626d0760e7852e55b50798fb3625f8
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

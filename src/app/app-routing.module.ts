import { ChangeOwnershipComponent } from './shared-pages/change-ownership/change-ownership.component';
import { VerifyProductComponent } from './shared-pages/verify-product/verify-product.component';
import { HomeComponent } from './manufacturer/home/home.component';
import { ProductDetailsComponent } from './manufacturer/product-details/product-details.component';
import { LoginComponent } from './shared-pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';

const routes: Routes = [
  { path: '', component: DefaultComponent, children: [{
    path: 'manufacturer/home', component: HomeComponent,
  }, {
    path: 'manufacturer/login', component: LoginComponent,
  }, {
    path: 'manufacturer/add-product', component: ProductDetailsComponent,
  }, {
    path: 'verify-product', component: VerifyProductComponent,
  }, {
    path: 'change-ownership', component: ChangeOwnershipComponent,
  }] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

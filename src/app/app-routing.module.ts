import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './core/pages/create/create.component';
import { HomeComponent } from './core/pages/home/home.component';
import { HowItWorksComponent } from './core/pages/how-it-works/how-it-works.component';
import { ShopDetailComponent } from './core/pages/shop-detail/shop-detail.component';
import { ShopComponent } from './core/pages/shop/shop.component';


const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/:id', component: ShopDetailComponent},
  { path: 'how-it-works', component: HowItWorksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

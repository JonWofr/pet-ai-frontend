import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './core/pages/create/create.component';
import { HomeComponent } from './core/pages/home/home.component';
import { HowItWorksComponent } from './core/pages/how-it-works/how-it-works.component';
import { ShopDetailComponent } from './core/pages/shop-detail/shop-detail.component';
import { ShopComponent } from './core/pages/shop/shop.component';


const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data: {animation: 'homePage'} },
  { path: 'create', component: CreateComponent, data: {animation: 'createPage'}},
  { path: 'shop', component: ShopComponent, data: {animation: 'shopPage'}},
  { path: 'shop/:id', component: ShopDetailComponent, data: {animation: 'shopDetailPage'}},
  { path: 'how-it-works', component: HowItWorksComponent, data: {animation: 'howItWorksPage'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

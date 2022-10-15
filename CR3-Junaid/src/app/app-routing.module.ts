import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "menu", component: MenuComponent
  },
  {
    path: "dishes/:dishIndex", component: DetailsComponent
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "cart", component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

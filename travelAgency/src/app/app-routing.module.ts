import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { BlogComponent} from  './blog/blog.component';
import { TravelsComponent} from  './travels/travels.component';
import { CartComponent } from './cart/cart.component';
import { OffersDetailsComponent } from './offers-details/offers-details.component';

const routes: Routes = [{
        path:"",component: HomeComponent
  },
  {
        path: "blog",component: BlogComponent
  },
  {
        path: "travels",component: TravelsComponent
  },
  {
      path: 'products/:productId', component: OffersDetailsComponent
  },
  {
        path: 'cart', component: CartComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProductsComponent } from './products/products.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomePageComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'Users', component: UserDetailsComponent },
  { path: 'Posts', component: PostComponentComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

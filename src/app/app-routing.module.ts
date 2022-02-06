import { CommentsComponent } from './comments/comments.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProductsWithoutDiscountComponent } from './products-without-discount/products-without-discount.component';
import { ProductsWithDiscountComponent } from './products-with-discount/products-with-discount.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
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
  { path: 'Sign Up', component: SignInComponent },
  { path: 'Login', component: LogInComponent },
  {
    path: 'Products',
    component: ProductsComponent,
    children: [
      {
        path: 'ProductsWithDiscount',
        component: ProductsWithDiscountComponent,
      },
      {
        path: 'ProductsWithoutDiscount',
        component: ProductsWithoutDiscountComponent,
      },
    ],
  },
  { path: 'Users', component: UserDetailsComponent },
  { path: 'Posts', component: PostComponentComponent },
  {
    path: 'Products/:id',
    component: ProductDetailsComponent,
  },
  { path: 'Comments/:id', component: CommentsComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

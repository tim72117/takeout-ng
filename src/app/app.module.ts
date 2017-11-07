import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { MatInputModule, MatCardModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatDialogModule, MatListModule, MatIconModule, MatExpansionModule, MatProgressBarModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AdminComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      {
          path: '',
          component: ProductsComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

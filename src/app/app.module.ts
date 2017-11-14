import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { MatInputModule, MatCardModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatDialogModule, MatListModule, MatIconModule, MatExpansionModule, MatProgressBarModule,
  MatSelectModule,
  MatSnackBarModule
} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { DialogOverviewExampleDialog } from './products/products.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AdminComponent,
    CartComponent,
    DialogOverviewExampleDialog,
    OrderComponent
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
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatSelectModule,
    MatSnackBarModule,
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
      },
      {
        path: 'order',
        component: OrderComponent
      }
    ])
  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

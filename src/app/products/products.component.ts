import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
    providers: [MatDialog]
})
export class ProductsComponent implements OnInit {

    step = 0;
    categories = [];

    constructor(private http: Http, public dialog: MatDialog) { }

    ngOnInit() {
        this.http.get('/api/categories')
        .toPromise()
        .then((response) => { this.categories = response.json().categories });
    }

    add(product) {
        let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: {product: product}
        });

    }

}

@Component({
    selector: 'add',
    template: `
    <mat-dialog-content>
    <mat-form-field>
    <mat-select [(ngModel)]="amount" placeholder="數量">
      <mat-option *ngFor="let amount of [1, 2, 3]" [value]="amount">
        {{ amount }}
      </mat-option>
    </mat-select>
  </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions>
    <button mat-button (click)="add()">加入購物車</button>
    </mat-dialog-actions>
    `
  })
  export class DialogOverviewExampleDialog {
    product;
    amount = 1;
    constructor(private http: Http,
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
          this.product = data.product;
    }

      add(): void {
        this.http.post('/api/cart/products', {id: this.product.id})
        .toPromise()
        .then((response) => { });
      this.dialogRef.close();
    }

  }

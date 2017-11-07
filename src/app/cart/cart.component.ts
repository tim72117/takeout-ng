import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    products = [];
    constructor(private http: Http) { }

    ngOnInit() {
        this.http.get('/api/cart/products')
        .toPromise()
        .then((response) => { this.products = response.json().products });
    }

    add(product) {
        this.http.post('/api/cart/products', {id: product.id})
        .toPromise()
        .then((response) => { this.products = response.json().products });
    }

    delete(prodcut) {
        this.http.delete('/api/cart/products/' + prodcut.id)
        .toPromise()
        .then((response) => { this.products.splice(this.products.indexOf(prodcut), 1); })
    }
}

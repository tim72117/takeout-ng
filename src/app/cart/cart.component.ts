import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    products = [];
    headers;
    constructor(private http: Http) { }

    ngOnInit() {

        this.headers = new Headers({
            "Authorization": 'Bearer ' + localStorage.getItem('token')
        });
        this.http.get('/api/cart/products', {headers: this.headers})
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

    submit() {
        this.http.delete('/api/cart/submit')
        .toPromise()
        .then((response) => { this.products.splice(this.products.indexOf(prodcut), 1); })
    }
}

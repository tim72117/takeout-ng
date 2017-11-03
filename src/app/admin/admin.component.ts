import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    products = [];
    newProduct = {title: '', price: 0};

    constructor(private http: Http) { }

    ngOnInit() {
        this.http.get('/api/products')
            .toPromise()
            .then((response) => { this.products = response.json().products })
    }

    add() {
        this.http.post('/api/products', {newProduct: this.newProduct})
            .toPromise()
            .then((response) => { this.products.push(response.json().product); })
    }

    delete(prodcut) {
        this.http.delete('/api/products/' + prodcut.id)
            .toPromise()
            .then((response) => { this.products.splice(this.products.indexOf(prodcut), 1); })
    }

}

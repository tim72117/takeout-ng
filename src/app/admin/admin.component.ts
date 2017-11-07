import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    products = [];
    categories = [];
    newProduct = {title: '', price: 0};
    newCategory = {title: ''};
    category = {id: 0, loading: true};

    constructor(private http: Http) { }

    ngOnInit() {
        this.http.get('/api/categories')
            .toPromise()
            .then((response) => { this.categories = response.json().categories })
    }

    openCategory(category) {
        this.category = category;
        this.category.loading = true;
        this.http.get('/api/category/' + category.id + '/products')
            .toPromise()
            .then((response) => {
                this.products = response.json().products;
                this.category.loading = false;
            })
    }

    addProduct() {
        this.http.post('/api/category/' + this.category.id + '/products', {newProduct: this.newProduct})
            .toPromise()
            .then((response) => { this.products.push(response.json().product); })
    }

    delete(prodcut) {
        this.http.delete('/api/products/' + prodcut.id)
            .toPromise()
            .then((response) => { this.products.splice(this.products.indexOf(prodcut), 1); })
    }

    addCategory() {
        this.http.post('/api/categories', {newCategory: this.newCategory})
            .toPromise()
            .then((response) => { this.categories.push(response.json().category); })
    }

    deleteCategory(category) {
        this.http.delete('/api/categories/' + category.id)
            .toPromise()
            .then((response) => { this.categories.splice(this.categories.indexOf(category), 1); })
    }

}

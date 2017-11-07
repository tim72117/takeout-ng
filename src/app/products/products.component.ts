import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    step = 0;
    categories = [];

    constructor(private http: Http) { }

    ngOnInit() {
        this.http.get('/api/categories')
        .toPromise()
        .then((response) => { this.categories = response.json().categories })
    }

}

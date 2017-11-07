import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    constructor() { }

    ngOnInit(private http: Http) {
        this.http.get('/api/categories')
        .toPromise()
        .then((response) => { this.categories = response.json().categories })
    }

}

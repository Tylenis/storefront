import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Item } from '../models/ItemModel';

@Injectable({
    providedIn: 'root',
})
export class ItemService {
    constructor(private http: HttpClient) {}

    getAllItems(): Observable<Item[]> {
        return this.http.get<Item[]>('https://fakestoreapi.com/products');
    }

    getItemsCategories(): Observable<string[]> {
        return this.http.get<string[]>(
            'https://fakestoreapi.com/products/categories'
        );
    }

    getOneItem(itemId: number): Observable<Item> {
        return this.http.get<Item>(
            `https://fakestoreapi.com/products/${itemId}`
        );
    }
}

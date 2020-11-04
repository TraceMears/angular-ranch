
import { Livestock } from './livestock';

export class CartItem {
    stock_id: number;
    stock_type: string;
    gender: string;
    age: number;
    weight: number;
    price: number;
    quantity: number;

    constructor(livestock: Livestock) {
        this.stock_id = livestock.stock_id;
        this.stock_type = livestock.stock_type;
        this.gender = livestock.gender;
        this.age = livestock.age;
        this.weight = livestock.weight;
        this.price = livestock.price;
        this.quantity = 1;
    }
    
}

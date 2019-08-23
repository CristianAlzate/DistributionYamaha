import { CustomerModel } from './customer.model';
import { BikeModel } from './bike.model';

export class OrderModel {
    OrderId:number;
    Customer:CustomerModel;
    Details?:OrderDetail[] = [];
    Sent:boolean = false;
    ViewDetail:boolean = false;
}

export class OrderDetail {
    OrderDetailId?:number;
    OrderId?:number;
    Bike?:BikeModel;
    Quantity?:number;
    QuantityLeft?:number;
}
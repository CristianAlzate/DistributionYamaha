import { OrderModel } from './order.model';
import { TruckModel } from './truck.model';
import { BikeModel } from './bike.model';

export class ShipmentModel {
    ShipmentId:number;
    Orders:OrderModel[] = [];
    Trucks:TruckDistribution[] = [];
}
export class TruckDistribution {
    TruckDistributionId:number;
    Truck:TruckModel;
    TruckFloor:TruckDistributionFloor[] = [];
}

export class TruckDistributionFloor {
    TruckDistributionFloorId?:number;
    Floor?:number;
    BikesLeft?:BikeModel[] = [];
    BikesRight?:BikeModel[] = [];
    RightSidePositionSlots?:number = 3;
    LeftSideSpace?:number;
}